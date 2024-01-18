import "dotenv/config";
import { createClient } from "@/prismicio";

export const domain_name: string =
  process.env.DOMAIN || "https://medicalmarketing.digital";

if (!process.env.DOMAIN)
  throw new Error("please provide the environment variable `DOMAIN`");

export const getSettings = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return settings;
};

export const getHeader = async () => {
  const client = createClient();
  const header = await client.getSingle("header");
  return header;
};

export const getFooter = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return footer;
};

export function adjustCurrentDate(dayToAdjust: number) {
  const currentDate = new Date(); // Get the current date
  const sevenDaysAgo = new Date(currentDate);

  sevenDaysAgo.setDate(currentDate.getDate() + dayToAdjust);

  return sevenDaysAgo;
}

export function getReadTime(text: string) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
