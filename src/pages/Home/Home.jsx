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
// import Feedback from "./Feedback";

const Home = () => {
  const location = useLocation();
  const cardContent = [
    {
      imgSrc: "./assets/img/design/stu.png",
      title: "For Students",
      content:
        "Prepare for exams, get help with homework and answer any question you have!",
      style: "shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
    {
      imgSrc: "./assets/img/design/mag.png",
      title: "For Researchers",
      content:
        "Scientific papers, academic articles, books and much more. Get the information you need for your search!",
      style: "shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
    {
      imgSrc: "./assets/img/design/note.png",
      title: "For Professionals",
      content:
        "Legal contracts, financial reports, manuals, training material and much more. Ask any question you have and get insights in a few seconds!",
      style: "shadow-[0_3px_10px_rgba(166,_245,_69,_0.7)]",
    },
  ];
  const content = [
    {
      title: "Step into the Future, Sign Up NOW!",
      content:
        "your new learning buddy. Try it now without entering payment details",
    },
    {
      title: "Don't Get Left Behind “The Future of Learning Awaits You!”",
      content:
        " Your Bridge to a New Era of Learning. Start with no commitments",
    },
    {
      title: "Who is ChatMP3 for?",
      content:
        " Your Bridge to a New Era of Learning. Start with no commitments",
    },
  ];

  return (
    <div className="bg-black">
      {location.pathname === "/cancel" && toast.warning("Cancel")}
      <Hero />
      <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto"></div>
      <Demo />
      <WorkFlow />
      <Letter />
      <div className="grid grid-cols-1 xl:grid-cols-3 mx-auto w-2/3 justify-between mb-20">
        {cardContent.map((item, key) => (
          <ImageCard card={item} key={key} />
        ))}
      </div>
      <Content content={content[0].content} title={content[0].title} />
      <Features />
      {/* <Feedback /> */}
      <Plan />
      <Content content={content[1].content} title={content[1].title} />
      <Faq />
      <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto mt-10"></div>
    </div>
  );
};

export default Home;
