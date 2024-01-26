import clsx from "clsx";
type ParagraphProps = {
  children: React.ReactNode;
  className: string;
  color: string;
};

export default function Paragraph({
  children,
  className,
  color,
}: ParagraphProps) {
  return (
    <p
      style={{ color: color || "#FFF9ED" }}
      className={clsx("py-[15px] font-body", className)}
    >
      {children}
    </p>
  );
}
