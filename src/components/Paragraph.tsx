import { getSettings } from "@/utils";
import clsx from "clsx";
type ParagraphProps = {
  children: React.ReactNode;
  className: string;
  color: string;
};

export default async function Paragraph({
  children,
  className,
  color,
}: ParagraphProps) {
  const settings = await getSettings();
  const { text_color } = settings.data;
  return (
    <p
      style={{ color: color || text_color || "#FFF9ED" }}
      className={clsx("py-[15px] font-body", className)}
    >
      {children}
    </p>
  );
}
