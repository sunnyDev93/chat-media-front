import React, { useState } from "react";
import { ChatDropzone, ChatHero, ChatMedia, Feed } from "../index";
import { ImageCard } from "../../components";
import ChatFooter from "./ChatFooter";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";
const Main = () => {
  const [lang] = useState("en-US");
  const { language } = useLanguage();
  const cardContent = translations[language]?.quesCardContent;
  const [showMode, setShowMode] = useState(true);
  return (
    <div>
      {showMode ? (
        <div>
          <ChatHero />
          <ChatDropzone
            lang={lang}
            showMode={showMode}
            setShowMode={setShowMode}
          />
          <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto mt-32 mb-20"></div>
          <Feed />
          <div className="max-w-screen-xl px-4 mx-auto text-center pt-10 lg:px-12 z-40 mt-16 xl:mt-32">
            <div className="mb-6 text-white text-2xl xl:text-4xl font-bold">
              {translations[language]?.letterTtl}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-2/3 justify-between mt-10 mb-20">
            {cardContent.map((item, key) => (
              <ImageCard card={item} key={key} />
            ))}
          </div>
          <ChatFooter />
        </div>
      ) : (
        <div>
          <ChatMedia />
        </div>
      )}
    </div>
  );
};

export default Main;
