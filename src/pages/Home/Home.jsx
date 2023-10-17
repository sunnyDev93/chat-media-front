import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { ImageCard } from "../../components";
import {
  Features,
  Plan,
  Hero,
  Demo,
  WorkFlow,
  Content,
  Faq,
  Letter,
} from "../../pages";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";
// import Feedback from "./Feedback";

const Home = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const cardContent = translations[language]?.quesCardContent;
  const content = translations[language]?.content;

  return (
    <div className="bg-black">
      {location.pathname === "/cancel" && toast.warning("Cancel")}
      <Hero />
      <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto"></div>
      <Demo />
      <WorkFlow />
      <Letter />
      <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-2/3 justify-between mb-20">
        {cardContent?.map((item, key) => (
          <ImageCard card={item} key={key} />
        ))}
      </div>
      {content && (
        <Content content={content[0]?.content} title={content[0]?.title} />
      )}

      <Features />
      {/* <Feedback /> */}
      <Plan />
      {content && (
        <Content content={content[1]?.content} title={content[1]?.title} />
      )}
      <Faq />
      <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto mt-10"></div>
    </div>
  );
};

export default Home;
