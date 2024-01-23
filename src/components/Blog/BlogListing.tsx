import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "../Bounded";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { getReadTime, getSettings } from "@/utils";
import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ThemedButton from "../ServerComponents/ThemedButton";
import Link from "next/link";

type getComponentsProps = {
  text_color: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getComponents: componentsType = ({ text_color }: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          size="xl"
          className="text-left tablet:text-center font-bold tracking-normal mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="md"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading4: ({ children }: any) => {
      return (
        <Heading
          as="h4"
          size="sm"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading5: ({ children }: any) => {
      return (
        <Heading
          as="h5"
          size="xs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading6: ({ children }: any) => {
      return (
        <Heading
          as="h6"
          size="xxs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph className="w-full opacity-70" color={text_color}>
        {children}
      </Paragraph>
    ),
    listItem: ({ children }: any) => (
      <li style={{ color: text_color }} className="opacity-75">
        {children}
      </li>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
  };
};

const getFeaturedPostComponents: componentsType = ({
  text_color,
}: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="md"
          className="font-bold tracking-normal mt-1 mb-1 mobile:mt-2 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="md"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading4: ({ children }: any) => {
      return (
        <Heading
          as="h4"
          size="sm"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading5: ({ children }: any) => {
      return (
        <Heading
          as="h5"
          size="xs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading6: ({ children }: any) => {
      return (
        <Heading
          as="h6"
          size="xxs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph className="w-full opacity-70" color={text_color}>
        {children}
      </Paragraph>
    ),
    listItem: ({ children }: any) => (
      <li style={{ color: text_color }} className="opacity-75">
        {children}
      </li>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
  };
};

const getPostComponents: componentsType = ({
  text_color,
}: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          size="xl"
          className="text-left tablet:text-center font-bold tracking-normal mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          size="lg"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          size="md"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading4: ({ children }: any) => {
      return (
        <Heading
          as="h4"
          size="sm"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading5: ({ children }: any) => {
      return (
        <Heading
          as="h5"
          size="xs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    heading6: ({ children }: any) => {
      return (
        <Heading
          as="h6"
          size="xxs"
          className="w-full font-bold tracking-[-0.02em] mt-4 mb-1 mobile:mt-8 mobile:mb-2"
          color={text_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph className="w-full opacity-70" color={text_color}>
        {children}
      </Paragraph>
    ),
    listItem: ({ children }: any) => (
      <li style={{ color: text_color }} className="opacity-75">
        {children}
      </li>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
  };
};

type BlogListingProps = {
  data: any;
  context: { lang: string };
};
const BlogListing = async ({
  data,
  context,
}: BlogListingProps): Promise<JSX.Element> => {
  const { heading, content, featured_post, slices } = data;
  const { lang } = context;
  const settings = await getSettings();

  const client = createClient();
  const featuredPost = await client.getByUID("blog", featured_post?.uid);

  const { tags } = featuredPost;
  const {
    title: featuredPostTitle,
    content: featuredPostContent,
    image: featuredPostImage,
  } = featuredPost.data;

  const shortFeaturedContent =
    featuredPostContent
      //@ts-ignore
      ?.map((obj) => obj?.text)
      .join(" ")
      .split(" ")
      .splice(0, 24)
      .join(" ") + "...";

  const { text_color } = settings.data;
  const components = getComponents({ text_color: text_color });
  const featuredPostComponents = getFeaturedPostComponents({
    text_color: text_color,
  });
  const postComponents = getPostComponents({ text_color: text_color });
  return (
    <Bounded as="section">
      <div className="pt-10 mobile:pt-16 tablet:pt-32 pb-44">
        <div className="mx-auto max-w-[750px]">
          <PrismicRichText field={heading} components={components} />

          <div className="text-lg mobile:text-xl tablet:text-2xl text-left tablet:text-center pt-4 largeTablet:pt-10 ">
            <PrismicRichText field={content} components={components} />
          </div>
        </div>
      </div>
      {/* featured post */}
      <div className="w-full largeTablet:grid  largeTablet:gap-x-11 largeTablet:grid-cols-2">
        <div className="hidden largeTablet:flex largeTablet:items-center">
          <div
            style={{ borderRadius: 6, width: "100%" }}
            className="h-fit w-fit p-[1px] bg-gradient-to-tr from-[#a428bc] via-[#ffc400] to-[#a428bc] drop-shadow-[0_0_4px_#ED5432]"
          >
            <div className="flex-1 h-fit relative rounded-[5px] overflow-hidden ">
              <PrismicNextImage field={featuredPostImage} />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden largeTablet:flex largeTablet:items-center largeTablet:pl-8">
          <div className="w-full">
            <div className="mb-6 largeTablet:mb-0 ">
              <div
                style={{ borderRadius: 24, padding: "4px 16px 6px" }}
                className="h-fit w-fit p-[1px] bg-gradient-to-tr from-[#a428bc] via-[#ffc400] to-[#a428bc] drop-shadow-[0_0_4px_#ED5432]"
              >
                <span className="font-bold text-xs uppercase tracking-[0.2em] text-[#11181C]">
                  {lang == "en-us" ? "Featured Post" : "Artículo destacado"}
                </span>
              </div>
            </div>
            <div className="largeTablet:hidden">
              <div
                style={{ borderRadius: 5, width: "100%" }}
                className="h-fit w-fit p-[1px] bg-gradient-to-tr from-[#a428bc] via-[#ffc400] to-[#a428bc] drop-shadow-[0_0_4px_#ED5432]"
              >
                <div className="w-fit h-fit relative rounded-[5px] overflow-hidden">
                  <PrismicNextImage
                    field={featuredPostImage}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="pt-6 pb-2 largeTablet:pt-10">
              <div className="w-full flex flex-wrap justify-start">
                {tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="text-text_color opacity-70 text-sm mr-4"
                  >
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[40px] largeTablet:min-h-[50px] mb-3">
              <span className="font-bold text-text_color text-2xl largeTablet:text-4xl">
                <PrismicRichText
                  field={featuredPostTitle}
                  components={featuredPostComponents}
                />
              </span>
            </div>
            <div className="pb-2">
              <span className="font-normal opacity-70 text-text_color text-base tablet:text-lg">
                {shortFeaturedContent}
              </span>
            </div>
            <div className="pb-2">
              <span className="font-normal opacity-70 text-text_color text-base">
                {getReadTime(featuredPostContent)}
                {lang == "en-us" ? ` minutes read` : ` minutos de lectura`}
              </span>
            </div>
            <div className="pt-1">
              <Link
                prefetch={true}
                href={
                  (lang == "en-us" ? "blog/" : "/es/blog") + featuredPost.uid
                }
              >
                <ThemedButton>
                  <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex ">
                    {lang == "en-us" ? "Read More" : "Leer Más"}
                  </span>
                </ThemedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* trending posts */}
      <div></div>
    </Bounded>
  );
};

export default BlogListing;
