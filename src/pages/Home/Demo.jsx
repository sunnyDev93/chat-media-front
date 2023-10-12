import React from "react";
import { Element } from "react-scroll";
import { WorkTab } from "../../components";

const Demo = () => {
  return (
    <div className="bg-black border-b border-gray-600">
      <section className="p-10">
        <h1 className="text-4xl text-[#36D45A] text-center font-bold">
          Try our speech-to-text & understanding API
        </h1>
        <p className="text-center text-white mt-10 text-lg font-bold">
          Play around with transcribing sample audio files or our live streaming
          transcription demo. Explore how our audio understanding models work.
        </p>
      </section>
      <WorkTab />
    </div>
  );
};

export default Demo;
