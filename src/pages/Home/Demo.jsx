import React from "react";
import { WorkTab } from "../../components";

const Demo = () => {
  const bg = "./assets/img/design/demoBg.png";
  return (
    <div className="relative">
      <div className="absolute z-10 right-0 top-0">
        <img src={bg} alt="demoBg" />
      </div>
      <section className="p-10">
        <h1 className="text-2xl xl:text-4xl text-white text-center font-bold">
          Explore our DEMO and discover its potential
        </h1>
        <p className="text-center text-[#9CA3AF] mt-5 xl:mt-10 text-md xl:text-lg font-semibold xl:w-2/5 flex mx-auto">
          The process is straightforward: imagine uploading a file, whether it's
          audio, video, or text. With ChatMP3, you can not only upload your
          content but also witness our artificial intelligence's remarkable
          ability to turn them into interactive texts, revolutionizing learning
          in ways you've never experienced before.
        </p>
      </section>
      <WorkTab />
    </div>
  );
};

export default Demo;
