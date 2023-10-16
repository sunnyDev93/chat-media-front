import React from "react";
import { Element } from "react-scroll";
import { ImageCard } from "../../components";

const WorkFlow = () => {
  const cardContent = [
    {
      imgSrc: "./assets/img/record.png",
      title: "1. Record",
      content:
        "Imagine being in any high school or university lesson or in a professional worksh...Read more",
      style: "",
    },
    {
      imgSrc: "./assets/img/upload.png",
      title: "2. Upload",
      content:
        "Once the event is over, it's time to harness the revolutionary power of ChatMP3...Read more",
      style: " shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)]",
    },
    {
      imgSrc: "./assets/img/interact.png",
      title: "3. Interact",
      content:
        "And now, the magic. Not only will you have an accurate transcription, but with ou...Read more",
      style: "",
    },
  ];
  return (
    <>
      <Element name="targetSection">
        <div className="bg-black mb-6">
          <h1 className="text-center p-5 text-white font-bold text-2xl xl:text-4xl">
            How it works
          </h1>
          <p className="text-center pb-5 text-[#9CA3AF] font-normal text-md xl:text-lg mb-5 w-4/5 xl:w-2/5 flex mx-auto">
            CHATMP3 allows you to upload files, whether they're audio, video, or
            text documents, and transforms them into dynamic and interactive
            written texts that accelerate your learning... Audio IN, Knowledge
            OUT
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-2/3 justify-between">
            {cardContent.map((item, key) => (
              <ImageCard card={item} key={key} />
            ))}
          </div>
        </div>
      </Element>
    </>
  );
};

export default WorkFlow;
