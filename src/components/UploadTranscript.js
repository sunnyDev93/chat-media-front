// // FileDropzone.js

// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { SpeechClient } from "@google-cloud/speech";
// import { Readable } from "stream";

// const isAudioOrVideoFile = (file) => {
//   const allowedExtensions = ["mp3", "wav", "mp4", "avi", "mkv"];
//   const fileExtension = file.name.split(".").pop().toLowerCase();
//   return allowedExtensions.includes(fileExtension);
// };

// const UploadTranscript = () => {
//   const [uploadedFileName, setUploadedFileName] = useState(null);
//   const [transcript, setTranscript] = useState(null);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     if (acceptedFiles.length === 0) {
//       toast.error("Please upload an audio or video file.");
//     } else {
//       const file = acceptedFiles[0];
//       if (!isAudioOrVideoFile(file)) {
//         toast.error("Invalid file type. Please upload an audio or video file.");
//       } else {
//         setUploadedFileName(file.name);

//         // Initialize Google Cloud Speech-to-Text client
//         const speechClient = new SpeechClient();

//         try {
//           // Read the file as a buffer
//           const buffer = await file.arrayBuffer();
//           const audioBytes = new Uint8Array(buffer).toString();

//           // Configure the audio input settings
//           const audio = {
//             content: audioBytes,
//           };

//           const config = {
//             encoding: "LINEAR16",
//             sampleRateHertz: 16000,
//             languageCode: "en-US",
//           };

//           const request = {
//             audio: audio,
//             config: config,
//           };

//           // Perform transcription
//           const [response] = await speechClient.recognize(request);

//           // Extract and set the transcript
//           const transcript = response.results
//             .map((result) => result.alternatives[0].transcript)
//             .join("\n");

//           setTranscript(transcript);
//         } catch (error) {
//           console.error("Error transcribing audio:", error);
//           toast.error("Error transcribing audio. Please try again.");
//         }
//       }
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     multiple: false,
//   });

//   return (
//     <div className="max-w-md mx-auto p-4 bg-black">
//       <div
//         {...getRootProps()}
//         className="border-2 border-dashed border-gray-400 rounded-lg p-4 cursor-pointer"
//       >
//         <input {...getInputProps()} />

//         <p className="text-center text-white">
//           Drag & drop an audio or video file here, or click to select one.
//         </p>
//       </div>
//       {uploadedFileName ? (
//         <div>
//           <p className="text-center my-3 text-white">{uploadedFileName}</p>
//           {transcript && (
//             <div>
//               <h2 className="text-xl font-semibold text-white">Transcript:</h2>
//               <p className="text-white">{transcript}</p>
//             </div>
//           )}
//         </div>
//       ) : (
//         ""
//       )}
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
//     </div>
//   );
// };

// export default UploadTranscript;
