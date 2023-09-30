import React from "react";
import { MobileSlider, PlanCard } from "../../components";

const Plan = () => {
  const planData = [
    {
      title: "Free",
      currency: "€",
      price: "0",
      text: "Forever free",
      service: [
        "10 Min of audio/video to text transcription",
        "10,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      title: "Basic",
      currency: "€",
      price: "20",
      text: "All the basics for starting a new business",
      service: [
        "12 Hours of audio/video to text transcription",
        "300,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      title: "Advanced",
      currency: "€",
      price: "35",
      text: "Everything you need for a growing business",
      service: [
        "25 Hours of audio/video to text transcription",
        "600,000 Tokens to ask to Virtual AI Professor",
      ],
    },
    {
      title: "Professional",
      currency: "€",
      price: "100",
      text: "Advanced features for scaling your business",
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
