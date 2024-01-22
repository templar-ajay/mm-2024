import Heading from "@/components/Heading";
import LeftLineContainer from "@/components/LeftLineContainer";
import Paragraph from "@/components/Paragraph";
import SectionWrapper from "@/components/SectionWrapper";
import Typography from "@/components/Typography";
import VideoPopup from "@/components/ClientComponents/VideoPopup";
import { getSettings } from "@/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type getComponentsProps = {
  heading_h1_color?: any;
  heading_h2_color?: any;
  sub_header_color?: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getComponents: componentsType = ({
  heading_h1_color,
  heading_h2_color,
  sub_header_color,
}: getComponentsProps) => {
  return {
    heading1: ({ children }: any) => {
      return (
        <Heading
          as="h1"
          className="w-full font-bold text-xs tracking-[0.2em] opacity-70 uppercase mb-4"
          color={heading_h1_color}
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
          className="w-full font-bold tracking-[-0.02em] text-3xl largeTablet:
          largeTablet:text-4xl"
          color={heading_h2_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="w-full text-sm opacity-70 largeTablet:text-base"
        color={sub_header_color}
      >
        {children}
      </Paragraph>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
  };
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = async ({ slice }: HeroProps): Promise<JSX.Element> => {
  const settings = await getSettings();
  const { primary_color, secondary_color, text_color } = settings.data;
  const components = getComponents({
    heading_h1_color: text_color,
    heading_h2_color: text_color,
    sub_header_color: text_color,
    // bold_color:
  });

  const {
    heading_h2,
    heading_h1,
    image,
    left_side_small_icon,
    text,
    video_popup_iframe,
  } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SectionWrapper className="pt-[60px] largeTablet:pt-[115px]">
        <LeftLineContainer>
          <div className="relative">
            <PrismicNextImage
              className="absolute -top-[20px] -left-[32px] tablet:-left-[32px] largeTablet:-left-[52px] first-line-icon"
              field={left_side_small_icon}
            />
          </div>

          <main>
            <div className="flex largeTablet:items-center h-full flex-col gap-x-6 mobile:gap-y-10 largeTablet:flex-row mx-6 pb-[80px]">
              <div className="flex-1 ">
                {heading_h1?.length && (
                  <PrismicRichText field={heading_h1} components={components} />
                )}

                <div className="relative">
                  <PrismicRichText field={heading_h2} components={components} />
                </div>
                <div className="py-10">
                  <PrismicRichText field={text} components={components} />
                </div>
              </div>
              {image?.url && (
                <div className="flex-1 min-w-[16rem] mobile:min-w-[22rem]">
                  <div className="w-full h-full px-0 mobile:px-10 mobile:pt-5 flex items-center justify-evenly ">
                    {video_popup_iframe?.length ? (
                      <VideoPopup
                        iframe={
                          <div
                            className="w-full h-full"
                            dangerouslySetInnerHTML={{
                              __html: video_popup_iframe || "",
                            }}
                          ></div>
                        }
                        image={
                          <PrismicNextImage className="w-full" field={image} />
                        }
                      />
                    ) : (
                      <PrismicNextImage field={image} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </LeftLineContainer>
      </SectionWrapper>
    </section>
  );
};

export default Hero;
