"use client";
import React, { useState } from "react";
import { FaqStyles } from "./FaqParaStyles";
import { MdExpandMore as Chevron } from "react-icons/md";
import { motion } from "framer-motion";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";

const FaqPara = ({ title, description }: any): JSX.Element => {
  const [showInfo, setInfo] = useState(false);
  const toggleInfo = () => setInfo((showInfo) => !showInfo);

  return (
    <FaqStyles
      className={clsx(
        showInfo ? `${"faq-open"}` : `${"faq-closed"}`,
        "!w-full"
      )}
    >
      <button className="question w-full " onClick={toggleInfo}>
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="!text-sm mobile:!text-xl tablet:!text-2xl">
                {children}
              </h3>
            ),
          }}
        />
        <div className="trigger">
          <Chevron />
        </div>
      </button>
      {showInfo && (
        <motion.div
          initial="closed"
          animate={showInfo ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: "0" },
          }}
          className="answer !text-sm mobile:!text-lg tablet:!text-xl px-2 mobile:p-5"
        >
          <PrismicRichText field={description} />
        </motion.div>
      )}
    </FaqStyles>
  );
};

export default FaqPara;
