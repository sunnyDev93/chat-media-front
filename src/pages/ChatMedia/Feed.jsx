import React from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";
import UserCard from "./UserCard";

const Feed = () => {
  const { language } = useLanguage();
  return (
    <div>
      <div className="max-w-screen-xl px-4 mx-auto text-center pt-10 lg:px-12 z-40">
        <div className="mb-6 text-white text-2xl xl:text-4xl font-bold">
          {translations[language]?.postTtl}
        </div>
        <p className="text-sm font-normal text-[#9CA3AF] lg:text-md sm:px-16 xl:px-48 animate-float-up">
          {translations[language]?.postTxt}
        </p>
      </div>
      <div className="flex justify-center my-10">
        <div className="col-span-1 flex justify-center mx-2">
          <div>
            <img
              src="./assets/img/design/chat1.png"
              className="rounded-lg"
              alt="img"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-center mx-2">
          <div>
            <UserCard />
            <img
              src="./assets/img/design/chat3.png"
              className="rounded-lg"
              alt="img"
            />
          </div>
        </div>
        <div className="col-span-1 flex justify-center mx-2">
          <div>
            <img
              src="./assets/img/design/chat2.png"
              className="rounded-lg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
