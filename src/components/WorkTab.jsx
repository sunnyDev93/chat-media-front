import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "./Collapse";

const WorkTab = () => {
  const [firstTab, setFirstTab] = useState("first");
  const [secondTab, setSecondTab] = useState("");
  const [thirdTab, setThirdTab] = useState("");
  const firstTabClk = () => {
    setFirstTab("fist");
    setSecondTab("");
    setThirdTab("");
  };
  const secondTabClk = () => {
    setFirstTab("");
    setSecondTab("second");
    setThirdTab("");
  };
  const thirdTabClk = () => {
    setFirstTab("");
    setSecondTab("");
    setThirdTab("third");
  };
  return (
    <>
      <div className="border-b border-gray-600 hidden md:block">
        <div className="mb-4 sm:border-none border-b border-gray-200 flex justify-center w-1/2 mx-auto">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg px-7 text-white ${
                  firstTab
                    ? "border-b-2 border-[#36D45A] opacity-75 bg-gradient-to-t from-green-800 via-gray-950 to-black"
                    : ""
                }`}
                type="button"
                onClick={firstTabClk}
              >
                Audio Files
              </button>
            </li>
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 px-6 rounded-t-lg text-white ${
                  secondTab
                    ? "border-b-2 border-[#36D45A] bg-gradient-to-t from-green-800 via-gray-950 to-black"
                    : ""
                }`}
                type="button"
                onClick={secondTabClk}
              >
                Live Streaming
              </button>
            </li>
            <li className="mr-2 font-bold text-lg" role="presentation">
              <button
                className={`inline-block p-4 px-5 rounded-t-lg text-white ${
                  thirdTab
                    ? "border-b-2 opacity-50 border-[#36D45A] bg-gradient-to-t from-green-800 via-gray-900 to-black"
                    : ""
                }`}
                type="button"
                onClick={thirdTabClk}
              >
                Audio Intelligence
              </button>
            </li>
          </ul>
        </div>
        <div className="flex mx-auto">
          {firstTab ? (
            <div
              className="rounded-lg dark:bg-[#101014] w-8/12 mx-auto"
              aria-labelledby="profile-tab"
              role="tabpanel"
            >
              <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#101014] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <Link
                        href="#"
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-green-400 mb-2"
                      >
                        <svg
                          className="w-2.5 h-2.5 mr-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                        </svg>
                        Design
                      </Link>
                      <h2 className="text-white text-3xl font-bold mb-5">
                        Step 1:<span className="font-normal"> Input Audio</span>
                      </h2>
                      <div className="flex items-center justify-between my-5">
                        <div className="flex bg-gray-500 rounded-md p-2 w-2/3">
                          <span
                            display="inline-flex"
                            className="Text-sc-15gs1pn-0 iBZcQL"
                          >
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <g clipPath="url(#file-audio_svg__a)">
                                <path
                                  d="M3 .82c-1.655 0-3 1.346-3 3v18c0 1.656 1.345 3 3 3h12c1.655 0 3-1.344 3-3V8.32h-6c-.83 0-1.5-.67-1.5-1.5v-6H3Zm9 0v6h6l-6-6Zm.094 10.609A6 6 0 0 1 15 16.57a6 6 0 0 1-2.906 5.142.753.753 0 0 1-1.031-.253.754.754 0 0 1 .253-1.031A4.49 4.49 0 0 0 13.5 16.57c0-1.636-.872-3.07-2.18-3.858a.749.749 0 0 1-.253-1.031.749.749 0 0 1 1.031-.253h-.004Zm-4.308 1.448a.75.75 0 0 1 .464.694v6a.75.75 0 0 1-1.28.53l-1.654-1.655H3.75a.752.752 0 0 1-.75-.75v-2.25c0-.413.337-.75.75-.75h1.566L6.97 13.04a.754.754 0 0 1 .816-.164Zm2.39 1.636a.75.75 0 0 1 1.06.061 2.998 2.998 0 0 1 0 3.999.754.754 0 0 1-1.06.06.754.754 0 0 1-.06-1.059 1.498 1.498 0 0 0 0-1.997.75.75 0 0 1 .06-1.06v-.004Z"
                                  fill="#fff"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="file-audio_svg__a">
                                  <path
                                    fill="#fff"
                                    transform="translate(0 .82)"
                                    d="M0 0h18v24H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                          <p className="text-white">
                            <strong>NASA:</strong> First All Female Space Walk
                          </p>
                        </div>
                        <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-200 shadow-md shadow-pink-500">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                            Run Demo
                          </span>
                        </button>
                      </div>
                      <div className="my-5">
                        <audio controls className="w-full">
                          <source src="your-audio-file.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                      <p className="text-lg font-normal text-gray-400 mb-4">
                        Get conversational intelligence with transcription and
                        understanding on the world's best speech AI platform.
                      </p>
                    </div>
                    <div className="bg-[#101014] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                      <Link
                        href="#"
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2"
                      >
                        <svg
                          className="w-2.5 h-2.5 mr-1.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                          />
                        </svg>
                        Transcription
                      </Link>
                      <h2 className="text-white text-3xl font-bold mb-5">
                        Step 2:{" "}
                        <span className="text-3xl text-white font-semibold">
                          Transcription Output
                        </span>
                      </h2>
                      <div className="bg-black h-4/5 rounded-md">
                        <p className="p-5 text-white">
                          The response will show here
                        </p>
                      </div>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
          {secondTab ? (
            <div
              className="rounded-lg w-8/12 mx-auto"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#101014] rounded-lg p-8 md:p-12 ">
                      <h2 className="text-white text-3xl font-bold mb-5 text-center">
                        Give it a try.
                      </h2>
                      <p className="text-center text-gray-300">
                        Click the mic to transcribe live in English or select
                      </p>
                      <p className="text-center text-gray-300">
                        another language.
                      </p>

                      <div className="items-center justify-between my-5 mx-auto relative bg-transparent">
                        <button className="flex mx-auto items-center justify-center p-0.5 overflow-hidden text-sm font-medium h-4/12 w-4/12  text-white">
                          <img
                            src="./assets/img/record.svg"
                            alt="recorder"
                            className="bg-[#101014] border border-gray-700 rounded-full"
                          />
                        </button>
                        <label
                          htmlFor="large"
                          className="block mb-2 text-base font-medium text-white"
                        >
                          Large select
                        </label>
                        <select
                          id="large"
                          className="block w-full px-4 py-3 text-base border rounded-lg focus:ring-gray-600 focus:border-gray-600 bg-[#101014] border-gray-600 placeholder-gray-400 text-white"
                        >
                          <option defaultValue="EN">English</option>
                          <option value="IT">Italian</option>
                        </select>
                      </div>
                    </div>
                    <div className="bg-[#101014] rounded-lg p-8 md:p-12">
                      <h2 className="text-white text-3xl font-bold mb-5">
                        Transcription
                      </h2>
                      <div className="bg-black h-4/5 rounded-md">
                        <p className="p-5 text-white">
                          The response will show here
                        </p>
                      </div>
                      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
          {thirdTab ? (
            <div
              className="p-4 rounded-lg bg-[#101014] w-8/12 mx-auto"
              role="tabpanel"
              aria-labelledby="settings-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Settings tab's associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          ) : (
            ""
          )}
          <div id="workFlow">
            <br />
          </div>
        </div>
      </div>
      <div className="sm:block md:hidden flex flex-col mx-auto">
        <Collapse title="Audio Files">
          <p className="text-white">
            This is the content for the first collapsible section.
          </p>
        </Collapse>

        <Collapse title="Live Streaming">
          <p>This is the content for the second collapsible section.</p>
        </Collapse>
      </div>
    </>
  );
};

export default WorkTab;
