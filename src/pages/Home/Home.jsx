import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Features,
  Plan,
  Hero,
  Demo,
  WorkFlow,
  Content,
  Faq,
} from "../../pages";
// import Feedback from "./Feedback";

const Home = () => {
  const location = useLocation();
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
  ];

  return (
    <div className="bg-black">
      {location.pathname === "/cancel" && toast.warning("Cancel")}
      <Hero />
      <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-2/3 flex mx-auto"></div>
      <Demo />
      <WorkFlow />
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
