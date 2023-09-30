import React from "react";

const WorkFlow = () => {
  return (
    <>
      <div className="bg-black mb-6">
        <h1 className="text-center p-5 text-white font-bold text-4xl">
          How it works
        </h1>
        <p className="text-center pb-5 text-white font-normal text-lg mb-5">
          Chatmp3 makes you a step ahead everyone, thanks to the innovative AI
          technology
        </p>
        <ol className="items-center w-full space-y-4 sm:flex sm:flex-row sm:space-x-8 sm:space-y-0 mx-auto px-20 sm:px-0 justify-center">
          <li className="flex items-center text-white space-x-2.5">
            <span className="flex items-center justify-center w-20 h-20 border border-white rounded-full shrink-0">
              <img src="./assets/img/record.svg" alt="" />
            </span>
            <span>
              <h3 className="font-medium leading-tight text-lg sm:text-md">
                Record
              </h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
          <li className="flex items-center text-white space-x-2.5">
            <span className="flex items-center justify-center w-20 h-20 border border-white rounded-full shrink-0 dark:border-gray-400">
              <img src="./assets/img/upload.svg" alt="" />
            </span>
            <span>
              <h3 className="font-medium leading-tight">Upload</h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
          <li className="flex items-center text-white space-x-2.5">
            <span className="flex items-center justify-center w-20 h-20 border border-white rounded-full shrink-0 dark:border-gray-400">
              <img src="./assets/img/ask.svg" alt="" />
            </span>
            <span>
              <h3 className="font-medium leading-tight">Ask to AI</h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
        </ol>
        <p className="flex mx-auto sm:px-5 sm:py-5 px-0 py-5 text-white font-normal text-lg mt-5 w-2/3 text-center">
          We are committed to making learning an engaging and accessible
          experience. Our mission is to provide students in training courses,
          schools, and universities with a powerful tool to take notes and
          review lectures in a way that maximizes comprehension and academic
          excellence. Discover how our innovative platform can make a difference
          in your education!
        </p>
      </div>
    </>
  );
};

export default WorkFlow;
