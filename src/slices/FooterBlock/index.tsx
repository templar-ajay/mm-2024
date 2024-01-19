import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FooterBlock`.
 */
export type FooterBlockProps = SliceComponentProps<Content.FooterBlockSlice>;

/**
 * Component for "FooterBlock" Slices.
 */
const FooterBlock = ({ slice }: FooterBlockProps): JSX.Element => {
  return (
    <div className="text-white my-3 tablet:my-10 w-full largeTablet:my-0">
      <div className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-4">
        <p>{slice.primary.title}</p>
      </div>
      <div className="w-full flex flex-col">
        {slice.items.map(({ link, label }, index) => (
          <div key={index} className="cursor-pointer">
            <PrismicNextLink field={link}>
              <div className="font-normal text-textPrimary text-sm hover:text-lightYellow  transition-all ease-in-out duration-400 tracking-[-0.02em] opacity-[0.7] pb-3">
                <p>
                  <>{label}</>
                </p>
              </div>
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterBlock;
