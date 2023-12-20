import Bounded from "@/components/Bounded";
import { getSettings } from "@/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = async ({ slice }: CtaProps): Promise<JSX.Element> => {
  const {
    main_text,
    secondary_text,
    cta_link,
    below_text,
    after_cta_text,
    top_small_icon,
  } = slice.primary;

  const settings = await getSettings();
  const { text_color, background_color } = settings.data;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full flex px-1 largeTablet:px-6 mb-0">
        <div className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#A428BC] border-t-[#A428BC] border h-[200px] w-full to-gray-800">
          <PrismicNextImage
            field={top_small_icon}
            className="absolute -right-[28px] -top-[28px]"
          />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mb-[60px] w-full">
        <div className="w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center">
          <div className="w-full items-center flex flex-col">
            <PrismicNextLink field={cta_link}>
              <div className="h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] cursor-pointer w-fit bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432] [&_div]:hover:bg-[#610C9F] transition-all ease-in-out duration-400">
                <div
                  className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center overflow-hidden "
                  style={{ backgroundColor: background_color || "" }}
                >
                  <div className="py-4 px-3 font-bold font-body text-sm leading-[1] flex-col min-h-[70px]">
                    <PrismicRichText
                      field={main_text}
                      components={{
                        paragraph: ({ children }) => (
                          <p
                            className="text-center block w-full mb-5"
                            style={{
                              color: text_color || "",
                              fontSize: "28px",
                            }}
                          >
                            {children}
                          </p>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={secondary_text}
                      components={{
                        paragraph: ({ children }) => (
                          <p
                            className="text-center block w-full text-sm opacity-75"
                            style={{ color: text_color || "" }}
                          >
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </PrismicNextLink>
          </div>
          <div className="w-full largeTablet:w-2/3 pb-16 largeTablet:pb-20">
            <PrismicRichText
              field={below_text}
              components={{
                paragraph: ({ children }) => (
                  <p
                    style={{ color: text_color || "", fontSize: "12px" }}
                    className="w-full font-12 text-center font-normal opacity-75 text-base largeTablet:text-2xl"
                  >
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
        <div>
          <PrismicRichText
            field={after_cta_text}
            components={{
              paragraph: ({ children }) => (
                <p
                  style={{ color: text_color || "" }}
                  className="w-full text-lg opacity-75 largeTablet:text-xl"
                >
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Cta;
