import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Member from "./Member";

/**
 * Props for `OurTeam`.
 */
export type OurTeamProps = SliceComponentProps<Content.OurTeamSlice>;

/**
 * Component for "OurTeam" Slices.
 */
const OurTeam = ({ slice }: OurTeamProps): JSX.Element => {
  return (
    <Bounded
      as="section"
      className="my-6 mobile:my-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full h-full">
        <div className="text-center mb-8 mobile:mb-20 text-[2rem] tablet:text-[2.5rem] largeTablet:text-[3.5rem] tracking-tight font-extrabold text-text_color">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="grid grid-flow-cols gap-y-20 grid-cols-1 mobile:grid-cols-2 largeTablet:grid-cols-3">
          {slice.items.map(({ avatar, designation, name }, index) => (
            <Member
              key={index}
              avatar={avatar}
              designation={designation}
              name={name}
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default OurTeam;
