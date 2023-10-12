import React from "react";
import { MobileSlider, PlanCard } from "../../components";

const Plan = () => {
  const planData = [
    {
      name: "Free",
      currency: "€",
      price: 0,
      text: "Forever free",
      tokenAmount: 10000,
      description:
        "Extensions: \n Price: €1.29/credit \n 1 Credit = 50 Min of audio/video to text transcription. \n Features: \n - All features of the Free package \n - Advanced Transcription: Speech-to-text conversion in over 30 languages with automatic language detection. \n - Diarization: Recognition and separation of different speakers in the audio. \n  - Word-level Timestamp: Each word in the transcribed text is linked to its exact moment in the audio. \n - Automated Summary: Get short and concise summaries of your audio content.",
      service: [
        "10 Min of audio/video to text transcription",
        "10,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      name: "Basic",
      currency: "€",
      price: 20,
      text: "All the basics for starting a new business",
      tokenAmount: 600000,
      description:
        "*Elevate your studies. Advanced transcription and multilingual support for limitless learning.* \n - 10 Hours of audio/video to text transcription - 300,000 Tokens for questions to the Virtual AI Professor (ChatGPT 3.5)Extensions: \n Price: €1.29/credit \n 1 Credit = 50 Min of audio/video to text transcription. \n Features: \n - All features of the Free package \n - Advanced Transcription: Speech-to-text conversion in over 30 languages with automatic language detection. \n - Diarization: Recognition and separation of different speakers in the audio. \n  - Word-level Timestamp: Each word in the transcribed text is linked to its exact moment in the audio. \n - Automated Summary: Get short and concise summaries of your audio content.",
      service: [
        "12 Hours of audio/video to text transcription",
        "300,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      name: "Advanced",
      currency: "€",
      price: 35,
      text: "Everything you need for a growing business",
      tokenAmount: 1500000,
      description:
        "*Maximize your experience. Analysis, personalized Q&A, and speed for those who want more.*" +
        `\n` +
        "- 25 Hours of audio/video to text transcription" +
        `\n` +
        "- 600,000 Tokens for questions to the Virtual AI Professor (ChatGPT 3.5)" +
        `\n` +
        "Extensions:" +
        `\n` +
        "Price: €1.09/credit" +
        `\n` +
        "1 Credit = 50 Min of audio/video to text transcription." +
        `\n` +
        "Features:" +
        `\n` +
        "- All features of the Basic package" +
        `\n` +
        "- Summary and Analysis: Automated summary, entity detection, and sentiment analysis." +
        `\n` +
        "- Custom Q&A Sessions: Deep interaction with AI to probe topics and get detailed explanations." +
        `\n` +
        "- Batch Processing: Process 1 hour of audio in about 12 seconds." +
        `\n` +
        "- Sentiment Analysis." +
        `\n` +
        "- Custom Q&A sessions." +
        `\n` +
        "- Pro Audio Intelligence for deeper, personalized analysis." +
        `\n` +
        "- Custom speech models and noise reduction." +
        `\n` +
        "- Custom vocabulary and punctuation.",
      service: [
        "25 Hours of audio/video to text transcription",
        "600,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      name: "Pro",
      currency: "€",
      price: 100,
      text: "Advanced features for scaling your business",
      tokenAmount: 2700000,
      service: [
        "50 Hours of audio/video to text transcription",
        "300,000 Tokens to ask to Virtual AI Professor",
      ],
    },
  ];
  return (
    <div className="bg-black p-5 py-16">
      <div className="sm:flex mx-auto justify-center px-16 w-10/12 hidden">
        {planData.map((item, index) => (
          <PlanCard key={index} {...item} />
        ))}
      </div>
      <div className="sm:hidden block">
        <MobileSlider planData={planData}></MobileSlider>
      </div>
    </div>
  );
};

export default Plan;
