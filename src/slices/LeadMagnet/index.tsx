"use client";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { BannerEbookStyles } from "./Styles";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `LeadMagnet`.
 */
export type LeadMagnetProps = SliceComponentProps<Content.LeadMagnetSlice>;

/**
 * Component for "LeadMagnet" Slices.
 */
const LeadMagnet = ({ slice }: LeadMagnetProps): JSX.Element => {
  const { intro, title, image, iframe } = slice.primary;
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BannerEbookStyles>
        <div className="container">
          <div className="banner__content">
            <div className="titularRevela">
              <div className="h1 text-lg tablet:text-2xl largeTablet:text-3xl ">
                <PrismicRichText
                  field={intro}
                  components={{
                    paragraph: (props) => (
                      <p>
                        <span className="blink block"></span>
                        {props.node.text}
                      </p>
                    ),
                  }}
                />
              </div>
              <div className="text-2xl tablet:text-3xl largeTablet:text-4xl pt-10">
                <PrismicRichText field={title} />
              </div>
            </div>
            <PrismicNextImage field={image} />
            <div
              className="w-full mt-4"
              dangerouslySetInnerHTML={{ __html: iframe || "" }}
            ></div>
          </div>
        </div>
      </BannerEbookStyles>
    </Bounded>
  );
};

export default LeadMagnet;
