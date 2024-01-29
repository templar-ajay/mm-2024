import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { domain_name, getSettings } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getByUID("page", "homepage", { lang: "es-es" })
    .catch(() => notFound());
  const { lang, alternate_languages } = page;
  // console.log("lang", lang);
  // console.log("alt_lang", alternate_languages);

  return (
    <>
      <Header lang={lang} />
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ lang: lang }}
      />
      <Footer lang={lang} alternate_languages={alternate_languages} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", "homepage", { lang: "es-es" })
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
      url: domain_name + "/es",
    },
    metadataBase: new URL(domain_name),
    alternates: {
      canonical: "/es",
      languages: {
        "es-ES": "/es",
        "en-US": "/",
        "x-default": "/es",
      },
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", { lang: "en-us" });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
