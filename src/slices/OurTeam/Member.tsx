import { PrismicNextImage } from "@prismicio/next";

const Member = ({ avatar, designation, name }: any): JSX.Element => {
  return (
    <div>
      <div className="text-center text-gray-500 dark:text-gray-400 ">
        <PrismicNextImage
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          field={avatar}
        />
        <div className="mb-1 text-2xl font-bold tracking-tight text-textPrimary">
          {name}
        </div>
        <div className="text-mm_primary">{designation}</div>
      </div>
    </div>
  );
};

export default Member;
