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
          <div className="flex justify-center mt-10">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipath="url(#clip0_284_314)">
                <path
                  d="M43.1646 12.0896L31.776 0.691406H8.66367C7.64922 0.691406 6.82617 1.51445 6.82617 2.52891V35.135H43.1646V12.0896Z"
                  fill="#F8F8F8"
                />
                <path
                  d="M31.7764 10.2521C31.7764 11.2666 32.5994 12.0896 33.6139 12.0896H43.1746L31.7764 0.691406V10.2521Z"
                  fill="#C7CACB"
                />
                <path
                  d="M6.83594 35.1253V47.471C6.83594 48.4854 7.65898 49.3085 8.67344 49.3085H41.3369C42.3514 49.3085 43.1744 48.4854 43.1744 47.471V35.1253H6.83594ZM15.6789 33.039C15.0951 33.039 14.5305 32.8188 14.0137 32.3882C13.1428 31.6608 13.0758 30.8569 13.1619 30.3114C13.583 27.8519 18.1576 25.6028 20.8182 24.4927C22.2633 20.8751 23.517 16.6163 24.2922 13.4198C22.7418 10.0989 22.1963 7.7542 22.6748 6.42393C22.9141 5.76357 23.4021 5.33291 24.0912 5.17979L24.1869 5.16064L24.2826 5.17021C24.3592 5.17979 25.0387 5.28506 25.5938 6.03154C26.3115 7.00771 26.4742 8.58682 26.0723 10.7306C25.9574 11.3431 25.766 12.2235 25.5172 13.2763C26.9336 16.2239 28.9242 19.4778 30.5512 21.7364C31.9102 21.545 33.2022 21.478 34.2932 21.5929C36.3316 21.8034 36.7623 22.6935 36.8389 23.2103C36.9537 23.9663 36.3986 24.7511 35.4512 25.153C34.14 25.7081 31.9963 25.5646 30.2545 23.306C30.1779 23.2103 30.1014 23.105 30.0248 22.9997C27.7854 23.3729 25.1822 24.0812 22.5408 25.0669C22.2633 25.1722 21.9953 25.2774 21.7273 25.3827C19.9377 29.7659 18.1863 32.2829 16.5115 32.8858C16.2436 32.9911 15.9564 33.039 15.6789 33.039ZM20.177 26.0431C16.3775 27.7562 14.4922 29.4501 14.3199 30.5124C14.2816 30.7421 14.2816 31.0962 14.7697 31.4981C15.2195 31.8714 15.6502 31.9671 16.1287 31.7948C17.459 31.3163 18.8754 29.0194 20.177 26.0431ZM31.3742 22.8179C32.6662 24.3396 34.1209 24.464 35.0014 24.0812C35.4607 23.8897 35.7191 23.5644 35.6904 23.3825C35.6617 23.1911 35.2311 22.8657 34.1783 22.7604C33.3936 22.6839 32.4461 22.703 31.3742 22.8179ZM25.0961 15.0276C24.5123 17.2767 23.718 19.9851 22.7896 22.6073C22.627 23.0571 22.4738 23.4878 22.3111 23.9089C24.3879 23.1433 26.8953 22.3968 29.2783 21.947C27.9959 20.119 26.4168 17.5829 25.0961 15.0276ZM24.2348 6.3665C24.0147 6.44307 23.8711 6.58662 23.785 6.83545C23.45 7.7542 23.8902 9.48643 24.742 11.5345C24.8186 11.1708 24.8855 10.8358 24.943 10.5296C25.3832 8.14658 24.9621 7.12256 24.6654 6.73018C24.5027 6.51006 24.3305 6.40478 24.2348 6.3665Z"
                  fill="#F94D3A"
                />
                <path
                  d="M33.6521 41.4802H31.4605V39.2503H33.6521C34.0637 39.2503 34.3986 38.9153 34.3986 38.5038C34.3986 38.0923 34.0637 37.7573 33.6521 37.7573H30.7236C30.3121 37.7573 29.9771 38.0923 29.9771 38.5038V45.9304C29.9771 46.3419 30.3121 46.6769 30.7236 46.6769C31.1352 46.6769 31.4701 46.3419 31.4701 45.9304V42.9636H33.6617C34.0732 42.9636 34.4082 42.6286 34.4082 42.2171C34.3986 41.8056 34.0637 41.4802 33.6521 41.4802ZM17.8611 37.7669H16.349C15.9375 37.7669 15.6025 38.1019 15.6025 38.5134V45.9399C15.6025 46.3515 15.9375 46.6864 16.349 46.6864C16.7605 46.6864 17.0955 46.3515 17.0955 45.9399V42.9731H17.8611C19.2967 42.9731 20.4643 41.8056 20.4643 40.37C20.4643 38.9345 19.2967 37.7669 17.8611 37.7669ZM17.8611 41.4802H17.0955V39.2503H17.8611C18.4736 39.2503 18.9713 39.748 18.9713 40.3605C18.9713 40.973 18.4736 41.4802 17.8611 41.4802ZM24.2732 37.7669H22.3209C21.9094 37.7669 21.5744 38.1019 21.5744 38.5134V45.9399C21.5744 46.3515 21.9094 46.6864 22.3209 46.6864H24.2732C26.7328 46.6864 28.733 44.6862 28.733 42.2267C28.733 39.7575 26.7328 37.7669 24.2732 37.7669ZM24.2732 45.1839H23.0674V39.2407H24.2732C25.9098 39.2407 27.24 40.571 27.24 42.2075C27.2496 43.8536 25.9098 45.1839 24.2732 45.1839Z"
                  fill="#EFF3F5"
                />
              </g>
              <defs>
                <clipPath id="clip0_284_314">
                  <rect
                    width="49"
                    height="49"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
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
