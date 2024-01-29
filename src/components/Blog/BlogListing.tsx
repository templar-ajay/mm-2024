import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Bounded from "../Bounded";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

import TrendingPosts from "./TrendingPosts";
import FeaturedPost from "./FeaturedPost";

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

type BlogListingProps = {
  featuredPost: any;
  data: any;
  text_color: any;
  context: { lang: string };
};
const BlogListing = async ({
  featuredPost,
  data,
  text_color,
  context,
}: BlogListingProps): Promise<JSX.Element> => {
  const { heading, content, other_blogs_title, slices } = data;
  const { lang } = context;

  const {
    title: featuredPostTitle,
    content: featuredPostContent,
    image: featuredPostImage,
  } = featuredPost.data;

  const components = getComponents({ text_color: text_color });

  return (
    <Bounded as="section">
      <div className="pt-10 mobile:pt-16 tablet:pt-32 pb-12 mobile:pb-20 tablet:pb-44">
        <div className="mx-auto max-w-[750px]">
          <PrismicRichText field={heading} components={components} />
          <div className="text-lg mobile:text-xl tablet:text-2xl text-left tablet:text-center pt-4 largeTablet:pt-10 ">
            <PrismicRichText field={content} components={components} />
          </div>
        </div>
      </div>
      {/* featured post */}
      <FeaturedPost
        featuredPost={featuredPost}
        featuredPostTitle={featuredPostTitle}
        featuredPostImage={featuredPostImage}
        featuredPostContent={featuredPostContent}
        lang={lang}
        text_color={text_color}
      />
      {/* trending posts */}
      <TrendingPosts
        other_blogs_title={other_blogs_title}
        lang={lang}
        text_color={text_color}
      />
    </Bounded>
  );
};

export default BlogListing;
