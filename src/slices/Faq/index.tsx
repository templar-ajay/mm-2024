import Bounded from "@/components/Bounded";
import FAQTemplate from "@/components/FAQ/FAQTemplate";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  const { title } = slice.primary;
  const items = slice.items;
  return (
    <Bounded
      as="section"
      className="py-6 mobile:py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FAQTemplate title={title} items={items} />
    </Bounded>
  );
};

export default Faq;
