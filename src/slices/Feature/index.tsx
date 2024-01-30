import { Reveal } from "@/components/ClientComponents/Reveal";
import Heading from "@/components/Heading";
import LeftLineContainer from "@/components/LeftLineContainer";
import Paragraph from "@/components/Paragraph";
import SectionWrapper from "@/components/SectionWrapper";
import { getSettings, adjustCurrentDate } from "@/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

type getComponentsProps = {
  heading_h2_color?: any;
  content_color?: any;
};
type componentsType = ({}: getComponentsProps) => JSXMapSerializer;

const getComponents: componentsType = ({
  heading_h2_color,
  content_color,
}: getComponentsProps) => {
  return {
    heading2: ({ children }: any) => {
      return (
        <Heading
          as="h2"
          className="featuredHeading w-full font-bold text-textPrimary tracking-[-0.02em] text-3xl largeTablet:
          largeTablet:text-4xl"
          color={heading_h2_color}
        >
          {children}
        </Heading>
      );
    },
    paragraph: ({ children }: any) => (
      <Paragraph
        className="w-full text-lg opacity-75 largeTablet:text-xl"
        color={content_color}
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
        color={content_color}
      >
        {children}
      </li>
    ),
  };
};

/**
 * Props for `Feature`.
 */
export type FeatureProps = SliceComponentProps<Content.FeatureSlice, any>;

/**
 * Component for "Feature" Slices.
 */
const Feature = async ({
  slice,
  context,
}: FeatureProps): Promise<JSX.Element> => {
  const { display_date, left_side_small_icon, heading_h2, content } =
    slice.primary;
  const settings = await getSettings();
  const { text_color } = settings.data;
  const { lang } = context;

  const components = getComponents({
    heading_h2_color: text_color,
    content_color: text_color,
    // bold_color:
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="feature-section"
    >
      <SectionWrapper>
        <LeftLineContainer
          icon={
            left_side_small_icon?.url && (
              <Reveal type="scale">
                <PrismicNextImage
                  className="absolute -left-[28px] -top-[12px] z-50 max-w-[56px]"
                  loading="eager"
                  field={slice.primary.left_side_small_icon}
                />
              </Reveal>
            )
          }
        >
          <div
            className="pb-2 largeTablet:mb-2 mb-[100px]"
            style={{ color: text_color || "" }}
          >
            <div className="flex gap-y-0 py-0 flex-col largeTablet:flex-col">
              <div className="flex flex-col px-6 ">
                {/* gap-y-8 */}
                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.7,
                    marginBottom: "8px",
                    color: text_color || "#fff",
                  }}
                >
                  <Reveal>
                    {display_date &&
                      (lang == "en-us" ? "Updated: " : "Actualizado: ") +
                        new Date(
                          adjustCurrentDate(-7).toDateString()
                        ).toLocaleString(lang == "en-us" ? "en-US" : "es-ES", {
                          // year: "numeric",
                          month: "long",
                          day: "numeric",
                        }) +
                        ", " +
                        new Date(adjustCurrentDate(-7)).getFullYear()}
                  </Reveal>
                </div>
                <div className="relative largeTablet:max-w-[500px]">
                  <Reveal x={-20}>
                    <PrismicRichText
                      field={heading_h2}
                      components={components}
                    ></PrismicRichText>
                  </Reveal>
                </div>
                <div className="largeTablet:max-w-[500px] feature-body">
                  <Reveal x={20}>
                    <PrismicRichText field={content} components={components} />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </LeftLineContainer>
      </SectionWrapper>
    </section>
  );
};

export default Feature;
