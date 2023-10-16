import React, { useState } from "react";
import { ChatDropzone, ChatHero, ChatMedia, Feed } from "../index";
import { ImageCard } from "../../components";
import ChatFooter from "./ChatFooter";
const Main = () => {
  const [lang, setLang] = useState("en-US");
  const cardContent = [
    {
      imgSrc: "./assets/img/design/stu.png",
      title: "For Students",
      content:
        "Prepare for exams, get help with homework and answer any question you have!",
      style: " shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
    {
      imgSrc: "./assets/img/design/mag.png",
      title: "For Researchers",
      content:
        "Scientific papers, academic articles, books and much more. Get the information you need for your search!",
      style: " shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
    {
      imgSrc: "./assets/img/design/note.png",
      title: "For Researchers",
      content:
        "Legal contracts, financial reports, manuals, training material and much more. Ask any question you have and get insights in a few seconds!",
      style: " shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
  ];
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
              Who is ChatMP3 for ?
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
