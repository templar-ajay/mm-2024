import "dotenv/config";
import { createClient } from "@/prismicio";

export const domain_name: string =
  process.env.DOMAIN_URL || "https://medicalmarketing.digital";

if (!process.env.DOMAIN_URL)
  throw new Error("please provide the environment variable `DOMAIN_URL`");

export const getSettings = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return settings;
};

export const getHeader = async ({ lang }: any) => {
  const client = createClient();
  const header = await client.getSingle("header", { lang: lang });
  return header;
};

export const getFooter = async ({ lang }: any) => {
  const client = createClient();
  const footer = await client.getSingle("footer", { lang: lang });
  return footer;
};

export function adjustCurrentDate(dayToAdjust: number) {
  const currentDate = new Date(); // Get the current date
  const sevenDaysAgo = new Date(currentDate);

  sevenDaysAgo.setDate(currentDate.getDate() + dayToAdjust);

  return sevenDaysAgo;
}

export function getReadTime(content: any) {
  const text = content?.map((o: any) => o?.text).join(" ") || "";
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}

function getLanguageCode(x: string) {
  return x?.split("-")[1].toUpperCase();
}

export function getCountries(...arr: string[]) {
  return arr
    .filter((x) => x)
    .map((x) => getLanguageCode(x))
    .filter((x) => x);
}

export function createVideoFrame(video_popup: any) {
  // const iframe = `<iframe src="https://player.vimeo.com/video/841623575?app_id=122963&amp;autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9; loading=" lazy"="" width="" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="DOC CLINIC - Testimonio Doctor Colombo MM"></iframe>`;
  let htmlString = `<iframe src="${video_popup?.url}" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9;" width="" height="" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Dr. David Molina - Medical Marketing"></iframe>`;

  // Replace the width attribute
  htmlString = htmlString.replace(/width="(\d+)"/g, 'width=""');

  htmlString = htmlString.replace(/height="(\d+)"/g, 'height=""');

  // Add &autoplay=1 to the src attribute
  // htmlString = htmlString.replace(
  //   /src="(https:\/\/player\.vimeo\.com\/video\/\d+\?app_id=\d+)"/g,
  //   `src="${video_popup.url}&autoplay=1" style="position:absolute; top:0;left:0;width:100%;aspect-ratio:16/9; loading="lazy"`
  // );

  return htmlString;
}

export function generateAlternatesLanguagesOptionsForMetadata({
  middleRoute,
  lang,
  uid,
  alternate_languages,
}: any) {
  const obj: any = {
    "x-default": uid ? "/" + (middleRoute ? middleRoute : "") + uid + "/" : "/",
    [lang.split("-")?.[0] + "-" + lang.split("-")?.[1].toUpperCase()]: uid
      ? "/" + (middleRoute ? middleRoute : "") + uid + "/"
      : "/",
  };

  alternate_languages?.forEach(({ lang, uid }: any) => {
    obj[lang.split("-")?.[0] + "-" + lang.split("-")?.[1].toUpperCase()] = uid
      ? "/" +
        lang.split("-")?.[0] +
        "/" +
        (middleRoute ? middleRoute : "") +
        uid +
        "/"
      : "/";
  });

  return obj;
}
