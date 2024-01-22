"use client";
import { PrismicRichText } from "@prismicio/react";
import { FAQTemplateStyles } from "./FAQTemplateStyles";
import FaqPara from "./FaqPara";

const FAQTemplate = ({ title, items }: any): JSX.Element => {
  return (
    <FAQTemplateStyles className="section section__padding">
      <div className="container container__tight">
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="h1 text-text_color mb-6 mobile:mb-12 text-2xl mobile:text-3xl tablet:text-4xl font-bold">
                {children}
              </h2>
            ),
          }}
        />
        <div className="theCopyP">
          <div className="column">
            {items.map(({ question, answer }: any, i: number) => (
              <FaqPara key={i} title={question} description={answer} />
            ))}
          </div>
        </div>
      </div>
    </FAQTemplateStyles>
  );
};

export default FAQTemplate;
