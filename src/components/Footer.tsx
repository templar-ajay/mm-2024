import { getFooter } from "@/utils";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

const Footer = async ({ lang }: any) => {
  const footer = await getFooter();
  const { disclaimer, logo, slices } = footer.data;
  return (
    <div>
      <footer className="w-full min-h-[200px] bg-footerBG pb-10">
        <div
          className="w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center"
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <div className="flex justify-between w-full pt-10 pb-16 largeTablet:pt-12 ">
            <div className="w-[140px]">
              <PrismicNextImage field={logo} />
            </div>
            <div className="w-[140px] tablet:w-auto flex justify-center items-center">
              <div className="relative block text-left">
                <div>
                  <button
                    className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    Language
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap items-center tablet:items-start flex-col tablet:flex-row tablet:text-left text-center">
            <div />
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
