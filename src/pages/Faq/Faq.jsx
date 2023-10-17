import React from "react";
import { Collapse } from "../../components";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

export default function Faq() {
  const { language } = useLanguage();
  const leftColapData = translations[language]?.leftFaqQues;
  const rightColapData = translations[language]?.rightFaqQues;
  return (
    <>
      <div className="flex flex-col mb-16">
        <h2 className="mb-3 text-2xl lg:text-4xl font-extrabold tracking-tight text-[#F3F4F6] text-center sm:text-center">
          {translations[language]?.faqTtl}
        </h2>
        <p className="text-[#9CA3AF] text-md lg:text-lg mx-2 sm:mx-0 text-center sm:text-center">
          {translations[language]?.faqTxt}
        </p>
      </div>

      <div className="xl:grid xl:grid-cols-2 w-3/4 mx-auto">
        <div className="col-span-1 pr-6  max-h-fit">
          {leftColapData?.map((item, key) => (
            <Collapse open={false} title={item.title} key={key}>
              {item.content}
            </Collapse>
          ))}
        </div>
        <div className="col-span-1 pr-6  max-h-fit">
          {rightColapData?.map((item, key) => (
            <Collapse open={false} title={item.title} key={key}>
              {item.content}
            </Collapse>
          ))}
        </div>
      </div>
    </>
  );
}
