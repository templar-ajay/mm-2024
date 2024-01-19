"use client";
import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { HeaderDocumentDataNavigationItemsItem } from "../../../prismicio-types";
import NavigationMenu from "@/components/ServerComponents/NavigationMenu";
import { Transition } from "@headlessui/react";

const Navigation = ({ navigation_items }: any) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="scale-75 mobile:scale-100 -m-2">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="absolute z-50 left-[0] w-full px-2 mobile:px-3 largeTablet:px-6">
        <Transition
          as="div"
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95 left-0"
          enterTo="transform opacity-100 scale-100 left-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <NavigationMenu navigation_items={navigation_items} />
        </Transition>
      </div>
    </>
  );
};

export default Navigation;
