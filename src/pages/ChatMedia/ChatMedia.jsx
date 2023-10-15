import React, { useState } from "react";
import { FileDropZone } from "../../components";
import { Link } from "react-router-dom";
import Chatty from "./Chatty";
import { clearTranscript } from "../../store/chatMedia/slice";
import { useDispatch } from "react-redux";
import TranscriptPanel from "./TranscriptPanel";

const ChatMedia = () => {
  const dispatch = useDispatch();
  const [lang, setLang] = useState("en-US");
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("file", selectedFile);

  //     // Make an Axios or Fetch POST request to the server to handle the file upload
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8000/api/files/upload",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       console.log("File uploaded:", response);
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     }
  //   }
  // };

  return (
    <div className="xl:grid xl:grid-cols-7 bg-white">
      {/* <div className="flex justify-between xl:hidden">
        <div className="mt-3">
          <Link to="/" className="text-gray-400 text-2xl pt-3 px-3 mt-3">
            Home
          </Link>
          <span className="text-gray-400 mx-1 text-2xl">/</span>
          <span className="text-basic font-bold ml-2 text-2xl">ChatMedia</span>
        </div>
        <div className=""></div>
      </div> */}

      <div className="xl:col-span-1 xl:h-screen mt-3 xl:mt-0 lg:hidden xl:block bg-black">
        {/* <FileUpload /> */}
        <div className="flex flex-col h-screen">
          <div className="overflow-y-auto flex-grow mt-3">
            <div className="mt-3 mb-2">
              <Link to="/" className="text-gray-400 text-2xl pt-3 pl-3">
                Home
              </Link>
              <span className="text-gray-400 text-2xl">/</span>
              <span className="text-basic font-bold text-2xl px-1">
                ChatMedia
              </span>
            </div>
            <FileDropZone lang={lang} setLang={setLang} />
          </div>
          <button
            onClick={() => dispatch(clearTranscript())}
            className="text-white bg-black border-t border-gray-500 p-3"
          >
            Clear History
          </button>
        </div>
      </div>
      <div className="xl:col-span-3 textSection flex flex-col h-screen">
        <div className="flex justify-between">
          <h2 className="text-black text-2xl font-bold pt-3 pl-5">
            Transcript
          </h2>
          {/* <div className="bg-[#101014] max-h-full m-5"></div> */}
          <div className="flex items-baseline">
            <label
              htmlFor="countries"
              className="block w-full mb-2 text-sm font-medium text-gray-900 mx-1"
            >
              Language:
            </label>
            <select
              id="countries"
              onChange={(e) => setLang(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div className="mr-5">
          <Chatty />
        </div>
        {/* <LangChainChat /> */}
      </div>
    </div>
  );
};

export default ChatMedia;
