import { PrismicNextLink } from "@prismicio/next";
const NavigationMenu = ({ navigation_items }: any) => {
  return (
    <div
      className="text-left h-fit min-h-[470px] right-6 left-6 mt-6 bg-gradient-to-r from-[#000] to-[#4d1a6d] py-9 px-7 rounded-lg transform opacity-100 scale-100"
      aria-label="navigation"
    >
      <div>
        <p
          className="font-bold text-textPrimary text-xs opacity-70 tracking-[0.2em] pb-8"
          role="none"
        >
          MENU
        </p>

        <div className="flex flex-col gap-y-2 pb-14 " role="none">
          {navigation_items.map(
            ({ label, small_label, link }: any, index: number) => {
              return (
                <PrismicNextLink
                  key={index}
                  field={link}
                  className="text-textPrimary hover:text-mm_primary transition-colors duration-200 ease-in-out"
                >
                  <span className="font-bold text-2xl tablet:text-3xl ">
                    <p>{label}</p>
                  </span>
                  <span className="text-sm tablet:text-md">
                    <p>{small_label}</p>
                  </span>
                </PrismicNextLink>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
