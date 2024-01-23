import clsx from "clsx";

const ThemedOutline = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] w-fit bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432]",
        className
      )}
    >
      <div className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center overflow-hidden bg-darkBG text-text_color">
        {children}
      </div>
    </div>
  );
};

export default ThemedOutline;
