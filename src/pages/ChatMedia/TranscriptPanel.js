import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypingText } from "../../components";
import {
  selectIsSelected,
  selectTranscript,
} from "../../store/chatMedia/selectors";

const TranscriptPanel = () => {
  const transcript = useSelector(selectTranscript);
  const [script, setScript] = useState([]);
  console.log(transcript);
  const isSelected = useSelector(selectIsSelected);
  useEffect(() => {
    setScript(transcript);
  }, [transcript]);
  console.log(script);
  return (
    <div className=" m-5 rounded-lg">
      {script?.map(
        (item, index) =>
          isSelected === index && (
            <div
              key={index}
              className={`m-5 p-5 rounded-lg max-h-screen bg-gray-400`}
            >
              <span className="text-white ">{item.transcript}</span>
            </div>
          )
      )}
      {script.length === 0 && (
        <div className="text-white text-xl m-5 p-5 rounded-lg max-h-screen bg-gray-400">
          The response will show here
        </div>
      )}
    </div>
  );
};

export default TranscriptPanel;
