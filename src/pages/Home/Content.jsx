import React from "react";

const Content = ({ title, content }) => {
  return (
    <div>
      <section className="my-5">
        <div className="mx-auto w-2/3 border-4 rounded-lg border-[#a6f545a3] p-10 m-20 bg-[#FFFFFF0D]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl text-white">{title}</span>
              <p className="text-white mt-3">
                <span className="font-semibold">ChatMP3:</span> {content}
              </p>
            </div>
            <button className="text-white border border-[#A6F545] rounded-2xl px-4 py-2 shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)]">
              Sign Up For Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
