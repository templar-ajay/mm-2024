import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import {
  domain_name,
  generateAlternatesLanguagesOptionsForMetadata,
  getSettings,
} from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: "es-es" })
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

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid, { lang: "es-es" })
    .catch(() => notFound());
  const settings = await getSettings();
  const {
    meta_title: default_meta_title,
    meta_description: default_meta_description,
    og_image: default_og_image,
  } = settings.data;

  const { lang, alternate_languages } = page;
  // alternate_languages.map((x) => x);
  console.log("alternate_language", alternate_languages);
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
      url: domain_name + "/" + params.uid,
    },
    metadataBase: new URL(domain_name), // should always be the same
    alternates: {
      canonical: "/" + params.uid + "/",
      languages: generateAlternatesLanguagesOptionsForMetadata({
        lang: lang,
        uid: params.uid,
        alternate_languages: alternate_languages,
      }),
    },
  };
}

// test pageSpeed by removing this. This function is already called in homepage route, and static params are already generated
export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page", { lang: "es-es" });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
