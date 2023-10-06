import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSelected,
  selectTranscript,
} from "../store/chatMedia/selectors";
import { setSelect } from "../store/chatMedia/slice";

const FileButton = () => {
  const transcript = useSelector(selectTranscript);
  const isSelected = useSelector(selectIsSelected);
  const dispatch = useDispatch();
  return (
    <div>
      {transcript.map((item, index) => (
        <button
          className={`flex mx-auto my-3 p-3 text-white rounded-lg ${
            isSelected === index ? "bg-blue-500" : ""
          }`}
          key={index}
          onClick={() => dispatch(setSelect({ isSelected: index }))}
        >
          {item.fileName}
        </button>
      ))}
    </div>
  );
};

export default FileButton;
