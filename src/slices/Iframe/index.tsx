import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Iframe`.
 */
export type IframeProps = SliceComponentProps<Content.IframeSlice>;

/**
 * Component for "Iframe" Slices.
 */
const Iframe = ({ slice }: IframeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="mx-auto w-full"
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
