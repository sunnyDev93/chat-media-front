import React from "react";
import { Element } from "react-scroll";
import { ImageCard } from "../../components";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const WorkFlow = () => {
  const { language } = useLanguage();
  const cardContent = translations[language]?.workFlowCardContent;
  return (
    <>
      <Element name="targetSection">
        <div className="bg-black mb-6">
          <h1 className="text-center p-5 text-white font-bold text-2xl xl:text-4xl">
            {translations[language]?.workFlowTtl}
          </h1>
          <p className="text-center pb-5 text-[#9CA3AF] font-normal text-md xl:text-lg mb-5 w-4/5 xl:w-2/5 flex mx-auto">
            {translations[language]?.workFlowTxt}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-2/3 justify-between">
            {cardContent?.map((item, key) => (
              <ImageCard card={item} key={key} />
            ))}
          </div>
        </div>
      </Element>
    </>
  );
};

export default WorkFlow;
