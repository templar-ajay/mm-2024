import { DateField, ImageField, RichTextField, Tags } from "@prismicio/client";
import Bounded from "../Bounded";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import { getReadTime, getSettings } from "@/utils";
import { PrismicNextImage } from "@prismicio/next";
import ThemedOutline from "../ThemedOutline";

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
          size="lg"
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
      <Paragraph className="w-full text-lg opacity-70" color={text_color}>
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

type BlogPageData = {
  date_published?: DateField;
  title?: RichTextField;
  image?: ImageField;
  content?: RichTextField;
};
const Blog = async ({
  data,
  tags,
  context,
}: {
  data: BlogPageData;
  tags?: Tags;
  context?: { lang?: string };
}) => {
  const { date_published, title, image, content } = data;
  const { lang } = context || { lang: undefined };
  const readTime = getReadTime(content);

  const settings = await getSettings();
  const { text_color } = settings.data;
  const components = getComponents({ text_color: text_color });
  return (
    <Bounded as="section" className="pt-32 pb-44">
      <div className="">
        <PrismicRichText field={title} components={components} />
      </div>
      <div className="mt-3 mobile:mt-6 w-full flex flex-wrap justify-start tablet:justify-center">
        {tags?.map((tag, index) => (
          <div
            key={index}
            className="text-text_color opacity-70 text-sm mr-4 tablet:mx-4"
          >
            #{tag}
          </div>
        ))}
      </div>
      <div className="w-full pt-6 flex flex-wrap gap-2 pb-6 largeTablet:pb-4 justify-between opacity-70 text-text_color text-base ">
        <span className="">
          {lang == "en-us" ? "Published On: " : "Publicado: "}
          {new Date(date_published || "").toLocaleDateString()}
        </span>
        <span className="">
          {lang == "en-us"
            ? `${readTime} ${readTime > 1 ? "mins" : "min"} Read`
            : `Lectura de ${readTime} ${readTime > 1 ? "mins" : "min"}`}
        </span>
      </div>

      <ThemedOutline className="w-full">
        <PrismicNextImage
          className="w-full object-cover max-h-[500px]"
          field={image}
        />
      </ThemedOutline>
      <div
        style={{ color: text_color || "" }}
        className="w-full max-w-[780px] mt-6 largeTablet:mt-24 text-textPrimary text-lg"
      >
        <PrismicRichText field={content} components={components} />
      </div>
    </Bounded>
  );
};

export default Blog;
