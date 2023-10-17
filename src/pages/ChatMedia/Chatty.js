// src/components/ChatComponent.js
// import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypingText } from "../../components";
import { OPENAI_API_KEY } from "../../config/openAI";
import {
  isChatLoading,
  selectIsSelected,
  selectTranscript,
} from "../../store/chatMedia/selectors";
import { clearChat, setChat } from "../../store/chatMedia/slice";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const ChatComponent = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const transcript = useSelector(selectTranscript);
  const [script, setScript] = useState([]);
  const isSelected = useSelector(selectIsSelected);
  const isLoading = useSelector(isChatLoading);
  const dispatch = useDispatch();
  const { language } = useLanguage();
  useEffect(() => {
    setScript(transcript);
  }, [transcript]);
  const appendMsg =
    "please give me some answers based on this:" +
    script[isSelected]?.transcript;
  const qaRef = useRef(null); // Reference to the QA field

  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const fetchChatResponse = async (e) => {
    e.preventDefault();
    try {
      dispatch(setChat());
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + OPENAI_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: message + appendMsg,
            },
          ],
        }),
      });

      if (!response.ok) {
        dispatch(clearChat());
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const assistantResponse = data.choices[0].message.content;

      setChatHistory([
        ...chatHistory,
        { role: "user", text: message },
        { role: "assistant", text: assistantResponse },
      ]);

      setMessage("");
      dispatch(clearChat());
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
  };

  // const apiUrl = "http://localhost:3001/api/langchain";
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         messages: [
  //           {
  //             role: "system",
  //             content: "You are a helpful assistant.",
  //           },
  //           {
  //             role: "user",
  //             content: message + appendMsg,
  //           },
  //         ],
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     const assistantResponse = data.choices[0].message.content;

  //     setChatHistory([
  //       ...chatHistory,
  //       { role: "user", text: message },
  //       { role: "assistant", text: assistantResponse },
  //     ]);

  //     setMessage("");
  //   } catch (error) {
  //     console.error("Error fetching chat response:", error);
  //   }
  //   console.log(getLangChainResult(appendMsg, message));
  // };
  // Automatically scroll the QA field to the bottom when new messages are added
  useEffect(() => {
    if (qaRef.current) {
      qaRef.current.scrollTop = qaRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex flex-col h-screen">
      <div className="overflow-y-auto flex-grow mt-3" ref={qaRef}>
        <span className="font-bold pt-5 text-2xl px-5 text-white">
          {translations[language]?.chat}
        </span>
        {chatHistory.map((message, index) => (
          <div key={index} className={`mb-2 mt-3`}>
            {message.role === "assistant" ? (
              <div className="bg-[#FFFFFF0D]  text-white rounded-lg p-3 w-3/4">
                <TypingText orgText={message.text} spd={10}></TypingText>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-gray-300 p-3 rounded-lg inline-block mr-2 text-md">
                  {message.text}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isLoading && (
        <img
          src="./assets/img/chatLoading.svg"
          alt="chatLoading"
          className="h-10 flex mr-auto"
        />
      )}
      <form onSubmit={fetchChatResponse} className="flex mb-3 mx-auto xl:mx-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-none rounded-l-lg bg-[#FFFFFF0D] border border-[#FFFFFF34] text-gray-900 focus:ring-gray-300 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={translations[language].chatPlaceHolder}
        />
        <button
          className="inline-flex items-center px-3 text-sm text-gray-900 bg-[#ffffff0d] border border-l-0 border-[#ffffff0d] rounded-r-md"
          type="submit"
        >
          <span role="img" aria-label="send" className="anticon anticon-send ">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipath="url(#clip0_318_55)">
                <path
                  d="M0.328006 22.9047C0.130795 23.8109 0.826577 24.1946 1.47218 23.9051L23.292 12.7167H23.2941C23.5544 12.5699 23.7055 12.3054 23.7055 12.0003C23.7055 11.6949 23.5544 11.4302 23.2941 11.2835H23.292L1.47218 0.0949195C0.826577 -0.194579 0.130795 0.189165 0.328006 1.09544C0.341351 1.15683 1.63131 6.90286 2.33267 10.0279L13.723 12.0002L2.33267 13.9722C1.63131 17.0971 0.341291 22.8433 0.328006 22.9047Z"
                  fill="#16A34A"
                />
              </g>
              <defs>
                <clipPath id="clip0_318_55">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
