import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MobileSlider, PlanCard } from "../../components";
import { selectUser } from "../../store/auth/selectors";
import { selectPrices } from "../../store/priceMng/selectors";
import { fetchAllPrices } from "../../utils/AdjustPrice";
import { useLanguage } from "../../utils/LanguageContext";
import { translations } from "../../utils/translations";

const Plan = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const className =
    location.pathname === "/plan"
      ? "bg-black p-5 py-16 mt-32"
      : "bg-black p-5 py-16";
  // const [prices, setPrices] = useState([]);
  const prices = useSelector(selectPrices);
  const user = useSelector(selectUser);
  console.log("user", user?.role);
  const basicPrice = Number(prices && prices[1]?.price);
  const advancedPrice = Number(prices && prices[2]?.price);
  const proPrice = Number(prices && prices[3]?.price);
  const influBasicPrice =
    (Number(prices && prices[1]?.price) * (100 - Number(user?.discount))) / 100;
  const influAdvancedPrice =
    (Number(prices && prices[2]?.price) * (100 - Number(user?.discount))) / 100;
  const influProPrice =
    (Number(prices && prices[3]?.price) * (100 - Number(user?.discount))) / 100;

  console.log(influProPrice);
  const dispatch = useDispatch();
  const influPlanData = [
    {
      name: translations[language]?.freeName,
      text: translations[language]?.freeTxt,
      currency: translations[language]?.currency,
      price: Number(prices && prices[0]?.price),
      tokenAmount: 10000,
      description: translations[language]?.freeDesc,
      serviceTitle: translations[language]?.freeServiceTtl,
      service: translations[language]?.freeService,
      creditPrice: Number(prices && prices[0]?.creditPrice),
      featureTitle: translations[language]?.freeFeatureTtl,
      featureContent: translations[language]?.freeFeatureContent,
    },
    {
      name: translations[language]?.basicName,
      text: translations[language]?.basicTxt,
      currency: translations[language]?.currency,
      price: influBasicPrice,
      tokenAmount: 600000,
      description: translations[language]?.basicDesc,
      serviceTitle: translations[language]?.basicServiceTtl,
      service: translations[language]?.basicService,
      creditPrice: Number(prices && prices[1]?.creditPrice),
      featureTitle: translations[language]?.basicFeatureTtl,
      featureContent: translations[language]?.basicFeatureContent,
    },
    {
      name: translations[language]?.advancedName,
      text: translations[language]?.advancedTxt,
      currency: translations[language]?.currency,
      price: influAdvancedPrice,
      tokenAmount: 1500000,
      description: translations[language]?.advancedDesc,
      serviceTitle: translations[language]?.advancedServiceTtl,
      service: translations[language]?.advancedService,
      creditPrice: influAdvancedPrice,
      featureTitle: translations[language]?.advancedFeatureTtl,
      featureContent: translations[language]?.advancedFeatureContent,
      borderStyle: " shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)]",
    },
    {
      name: translations[language]?.proName,
      text: translations[language]?.proTxt,
      currency: "€",
      price: influProPrice,
      tokenAmount: 2700000,
      serviceTitle: translations[language]?.proServiceTtl,
      service: translations[language]?.proService,
      creditPrice: Number(prices && prices[3]?.creditPrice),
      featureTitle: translations[language]?.proFeatureTtl,
      featureContent: translations[language]?.proFeatureContent,
    },
  ];
  const planData = [
    {
      name: translations[language]?.freeName,
      text: translations[language]?.freeTxt,
      currency: translations[language]?.currency,
      price: Number(prices && prices[0]?.price),
      tokenAmount: 10000,
      description: translations[language]?.freeDesc,
      serviceTitle: translations[language]?.freeServiceTtl,
      service: translations[language]?.freeService,
      creditPrice: Number(prices && prices[0]?.creditPrice),
      featureTitle: translations[language]?.freeFeatureTtl,
      featureContent: translations[language]?.freeFeatureContent,
    },
    {
      name: translations[language]?.basicName,
      text: translations[language]?.basicTxt,
      currency: translations[language]?.currency,
      price: basicPrice,
      tokenAmount: 600000,
      description: translations[language]?.basicDesc,
      serviceTitle: translations[language]?.basicServiceTtl,
      service: translations[language]?.basicService,
      creditPrice: Number(prices && prices[1]?.creditPrice),
      featureTitle: translations[language]?.basicFeatureTtl,
      featureContent: translations[language]?.basicFeatureContent,
    },
    {
      name: translations[language]?.advancedName,
      text: translations[language]?.advancedTxt,
      currency: translations[language]?.currency,
      price: advancedPrice,
      tokenAmount: 1500000,
      description: translations[language]?.advancedDesc,
      serviceTitle: translations[language]?.advancedServiceTtl,
      service: translations[language]?.advancedService,
      creditPrice: Number(prices && prices[2]?.creditPrice),
      featureTitle: translations[language]?.advancedFeatureTtl,
      featureContent: translations[language]?.advancedFeatureContent,
      borderStyle: " shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)]",
    },
    {
      name: translations[language]?.proName,
      text: translations[language]?.proTxt,
      currency: "€",
      price: proPrice,
      tokenAmount: 2700000,
      serviceTitle: translations[language]?.proServiceTtl,
      service: translations[language]?.proService,
      creditPrice: Number(prices && prices[3]?.creditPrice),
      featureTitle: translations[language]?.proFeatureTtl,
      featureContent: translations[language]?.proFeatureContent,
    },
  ];
  const handleToggle = () => {
    // Toggle between 'month' and 'year' plans when the switch is clicked
    const newPlan = selectedPlan === "month" ? "year" : "month";
    setSelectedPlan(newPlan);
  };
  useEffect(() => {
    dispatch(fetchAllPrices());
  }, [dispatch]);
  const [selectedPlan, setSelectedPlan] = useState("month");
  return (
    <div className={className}>
      <div className="flex flex-col mb-16">
        <h2 className="mb-3 text-2xl xl:text-4xl font-extrabold tracking-tight text-[#F3F4F6] text-center sm:text-center">
          {translations[language]?.planTtl}
        </h2>
        <p className="text-[#9CA3AF] text-md md:text-lg mx-2 sm:mx-0 text-center sm:text-center">
          {translations[language]?.planTxt}
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
      <div className="2xl:flex mr-10 px-16 w-fit hidden">
        {user?.role === "user"
          ? planData?.map((item, index) => (
              <PlanCard
                key={index}
                {...item}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            ))
          : influPlanData?.map((item, index) => (
              <PlanCard
                key={index}
                {...item}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
            ))}
      </div>
      <div className="2xl:hidden block w-full mx-3">
        <MobileSlider
          planData={user?.role === "user" ? planData : influPlanData}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        ></MobileSlider>{" "}
        :
      </div>
    </div>
  );
};

export default Plan;
