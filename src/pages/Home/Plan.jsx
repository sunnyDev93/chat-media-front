import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MobileSlider, PlanCard } from "../../components";

const Plan = () => {
  const location = useLocation();
  const className =
    location.pathname === "/plan"
      ? "bg-black p-5 py-16 mt-32"
      : "bg-black p-5 py-16";
  const planData = [
    {
      name: "Free (Always)",
      text: "No Credit Card Required",
      currency: "€",
      price: 0,
      tokenAmount: 10000,
      description:
        "Extensions: \n Price: €1.29/credit \n 1 Credit = 50 Min of audio/video to text transcription. \n Features: \n - All features of the Free package \n - Advanced Transcription: Speech-to-text conversion in over 30 languages with automatic language detection. \n - Diarization: Recognition and separation of different speakers in the audio. \n  - Word-level Timestamp: Each word in the transcribed text is linked to its exact moment in the audio. \n - Automated Summary: Get short and concise summaries of your audio content.",
      serviceTitle:
        "Kickstart your learning journey. Perfect to taste our capabilities.",
      service: [
        "10 Min of audio/video to text transcription",
        "10,000 Tokens to ask to Virtual AI Professor",
      ],
      creditPrice: 1.49,
      featureTitle: "",
      featureContent: [
        "Basic Transcription: Up to 10 minutes of speech-to-text conversion in one of the main languages",
        "Speech Support: Interactivity with AI for clarifications and basic Q&A.",
      ],
    },
    {
      name: "Basic",
      text: "Only for the first 500 subscribers",
      currency: "€",
      price: 20,
      tokenAmount: 600000,
      description:
        "*Elevate your studies. Advanced transcription and multilingual support for limitless learning.* \n - 10 Hours of audio/video to text transcription - 300,000 Tokens for questions to the Virtual AI Professor (ChatGPT 3.5)Extensions: \n Price: €1.29/credit \n 1 Credit = 50 Min of audio/video to text transcription. \n Features: \n - All features of the Free package \n - Advanced Transcription: Speech-to-text conversion in over 30 languages with automatic language detection. \n - Diarization: Recognition and separation of different speakers in the audio. \n  - Word-level Timestamp: Each word in the transcribed text is linked to its exact moment in the audio. \n - Automated Summary: Get short and concise summaries of your audio content.",
      serviceTitle:
        "Elevate your studies. Advanced transcription and multilingual support for limitless learning",
      service: [
        "12 Hours of audio/video to text transcription",
        "300,000 Tokens to ask to Virtual AI Professor",
      ],
      creditPrice: 1.29,
      featureTitle: "Everything included in the free package, plus..",
      featureContent: [
        "Advanced Transcription: Speech-to-text conversion in over 30 languages with automatic language detection.",
        "Diarization: Recognition and separation of different speakers in the audio.",
        "Word-level Timestamp: Each word in the transcribed text is linked to its exact moment in the audio.",
        "Automated Summary: Get short and concise summaries of your audio content.",
      ],
    },
    {
      name: "Advanced",
      text: "Only for the first 500 subscribers",
      currency: "€",
      price: 35,
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
      serviceTitle:
        "Maximize your experience. Analysis, personalized Q&A, and speed for those who want more",
      service: [
        "25 Hours of audio/video to text transcription",
        "600,000 Tokens to ask to Virtual AI Professor",
      ],
      creditPrice: 1.09,
      featureTitle: "Everything included in the Basic package, plus..",
      featureContent: [
        "Summary and Analysis: Automated summary, entity detection, and sentiment analysis",
        "Custom Q&A Sessions: Deep interaction with AI to probe topics and get detailed explanations",
        "Batch Processing: Process 1 hour of audio in about 12 seconds",
        "Sentiment Analysis.",
        "Custom Q&A sessions.",
        "Pro Audio Intelligence for deeper, personalized analysis.",
        "Custom speech models and noise reduction.",
        "Custom vocabulary and punctuation",
      ],
    },
    {
      name: "Pro",
      text: "Only for the first 500 subscribers",
      currency: "€",
      price: 100,
      tokenAmount: 2700000,
      serviceTitle:
        "The elite of learning. Exclusive access, enhanced mentor, and premium training for true pioneers.",
      service: [
        "50 Hours of audio/video to text transcription",
        "300,000 Tokens to ask to Virtual AI Professor",
      ],
      creditPrice: 0.99,
      featureTitle: "Everything included in the Adcanced package, plus..",
      featureContent: [
        "Priority access to new features and updates",
        "Ultimate Audio Intelligence with advanced language comprehension capabilities.",
        "Enhanced virtual mentor",
        "Exclusive access to webinars and training sessions",
        "High-quality voice recognition guaranteed",
      ],
    },
  ];
  const handleToggle = () => {
    // Toggle between 'month' and 'year' plans when the switch is clicked
    const newPlan = selectedPlan === "month" ? "year" : "month";
    setSelectedPlan(newPlan);
  };
  const [selectedPlan, setSelectedPlan] = useState("month");
  return (
    <div className={className}>
      <div className="flex flex-col mb-16">
        <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-[#F3F4F6] text-center sm:text-center">
          Choose the plan that fits your needs
        </h2>
        <p className="text-[#9CA3AF] text-lg mx-2 sm:mx-0 text-center sm:text-center">
          ChatMP3.ai is accessible to everyone at unbeatable prices
        </p>
      </div>
      <div className="flex justify-center items-center my-5">
        <span className="mr-3 text-sm font-medium text-gray-300 items-center flex">
          Month Plan
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-black rounded-full border border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#36D45A] peer-checked:border-none"></div>
          <span className="ml-3 text-sm font-medium text-gray-300">
            Year Plan
          </span>
        </label>
      </div>
      <div className="sm:flex mx-auto justify-center px-16 w-10/12 hidden">
        {planData.map((item, index) => (
          <PlanCard
            key={index}
            {...item}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        ))}
      </div>
      <div className="sm:hidden block">
        <MobileSlider planData={planData}></MobileSlider>
      </div>
    </div>
  );
};

export default Plan;
