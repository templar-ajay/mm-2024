import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
