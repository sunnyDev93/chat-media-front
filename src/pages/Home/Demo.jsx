import React from "react";
import { WorkTab } from "../../components";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const Demo = () => {
  const { language } = useLanguage();
  const bg = "./assets/img/design/demoBg.png";
  return (
    <div className="relative">
      <div className="absolute z-10 right-0 top-0">
        <img src={bg} alt="demoBg" />
      </div>
      <section className="p-10">
        <h1 className="text-2xl xl:text-4xl text-white text-center font-bold">
          {translations[language]?.demoTtl}
        </h1>
        <p className="text-center text-[#9CA3AF] mt-5 xl:mt-10 text-md xl:text-lg font-normal xl:w-2/5 flex mx-auto">
          {translations[language]?.demoTxt}
        </p>
      </section>
      <WorkTab />
    </div>
  );
};

export default Demo;
