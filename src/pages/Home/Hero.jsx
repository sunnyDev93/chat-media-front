import React from "react";
import { Link } from "react-router-dom";
import { ScrollTo, TypingText } from "../../components";

const Hero = () => {
  const className =
    "text-4xl mb-4 font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white capitalize";
  return (
    <section
      className={`pb-5 bg-gradient-to-br from-gray-900 via-black to-[#36D45A] transition-opacity duration-1000 ease-in-out`}
    >
      <div className="max-w-screen-xl px-4 mx-auto text-center pt-32 sm:pt-40 sm:pb-24 lg:px-12">
        <TypingText
          orgText={"Simplify and Speed up your learning"}
          className={className}
        />
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 animate-float-up">
          Power your apps with world-class speech-to-text and domain-specific
          language models (DSLMs). Effortlessly accurate. Blazing fast.
          Enterprise-ready scale. Unbeatable pricing. Everything developers need
          to build with confidence and ship faster.
        </p>
        <div className="flex flex-col items-center mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/login"
            className="mb-3 sm:mb-0 shadow-lg shadow-green-500/50 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-transparent border border-[#36D45A] rounded-lg hover:font-bold focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign Up Free
          </Link>
          <ScrollTo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
