import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import ThemedButton from "./ThemedButton";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { getSettings } from "@/utils";
import VideoPopup from "../ClientComponents/VideoPopup";
import ThemedOutline from "../ThemedOutline";

type getComponentsProps = {
  h3_color?: any;
  paragraph_color?: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getComponents: componentsType = ({
  h3_color,
  paragraph_color,
}: getComponentsProps) => {
  return {
    heading3: ({ children }: any) => {
      return (
        <Heading
          as="h3"
          className="w-full font-bold !text-white tracking-[-0.02em] text-lg mobile:text-2xl largeTablet:
          largeTablet:text-2xl"
          color={h3_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="w-full text-sm mobile:text-lg opacity-100 largeTablet:text-xl !py-0 !text-white"
        color={paragraph_color}
      >
        {children}
      </Paragraph>
    ),
    strong: ({ children }: any) => (
      <strong className="opacity-100">{children}</strong>
    ),
    listItem: ({ children }: any) => (
      <li
        className="w-full text-lg opacity-75 largeTablet:text-xl"
        color={paragraph_color}
      >
        {children}
      </li>
    ),
  };
};

const VerticalVideo = async (data: any) => {
  const { name, thumbnail_image, short_review, video_iframe, cta_text } = data;
  const settings = await getSettings();
  const { text_color } = settings.data;
  const components = getComponents({
    h3_color: text_color,
    paragraph_color: text_color,
  });
  return (
    <>
      <ThemedOutline className="[&_img]:hover:scale-110 cursor-pointer">
        <VideoPopup
          image={
            <div className="w-[200px] mobile:w-[366px] h-[300px] mobile:h-[564px] relative">
              <div
                className="absolute "
                style={{
                  background: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 100%
            )`,
                }}
              >
                <PrismicNextImage
                  className="transition-all ease-in-out duration-400"
                  field={thumbnail_image}
                />
              </div>
              <div className="absolute bottom-0">
                <div className="text-center mobile:text-left px-1 mobile:px-8 py-4 mobile:py-10 grid grid-flow-row gap-y-2 mobile:gap-y-4">
                  <PrismicRichText field={name} components={components} />
                  <PrismicRichText
                    field={short_review}
                    components={components}
                  />
                  <ThemedButton className="mx-auto mobile:mx-0 text-center mobile:text-left">
                    {/* <PrismicNextLink field={video_link}> */}
                    {cta_text}
                    {/* </PrismicNextLink> */}
                  </ThemedButton>
                </div>
              </div>
            </div>
          }
          iframe={
            <div
              className="h-full w-full"
              dangerouslySetInnerHTML={{
                __html: video_iframe,
              }}
            ></div>
          }
        />
      </ThemedOutline>
    </>
  );
};

export default VerticalVideo;
