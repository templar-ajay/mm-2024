import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Iframe`.
 */
export type IframeProps = SliceComponentProps<Content.IframeSlice>;

/**
 * Component for "Iframe" Slices.
 */
const Iframe = ({ slice, context }: IframeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mt-10 mobile:mt-20 tablet:mt-36">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }: any) => {
              return (
                <Heading
                  as="h2"
                  size="lg"
                  className="w-full px-5 text-center font-bold tracking-[-0.02em] text-3xl tablet:text-4xl"
                  color={"#fff"}
                >
                  {children}
                </Heading>
              );
            },
          }}
        />
      </div>
      <div
        className="mx-auto w-full mt-4 mobile:mt-8"
        style={{
          height: slice.primary.height + "px",
          maxWidth: slice.primary.max_width + "px",
        }}
        dangerouslySetInnerHTML={{ __html: slice.primary.iframe || "" }}
      />
    </section>
  );
};

export default Iframe;
