import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { TypingText } from "../../components";
import {
  selectIsLoading,
  selectIsSelected,
  selectTranscript,
} from "../../store/chatMedia/selectors";

const TranscriptPanel = ({ lang, setLang }) => {
  const transcript = useSelector(selectTranscript);
  const [script, setScript] = useState([]);
  const isSelected = useSelector(selectIsSelected);
  const isLoading = useSelector(selectIsLoading);
  const chatRef = useRef(null);
  useEffect(() => {
    setScript(transcript);
  }, [transcript]);
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [script]);
  return (
    <>
      {isLoading === true ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
        </div>
      ) : (
        <div
          className=" m-5 rounded-lg overflow-y-auto flex-grow mt-3"
          ref={chatRef}
        >
          {script?.map(
            (item, index) =>
              isSelected === index && (
                <div key={index} className={`m-5 p-5 rounded-lg bg-gray-400`}>
                  <span className="text-white ">{item.transcript}</span>
                  <TypingText
                    className="text-white"
                    orgText={item.transcript}
                    spd={1}
                  />
                </div>
              )
          )}
          {script.length === 0 && (
            <div className="text-white text-xl m-5 p-5 rounded-lg bg-gray-400">
              The response will show here
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TranscriptPanel;
