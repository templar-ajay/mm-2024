import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { domain_name, getSettings } from "@/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListing from "@/components/Blog/BlogListing";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getSingle("blog_listing", { lang: "es-es" })
    .catch(() => notFound());
  const settings: any = await getSettings();
  const { text_color } = settings.data;
  const { lang, alternate_languages } = page;

  const { featured_post } = page.data;
  //@ts-ignore
  const featuredPost = await client.getByUID("blog", featured_post?.uid, {
    lang: lang,
  });

  return (
    <>
      <Header lang={lang} />
      <BlogListing
        data={page.data}
        featuredPost={featuredPost}
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

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getSingle("blog_listing", { lang: "es-es" })
    .catch(() => notFound());

  const settings: any = await getSettings();
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
      url: domain_name + "/es/blog/",
    },
    metadataBase: new URL(domain_name), //should always be the same
    alternates: {
      canonical: "/es/blog",
      languages: {
        "en-US": "/blog",
        "es-ES": "/es/blog",
        "x-default": "/es/blog",
      },
    },
  };
}
