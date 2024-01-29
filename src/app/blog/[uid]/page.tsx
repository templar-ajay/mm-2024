import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Blog from "@/components/Blog/Blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  domain_name,
  generateAlternatesLanguagesOptionsForMetadata,
  getSettings,
} from "@/utils";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid, { lang: "en-us" })
    .catch(() => notFound());
  const { lang, alternate_languages, tags } = page;
  const settings = await client.getSingle("settings");
  const { text_color } = settings.data;
  return (
    <>
      <Header lang={lang} />
      <Blog
        data={page.data}
        tags={tags}
        context={{ lang: lang }}
        text_color={text_color}
      />
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ lang: lang }}
      />
      <Footer lang={lang} alternate_languages={alternate_languages} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid, { lang: "en-us" })
    .catch(() => notFound());

  const settings = await getSettings();
  const {
    meta_title: default_meta_title,
    meta_description: default_meta_description,
    og_image: default_og_image,
  } = settings.data;

  const { meta_title, meta_description, meta_image } = page.data;
  const { lang, alternate_languages } = page;

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
      url: domain_name + "/blog/" + params.uid,
    },
    metadataBase: new URL(domain_name), // should always be the same
    alternates: {
      canonical: "/blog/" + params.uid + "/",
      languages: generateAlternatesLanguagesOptionsForMetadata({
        middleRoute: "blog/",
        lang: lang,
        uid: params.uid,
        alternate_languages: alternate_languages,
      }),
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
