import type { Metadata, ResolvingMetadata, Viewport } from "next";

import "./globals.css";
import clsx from "clsx";

import { Inter } from "next/font/google";

import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

// import { Providers } from "@/app/providers";
import { TrackingHeadScript } from "@phntms/next-gtm";
import { getSettings } from "@/utils";
import { Providers } from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/ServerComponents/Background";

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  const { meta_title, meta_description, og_image } = settings.data;

  return {
    title: meta_title || "Fallback Meta Title",
    description: meta_description || "Fallback description",
    openGraph: {
      images: [og_image?.url || "./fallback_image_path"],
      title: meta_title || "Fallback Meta Title",
      description: meta_description || "Fallback Meta Title",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    formatDetection: {
      telephone: false,
      date: false,
      email: false,
      address: false,
    },
    applicationName: "Medical Marketing Agency",
    appleWebApp: {
      title: "Medical Marketing Agency",
    },
    other: {
      "facebook-domain-verification": "oj47j8b5zs6sk0nnnmil05csbcry5a",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const {
    gtm_id: GTM_ID,
    primary_color,
    text_color,
    background_color,
    background_strokes,
  } = settings.data;

  return (
    <html lang="en">
      <body
        className={clsx(
          body.variable,
          display.variable,
          `selection:bg-mm_primary selection:text-white`,
          "min-h-[100vh]"
        )}
        style={{ backgroundColor: background_color || "" }}
      >
        <Providers>
          <TrackingHeadScript id={GTM_ID || ""} isGTM={true} />
          <Background backgroundImages={background_strokes}>
            {children}
          </Background>
        </Providers>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
