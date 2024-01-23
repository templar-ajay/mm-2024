import { getCountries, getFooter } from "@/utils";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import LanguageSwitcher from "./ClientComponents/LanguageSwitcher";

type FooterProps = {
  lang: string;
  alternate_languages: any;
};

const Footer = async ({ lang, alternate_languages }: FooterProps) => {
  const footer = await getFooter({ lang: lang });
  const { disclaimer, logo, slices } = footer.data;
  return (
    <div>
      <footer className="w-full min-h-[200px] bg-footerBG pb-10">
        <div
          className="w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center"
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <div className="flex flex-row items-center justify-between w-full pt-10 pb-16 largeTablet:pt-12 ">
            <div className="w-[140px]">
              <PrismicNextImage field={logo} />
            </div>
            <div className="w-[140px] tablet:w-auto flex justify-start items-center">
              <div className="relative block text-left scale-50 mobile:scale-80 z-50">
                <LanguageSwitcher
                  placeholder={
                    lang == "en-us" ? "Cambiar idioma" : "Change Language"
                  }
                  preSelected={lang == "en-us" ? "US" : "ES"}
                  countries={getCountries(lang, alternate_languages?.[0]?.lang)}
                  alternate_uid={alternate_languages?.[0]?.uid}
                />
              </div>
            </div>
          </div>
          <div className="w-full text-center mobile:text-left grid gap-4 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 largeTablet:grid-cols-5">
            <SliceZone
              slices={slices}
              components={components}
              context={{ lang: lang }}
            />
          </div>
          <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 largeTablet:flex-row largeTablet:mt-12">
            <div className="flex-grow">
              <div className="font-normal text-white text-sm tracking-[-0.02em] opacity-[0.35]">
                <PrismicRichText field={disclaimer} />
              </div>
            </div>
            <div className="flex mb-5 largeTablet:mb-0 ">
              <div className="flex">
                <a rel="noreferrer">
                  <div className="font-normal text-textPrimary text-sm tracking-[-0.02em] opacity-[0.35]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
