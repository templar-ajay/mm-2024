import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

type getComponentsProps = {
  text_color: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getPostComponents: componentsType = ({
  text_color,
}: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading as="h3" size="md" className="font-bold" color={text_color}>
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

const TrendingPosts = async ({
  lang,
  other_blogs_title,
  text_color,
}: {
  lang: string;
  other_blogs_title: any;
  text_color: string;
}) => {
  const client = createClient();
  const blogs = await client.getAllByType("blog", {
    lang: lang,
    pageSize: 10,
  });

  const components = getPostComponents({ text_color: text_color });

  const getShortPostContent = (content: any): string =>
    content
      //@ts-ignore
      ?.map((obj) => obj?.text)
      .join(" ")
      .split(" ")
      .splice(0, 24)
      .join(" ") + "...";

  return (
    <div>
      <div className="w-full mt-12 mobile:mt-16 tablet:mt-20 mb-8 mobile:mb-12 tablet:mb-16">
        <span className="w-full text-text_color font-bold text-[10px] mobile:text-xs tracking-[0.2em] opacity-70 uppercase mb-2 mobile:mb-4">
          {other_blogs_title}
        </span>
        <div className="grid grid-cols-1 gap-y-12 mobile:gap-y-20 mt-4 mobile:mt-10 largeTablet:grid-cols-2 largeTablet:gap-x-11 ">
          {blogs?.map(
            (
              { data: { content, image, date_published, title }, tags, uid },
              index: number
            ) => (
              <div key={index} className="w-full">
                <div className="undefined">
                  <div
                    style={{ borderRadius: 5, width: "100%" }}
                    className="h-fit w-fit p-[1px] bg-gradient-to-tr from-[#a428bc] via-[#ffc400] to-[#a428bc] drop-shadow-[0_0_4px_#ED5432]"
                  >
                    <div className="w-fit h-fit max-h-[350px] relative rounded-[5px] overflow-hidden">
                      <PrismicNextImage
                        field={image}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-start pt-6 pb-2 largeTablet:pt-10">
                  <div className="h-4"></div>
                  {tags?.map((tag: any, index: number) => (
                    <div
                      key={index}
                      className="text-text_color opacity-70 text-sm mr-4"
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className=" min-h-[40px] largeTablet:min-h-[60px] mb-3">
                  <PrismicRichText field={title} components={components} />
                </div>
                <div className="pb-1 largeTablet:pb-1 min-h-[40px] largeTablet:min-h-[80px] font-normal opacity-70 text-text_color text-base">
                  {getShortPostContent(content)}
                </div>
                <div className="flex items-center pb-1 largeTablet:pb-2 ">
                  <span className="font-normal opacity-70 text-text_color text-base">
                    7 {lang == "es-es" ? "minutos de lectura" : "minutes read"}
                  </span>
                </div>
                <div className="pt-1">
                  <Link
                    prefetch={true}
                    href={(lang == "en-us" ? "blog/" : "/es/blog/") + uid}
                  >
                    <div className="h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] cursor-pointer w-fit bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432] [&_div]:hover:bg-[#610C9F] transition-all ease-in-out duration-400">
                      <div className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] bg-darkBG ">
                        <span className="font-bold text-sm leading-[1] text-[#FEF8F4] flex ">
                          {lang == "es-es" ? "Leer Más" : "Read More"}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingPosts;
