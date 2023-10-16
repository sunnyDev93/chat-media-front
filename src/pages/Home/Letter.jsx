import React from "react";

const Letter = () => {
  return (
    <div>
      <section className="my-5 flex justify-center">
        <div className="mx-auto w-2/3 border rounded-lg border-[#ffffff0d] p-5 xl:p-10 mt-0 xl:m-20 bg-gradient-to-r from-[#FFFFFF2E] to-[#FFFFFF00] relative">
          <div className="absolute -right-20 top-0 xl:-right-0 xl:-top-20 ">
            <img
              src="./assets/img/design/ques.png"
              alt="ques"
              className="h-32 w-32 xl:h-52 xl:w-52"
            />
          </div>
          <div className="lg:flex items-center">
            <div>
              <span className="text-xl font-bold xl:text-3xl text-white">
                Who is ChatMP3 for?
              </span>
              <p className="text-white mt-3 w-10/12">
                Whether you're a high school student grappling with academic
                challenges, a university student looking to delve into complex
                subjects, or a professional eager to make the most of every
                conference or workshop, ChatMP3 is here for you. We've studied
                the needs of each group and crafted a solution that meets every
                demand, ensuring optimal learning and an unparalleled
                experience. With ChatMP3, learning has never been so
                straightforward and powerful
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Letter;
