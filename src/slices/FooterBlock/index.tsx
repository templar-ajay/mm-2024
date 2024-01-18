import { Content } from "@prismicio/client";
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
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-white sm:w-1/2 my-3 tablet:my-10 largeTablet:w-[20%] tablet:w-[20%] w-full largeTablet:my-0">
        <div className="font-bold text-textPrimary opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8 !pb-4">
          <p>Company</p>
        </div>
        <div className="w-full flex flex-col">
          <div className="cursor-pointer">
            <a
              rel="noopener noreferrer"
              href="https://medicalmarketing.digital/about-medical-marketing-team"
            >
              <div className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                <p>Medical Marketing Team</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
