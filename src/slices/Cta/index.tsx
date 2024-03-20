import Bounded from "@/components/Bounded";
import { Reveal } from "@/components/ClientComponents/Reveal";
import { PersistQueryParamsPrismicNextLink } from "@/components/PersistQueryParams";
import { getSettings } from "@/utils";
import {
  ColorField,
  Content,
  ImageField,
  KeyTextField,
  LinkField,
  NumberField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
export default async function Cta({ slice }: CtaProps): Promise<JSX.Element> {
  const settings = await getSettings();
  const { text_color, background_color } = settings.data;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && (
        <DefaultCTA
          top_small_icon={slice.primary.top_small_icon}
          main_text={slice.primary.main_text}
          secondary_text={slice.primary.secondary_text}
          cta_link={slice.primary.cta_link}
          below_text={slice.primary.below_text}
          after_cta_text={slice.primary.after_cta_text}
          text_color={text_color}
          background_color={background_color}
        />
      )}
      {slice.variation === "iFrame" && (
        <IframeCTA
          top_small_icon={slice.primary.top_small_icon}
          iframe={slice.primary.iframe}
          height={slice.primary.height}
          max_width={slice.primary.max_width}
          after_cta_text={slice.primary.after_cta_text}
          text_color={settings.data.text_color}
          background_color={settings.data.background_color}
        />
      )}
    </Bounded>
  );
}

type defaultCTAProps = {
  main_text: RichTextField;
  secondary_text: RichTextField;
  cta_link: LinkField;
  below_text: RichTextField;
  after_cta_text: RichTextField;
  top_small_icon: ImageField;
  background_color: ColorField;
  text_color: ColorField;
};

function DefaultCTA({
  main_text,
  secondary_text,
  cta_link,
  below_text,
  after_cta_text,
  top_small_icon,
  background_color,
  text_color,
}: defaultCTAProps): JSX.Element {
  return (
    <>
      <div className="w-full flex px-1 largeTablet:px-6 mb-0">
        <div className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#A428BC] border-t-[#A428BC] border h-[100px] mobile:h-[200px] w-full to-gray-800">
          <div className="absolute -right-[28px] -top-[28px]">
            <Reveal type="scale" delay="0.3">
              <PrismicNextImage field={top_small_icon} />
            </Reveal>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mb-[60px] w-full">
        <div className="w-full max-w-[1256px] mx-auto px-6 flex justify-center flex-col items-center">
          <div className="w-full items-center flex flex-col">
            <PersistQueryParamsPrismicNextLink field={cta_link}>
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
            </PersistQueryParamsPrismicNextLink>
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
    </>
  );
}

type iFrameCTAProps = {
  top_small_icon: ImageField;
  iframe: KeyTextField;
  height: NumberField;
  max_width: NumberField;
  after_cta_text: RichTextField;
  background_color: ColorField;
  text_color: ColorField;
};

function IframeCTA({
  top_small_icon,
  iframe,
  height,
  max_width,
  after_cta_text,
  background_color,
  text_color,
}: iFrameCTAProps): JSX.Element {
  return (
    <>
      <div className="w-full flex px-1 largeTablet:px-6 mb-0">
        <div className="relative flex-1 bg-gradient-to-b border-b-0 border-l-0 border-r-[#A428BC] border-t-[#A428BC] border h-[100px] mobile:h-[200px] w-full to-gray-800">
          <div className="absolute -right-[28px] -top-[28px]">
            <Reveal type="scale" delay="0.5">
              <PrismicNextImage field={top_small_icon} />
            </Reveal>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mb-[60px] w-full">
        <div className="w-full max-w-[1256px] mx-auto flex justify-center flex-col items-center">
          <div className="w-full items-center flex flex-col ">
            <div
              style={{ maxWidth: max_width || "" }}
              className="w-full max-w-lg h-fit min-h-[38px] min-w-[110px] rounded-md p-[1px] bg-gradient-to-br from-[#A428BC] via-[#FFF8C9] to-[#A428BC] drop-shadow-[0_0_4px_#ED5432] hover:via-[#FFF8C9] hover:to-[#ED5432] transition-all ease-in-out duration-400"
            >
              <div
                className="h-full w-full min-h-[38px] rounded-md flex justify-center items-center overflow-hidden "
                style={{ backgroundColor: background_color || "" }}
              >
                <div
                  className="py-0 tablet:py-4 px-0 tablet:px-3 w-full font-bold font-body text-sm leading-[1] flex-col "
                  style={{ height: height || "" }}
                >
                  <div
                    className="h-full w-full"
                    dangerouslySetInnerHTML={{
                      __html: `
                  ${iframe}
                  `,
                    }}
                  />
                </div>
              </div>
            </div>
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
    </>
  );
}
