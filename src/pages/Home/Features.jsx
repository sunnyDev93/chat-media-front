import React from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const Features = () => {
  const { language } = useLanguage();
  return (
    <div>
      <section className="mt-10">
        <div className="absolute w-1/2 right-0">
          <img src="./assets/img/design/rbg1.png" alt="" className="" />
        </div>
        <div className="flex flex-col">
          <h2 className="mb-3 text-2xl xl:text-4xl font-extrabold tracking-tight text-[#F3F4F6] text-center sm:text-center">
            {translations[language]?.featureTtl}
          </h2>
          <p className="text-[#9CA3AF] text-md xl:text-lg mx-2 sm:mx-0 text-center sm:text-center">
            {translations[language]?.featureTxt}
          </p>
        </div>
        <div className="items-center max-w-screen-xl gap-16 px-4 mx-auto lg:grid lg:grid-cols-2 mt-10">
          <div className="text-gray-500 sm:text-lg relative">
            <div className="absolute left-0 top-0">
              <img src="./assets/img/design/rbg1.png" alt="" />
            </div>
            <nav
              className="grid gap-4 mt-5 md:mt-10 mx-2 sm:mx-0"
              aria-label="Tabs"
              role="tablist"
            >
              <button
                type="button"
                className="text-left bg-[#FFFFFF0D] border border-[#36D45A] p-2 md:p-5 rounded-xl "
              >
                <span className="flex items-center px-2 py-4">
                  <img
                    src="./assets/img/text.png"
                    className="h-16 w-16"
                    alt="img"
                  />
                  <span className="grow ml-6">
                    <span className="block text-xl font-semibold text-gray-200">
                      {translations[language]?.featureCardTtl1}
                    </span>
                    <span className="block mt-1 text-sm text-white">
                      {translations[language]?.featureCardTxt1}
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="text-left bg-[#FFFFFF0D] border border-[#36D45A] p-4 md:p-5 rounded-xl "
              >
                <span className="flex items-center px-2 py-4">
                  <img
                    src="./assets/img/security.png"
                    className="h-16 w-16"
                    alt="img"
                  />
                  <span className="grow ml-6">
                    <span className="block text-xl font-semibold text-gray-200">
                      {translations[language]?.featureCardTtl2}
                    </span>
                    <span className="block mt-1 text-sm text-white">
                      {translations[language]?.featureCardTxt2}
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="text-left bg-[#FFFFFF0D] border border-[#36D45A] p-4 md:p-5 rounded-xl "
              >
                <span className="flex items-center px-2 py-4">
                  <img
                    src="./assets/img/virtual.png"
                    className="h-16 w-16"
                    alt="img"
                  />
                  <span className="grow ml-6">
                    <span className="block text-xl font-semibold text-gray-200">
                      {translations[language]?.featureCardTtl3}
                    </span>
                    <span className="block mt-1 text-sm text-white">
                      {translations[language]?.featureCardTxt3}
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            {/* <div className="absolute w-3/4 right-0">
              <img
                src="./assets/img/design/rbg1.png"
                alt=""
                className="rounded-full"
              />
            </div> */}
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
              <img
                className="w-full rounded-lg"
                src="./assets/img/design/fea1.png"
                alt="office content 1"
              />
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
              <img
                className="w-full rounded-lg"
                src="./assets/img/design/fea2.png"
                alt="office content 1"
              />
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
              <img
                className="w-full rounded-lg"
                src="./assets/img/design/fea3.png"
                alt="office content 1"
              />
            </figure>
            <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
              <img
                className="w-full rounded-lg mt-10"
                src="./assets/img/design/fea4.png"
                alt="office content 1"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
