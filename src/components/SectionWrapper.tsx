import clsx from "clsx";
type SectionWrapperProps = {
  className?: string;
  children: any;
};
const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
  return (
    <div
      className={clsx(
        `w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
