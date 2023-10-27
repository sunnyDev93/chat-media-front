import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import {
  setSelect,
  setTranscript,
  transProcessing,
  transSuccess,
} from "../../store/chatMedia/slice";
import { selectUser } from "../../store/auth/selectors";
import { isBigFile } from "../../utils/fileProcess";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../utils/LanguageContext";

const isAudioOrVideoFile = (file) => {
  const allowedExtensions = ["mp3", "wav", "mp4", "avi", "mkv"]; // Add more allowed extensions if needed
  const fileExtension = file.name.split(".").pop().toLowerCase();
  return allowedExtensions.includes(fileExtension);
};

const ChatDropzone = ({ lang, showMode, setShowMode }) => {
  console.log("file", lang);
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const curToken = user.token;
  const uid = user?.uid;
  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        toast.error("Please upload an audio or video file.");
      } else {
        if (curToken < 1000) {
          toast.warning(`Please charge your token. Current token: ${curToken}`);
          navigate("/plan");
        } else {
          const file = acceptedFiles[0];
          console.log(file);
          if (!isAudioOrVideoFile(file)) {
            toast.error(
              "Invalid file type. Please upload an audio or video file."
            );
          } else {
            // Handle the accepted file (e.g., upload it to a server)
            if (!isBigFile(file)) {
              const formData = new FormData();
              formData.append("file", file);
              formData.append("uid", uid);
              formData.append("lang", lang);

              // Make an Axios or Fetch POST request to the server to handle the file upload
              try {
                dispatch(transProcessing());
                const response = await axios.post(
                  "http://localhost:8000/api/files/upload",
                  formData,
                  {
                    headers: {
                      uid: uid,
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                console.log("File uploaded:", response);
                const payload = {
                  transcript: response?.data.transcript,
                  fileName: response?.data.fileName,
                };
                const token = response?.data.token;
                if (token < 1000) {
                  toast.warning(`Remained token: ${token}`);
                }
                dispatch(setTranscript(payload));
                // dispatch(updateToken(token));
                dispatch(setSelect({ isSelected: 0 }));
                dispatch(transSuccess());
                setShowMode(false);
              } catch (error) {
                dispatch(transSuccess());
                console.error("Error uploading file:", error);
              }
            } else {
              toast.error("Free users can upload only under 10MB audio file.");
            }
            // uploadFileToServer(file);
          }
        }
      }
    },
    [dispatch, curToken, setShowMode, uid, lang, navigate]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false, // Allow only a single file to be uploaded
  });

  return (
    <>
      <div className="max-w-screen-2xl mx-auto p-2 bg-[#FFFFFF0D] z-40 relative border border-[#4E4E52] rounded-md my-10">
        <div
          {...getRootProps()}
          className="p-12 cursor-pointer z-40 relative border border-[#FFFFFF0D] rounded-md"
        >
          <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-1/2 flex transform translate-x-1/2 absolute top-0 "></div>
          <div className="h-[1px] bg-gradient-to-r from-[#89D32D00] via-[#ffffff91] to-[#16A34A00] w-1/2 flex transform translate-x-1/2 absolute bottom-0"></div>
          <input {...getInputProps()} />
          <div className="flex justify-center mt-10"></div>
          <p className="flex justify-center text-white text-lg font-semibold">
            {translations[language]?.dropTtl}
          </p>
          <p className="text-center text-sm text-[#F3F4F6] mt-2 mb-6">
            {translations[language]?.dropTxt}
          </p>
        </div>
        {/* <FileButton /> */}

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </>
  );
};

export default ChatDropzone;
