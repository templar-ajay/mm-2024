import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Blog from "@/components/Blog/Blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog", params.uid, { lang: "en-us" })
    .catch(() => notFound());
  const { date_published, title, image, content } = page.data;
  const { lang, alternate_languages, tags } = page;
  return (
    <>
      <Header lang={lang} />
      <Blog data={page.data} tags={tags} context={{ lang: lang }} />
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

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
