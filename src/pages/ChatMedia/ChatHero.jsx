import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthStatus } from "../../store/auth/selectors";

const ChatHero = () => {
  const isAuthenticated = useSelector(getAuthStatus);
  const lbg = "./assets/img/design/lbg1.png";
  const rbg = "./assets/img/design/rbg2.png";
  const textArray = [
    "Artificial Intelligence Meets Education",
    "The Learning Revolution Has Begun",
  ];
  return (
    <section
      className={`pb-5 transition-opacity duration-1000 ease-in-out mb-3`}
      // style={{
      //   background: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="absolute top-0 left-0  w-1/2 h-full z-0">
        <img src={lbg} alt="lbg" />
      </div>
      <div className="absolute -top-24 w-1/2 h-full -z-0 right-0">
        <img src={rbg} alt="rbg" />
      </div>
      <div className="max-w-screen-xl px-4 mx-auto text-center mt-20 pt-16 xl:pt-32 sm:pt-40 lg:px-12 z-40">
        <div className="mb-6 text-white text-2xl xl:text-4xl font-bold">
          Chat with any Text Document, Video or Audio File
        </div>
        <p className="text-md font-normal text-[#F3F4F6] lg:text-lg sm:px-16 xl:px-48 animate-float-up">
          Elevate your understanding! Join thousands of Students, Researchers,
          and Professionals. Simply drop your Text Document, Video or Audio File
          below and dive deeper into your Knowledge Now!
        </p>
      </div>
    </section>
  );
};

export default ChatHero;
