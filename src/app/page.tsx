import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { domain_name, getSettings } from "@/utils";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getByUID("page", "homepage")
    .catch(() => notFound());
  const { lang, alternate_languages } = page;
  // console.log("lang", lang);
  // console.log("alt_lang", alternate_languages);

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ lang: lang }}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", "homepage")
    .catch(() => notFound());
  const settings = await getSettings();
  const {
    meta_title: default_meta_title,
    meta_description: default_meta_description,
    og_image: default_og_image,
  } = settings.data;

  const { meta_title, meta_description, meta_image } = page.data;

  return {
    title: meta_title || default_meta_title || "Fallback Title",
    description:
      meta_description || default_meta_description || "Fallback description",
    openGraph: {
      images: [
        meta_image?.url || default_og_image?.url || "./fallback_image_path",
      ],
      title: meta_title || default_meta_title || "Fallback Meta Title",
      description:
        meta_description || default_meta_description || "Fallback Meta Title",
      url: domain_name,
    },
    metadataBase: new URL(domain_name),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/",
        "es-ES": "/es",
        "x-default": "/",
      },
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
