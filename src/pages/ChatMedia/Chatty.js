// src/components/ChatComponent.js
// import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypingText } from "../../components";
import {
  isChatLoading,
  selectIsSelected,
  selectTranscript,
} from "../../store/chatMedia/selectors";
import { clearChat, setChat } from "../../store/chatMedia/slice";

const ChatComponent = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const transcript = useSelector(selectTranscript);
  const [script, setScript] = useState([]);
  const isSelected = useSelector(selectIsSelected);
  const isLoading = useSelector(isChatLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    setScript(transcript);
  }, [transcript]);
  const appendMsg =
    "please give me some answers based on this:" +
    script[isSelected]?.transcript;
  const qaRef = useRef(null); // Reference to the QA field

  const apiUrl = "https://api.openai.com/v1/chat/completions";
  const API_KEY =
    process.env.OPENAI_API_KEY ||
    "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";

  const fetchChatResponse = async (e) => {
    e.preventDefault();
    try {
      dispatch(setChat());
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
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
        <span className="font-bold pt-5 text-2xl px-5">Chat</span>
        {chatHistory.map((message, index) => (
          <div key={index} className={`mb-2 mt-3`}>
            {message.role === "assistant" ? (
              <div className="bg-blue-500 text-white rounded-lg p-3 w-3/4">
                <TypingText orgText={message.text}></TypingText>
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
          className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-gray-300 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ask any question..."
        />
        <button
          className="inline-flex items-center px-3 text-sm text-gray-900 bg-blue-600 border border-l-0 border-blue-600 rounded-r-md"
          type="submit"
        >
          <span role="img" aria-label="send" className="anticon anticon-send">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="send"
              width="1em"
              height="1em"
              fill="white"
              aria-hidden="true"
            >
              <defs>
                <style></style>
              </defs>
              <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
