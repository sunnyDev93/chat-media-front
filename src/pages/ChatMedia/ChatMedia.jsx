import React, { useState } from "react";
import { FileDropZone } from "../../components";
import { Link } from "react-router-dom";
import Chatty from "./Chatty";
import { clearTranscript } from "../../store/chatMedia/slice";
import { useDispatch } from "react-redux";
import TranscriptPanel from "./TranscriptPanel";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../utils/LanguageContext";

const ChatMedia = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const [lang, setLang] = useState("en-US");
  const lbg = "../assets/img/design/media.png";
  return (
    <div className="xl:grid xl:grid-cols-7">
      <div className="xl:col-span-1 xl:h-screen xl:mt-0 xl:block bg-[#FFFFFF0D] relative">
        <div
          className="flex flex-col h-screen"
          style={{
            backgroundImage: `url(${lbg})`,
            backgroundRepeat: "no-repeat",

            // backgroundSize: "cover",
          }}
        >
          <div className="overflow-y-auto flex-grow mt-3">
            <div className="mt-3 mb-2 flex items-center">
              <Link to="/" className="text-gray-400 text-2xl pl-3">
                {/* Home */}
                <svg
                  className="h-6 w-6"
                  fill="#ffffff"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 495.398 495.398"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <g>
                          <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>{" "}
                          <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>{" "}
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
              <span className="text-gray-400 text-2xl">/</span>
              <Link
                to="/chatmedia"
                className="text-basic font-bold text-2xl px-1"
              >
                ChatMP3
              </Link>
            </div>
            <FileDropZone lang={lang} setLang={setLang} />
          </div>
          <button
            onClick={() => dispatch(clearTranscript())}
            className="text-white bg-[#FFFFFF0D] border-t border-gray-500 p-3 flex justify-center"
          >
            <svg
              enableBackground="new 0 0 32 32"
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
            >
              <g id="trash">
                <path
                  clipRule="evenodd"
                  d="M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001   c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17   c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10   c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002   c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"
                  fill="#fff"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9   c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"
                  fill="#fff"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"
                  fill="#fff"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d="M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2   c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="xl:col-span-3 textSection flex flex-col h-screen">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold pt-3 pl-5">
            {translations[language]?.transcript}
          </h2>
          {/* <div className="bg-[#101014] max-h-full m-5"></div> */}
          <div className="flex items-baseline">
            <label
              htmlFor="countries"
              className="block w-full mb-2 text-sm font-medium text-white mx-1"
            >
              {translations[language]?.lang}:
            </label>
            <select
              id="countries"
              onChange={(e) => setLang(e.target.value)}
              className="bg-[#ffffff0d] border border-gray-300 text-gray-400 mx-3 mt-2 text-sm rounded-lg focus:ring-[#ffffff0d] focus:border-[#ffffff0d] block w-full p-2.5"
            >
              <option defaultValue={lang}>English</option>
              <option value="it-IT">Italian</option>
              <option value="es-ES">Spainish</option>
            </select>
          </div>
        </div>
        <TranscriptPanel lang={lang} setLang={setLang} />
      </div>
      <div className="xl:col-span-3 qaSection">
        {/* <h2 className="text-black text-2xl font-bold pt-3 pl-5 mb-2">Chat</h2> */}
        {/* <div className="welcomeText bg-[#101014] m-5 p-5">
          <p className="text-white mb-5">
            Welcome to the PDF file of Maciej Kolber, a highly skilled Full
            Stack Developer with extensive experience in crafting efficient,
            scalable, and secure web applications! In this file, you will find
            his summary, education, and experience, showcasing his expertise in
            various modern technologies and cloud environments.
          </p>
          <p className="text-white mb-1">Example questions:</p>
          <p className="text-white flex items-baseline">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="send"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
              className="pt-1"
            >
              <defs>
                <style></style>
              </defs>
              <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
            </svg>
            <span>
              What are some of the modern technologies that Maciej Kolber is
              adept in?
            </span>
          </p>
        </div> */}
        <div
          className="mr-5"
          style={{
            background:
              "linear-gradient(93deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.00) 99.73%)",
            boxShadow: "2px -1px 100px 0px rgba(166, 245, 69, 0.17)",
            backdropFilter: "blur(19.5px)",
          }}
        >
          <Chatty />
        </div>
        {/* <LangChainChat /> */}
      </div>
    </div>
  );
};

export default ChatMedia;
