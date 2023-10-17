import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthStatus } from "../../store/auth/selectors";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const Content = ({ title, content }) => {
  const isAuthenticated = useSelector(getAuthStatus);
  const { language } = useLanguage();
  return (
    <div>
      <section className="my-5 flex justify-center">
        <div className="mx-auto w-2/3 border-4 rounded-lg border-[#a6f545a3] p-5 xl:p-10 mt-0 mb-10 xl:m-20 bg-[#FFFFFF0D]">
          <div className="lg:flex items-center justify-between">
            <div>
              <span className="text-xl font-bold xl:text-3xl text-white">
                {title}
              </span>
              <p className="text-white mt-3 xl:text-md text-sm">
                <span className="font-semibold">ChatMP3:</span> {content}
              </p>
            </div>
            {isAuthenticated ? (
              <Link
                to="/chatmedia"
                className="text-white xl:text-lg hover:font-bold text-sm border border-[#A6F545] rounded-2xl px-2 xl:px-4 py-2 xl:py-2 shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)] lg:mt-0 mt-5"
              >
                {translations[language]?.heroBtnStarted}
              </Link>
            ) : (
              <button className="text-white xl:text-md text-sm border border-[#A6F545] rounded-2xl px-2 xl:px-4 py-2 xl:py-2 shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)] lg:mt-0 mt-5">
                {translations[language]?.heroBtnSignUpFree}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
