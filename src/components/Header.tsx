import { getHeader } from "@/utils";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Navigation from "./ClientComponents/Navigation";
import Link from "next/link";
const Header = async ({ lang }: any) => {
  const { logo, cta_icon, cta_text, cta_link, navigation_items } = (
    await getHeader({ lang: lang })
  ).data;
  return (
    <div className="relative font-body">
      <div className="w-full max-w-[1256px] mx-auto px-3 mobile:px-6 flex justify-center flex-row items-center">
        <header className="flex flex-grow py-5 mobile_480:py-9 font-inter justify-between items-center">
          <div
            className="items-center w-full justify-between flex mr-1 mb-0 "
            style={{ alignItems: "center" }}
          >
            <div className="block mm-logo-div cursor-pointer">
              <Link href={lang == "es-es" ? "/es" : "/"}>
                <PrismicNextImage field={logo} />
              </Link>
            </div>
            <div
              className="h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] cursor-pointer w-fit bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432]  [&_div]:hover:bg-[#610C9F]  transition-all ease-in-out duration-400"
              style={{ scale: "0.8" }}
            >
              <PrismicNextLink field={cta_link}>
                <div className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center px-3 py-[6px] bg-darkBG transition-all ease-in-out duration-400">
                  <span className="items-center justify-between w-full font-bold text-sm leading-[1] text-[#FEF8F4] flex transition-all ease-in-out duration-400">
                    <PrismicNextImage field={cta_icon} />
                    <span className="text-[16px]">{cta_text}</span>
                  </span>
                </div>
              </PrismicNextLink>
            </div>
          </div>
          <div className="flex w-auto">
            <div className="flex justify-between items-center w-full">
              <div
                className="flex justify-center items-center text-left"
                data-headlessui-state=""
              >
                <button
                  className="text-white"
                  aria-label="menu button"
                  id="headlessui-menu-button-:r90:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <Navigation navigation_items={navigation_items} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
