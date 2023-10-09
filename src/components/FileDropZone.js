import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  selectIsSelected,
  selectTranscript,
} from "../store/chatMedia/selectors";

import {
  clearTranscript,
  setSelect,
  setTranscript,
  transProcessing,
  transSuccess,
} from "../store/chatMedia/slice";
import { isBigFile } from "../utils/fileProcess";
import FileButton from "./FileButton";

const isAudioOrVideoFile = (file) => {
  const allowedExtensions = ["mp3", "wav", "mp4", "avi", "mkv"]; // Add more allowed extensions if needed
  const fileExtension = file.name.split(".").pop().toLowerCase();
  return allowedExtensions.includes(fileExtension);
};

const FileDropzone = () => {
  const dispatch = useDispatch();
  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        toast.error("Please upload an audio or video file.");
      } else {
        const file = acceptedFiles[0];
        console.log(file);
        if (!isAudioOrVideoFile(file)) {
          toast.error(
            "Invalid file type. Please upload an audio or video file."
          );
        } else {
          // Handle the accepted file (e.g., upload it to a server)
          console.log(isBigFile(file));
          if (!isBigFile(file)) {
            dispatch(transProcessing());
            const formData = new FormData();
            formData.append("file", file);

            // Make an Axios or Fetch POST request to the server to handle the file upload
            try {
              const response = await axios.post(
                "http://localhost:8000/api/files/upload",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              console.log("File uploaded:", response);
              const payload = {
                transcript: response?.data.transcript,
                fileName: response?.data.fileName,
              };
              dispatch(setTranscript(payload));
              dispatch(setSelect({ isSelected: 0 }));
              dispatch(transSuccess());
            } catch (error) {
              console.error("Error uploading file:", error);
            }
          } else {
            toast.error("Free users can upload only under 10MB audio file.");
          }
          // uploadFileToServer(file);
        }
      }
    },
    [dispatch]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Allow only a single file to be uploaded
  });

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-black ">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-400 rounded-lg p-4 cursor-pointer"
        >
          <input {...getInputProps()} />

          <p className="text-center text-white">
            Drag & drop an audio or video file here, or click to select one.
          </p>
        </div>
        <FileButton />

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </>
  );
};

export default FileDropzone;
