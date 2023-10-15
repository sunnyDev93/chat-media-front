import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../store/auth/selectors";
import { makePayment } from "../utils/makePayment";

const PlanCard = ({
  name,
  currency,
  price,
  text,
  description,
  serviceTitle,
  service,
  isMobile,
  tokenAmount,
  selectedPlan,
  creditPrice,
  featureTitle,
  featureContent,
}) => {
  const token = useSelector(selectToken);
  const popularClass = `${
    name === "Advanced" && !isMobile ? "scale-y-100 scale-x-100" : ""
  }  backdrop-filter border-2 border-[#4E4E52] rounded-lg`;
  const freeClass = price > 0 ? "line-through text-gray-400" : "text-white";
  const handlePayment = () => {
    const paymentMethodTypes = ["card"];
    if (price > 0) {
      if (selectedPlan === "year") {
        const plan = {
          name: name,
          price: price * 10.8,
          productOwner: "Simone Lamanna",
          description: description,
          quantity: 1,
          tokenAmount: tokenAmount,
        };
        makePayment(plan, paymentMethodTypes, token);
      } else {
        const plan = {
          name: name,
          price: price,
          productOwner: "Simone Lamanna",
          description: description,
          tokenAmount: tokenAmount,
          quantity: 1,
        };
        makePayment(plan, paymentMethodTypes, token);
      }
    } else {
    }
  };

  return (
    <div className="sm:mx-5 mx-2">
      <div className={popularClass}>
        {name === "Advanced" ? (
          <>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center text-sm font-bold  rounded-full -top-2 -right-5 dark:border-gray-900">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                Most Popular
              </span>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="w-full max-w-sm p-4 shadow sm:p-8 ">
          <h5 className="mb-2 text-xl font-medium text-gray-100">{name}</h5>

          <div className="text-gray-400 mt-1">{text}</div>
          <div className="flex items-baseline text-white mb-4">
            <span className="text-4xl font-bold tracking-tight">
              {selectedPlan === "month" ? (
                <div className="flex items-center ml-auto">
                  {currency}
                  {price}
                </div>
              ) : (
                <div>
                  <div className="flex items-center">
                    <span className="font-bold text-4xl mr-2 text-gray-400 line-through"></span>
                    <span className={freeClass}>
                      {currency}
                      {Number(price) * 12}
                    </span>
                    {price > 0 && (
                      <div>
                        <span>/</span>
                        <span>
                          {currency}
                          {Number(price) * 10.8}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center"></div>
                </div>
              )}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-200">
              {selectedPlan === "month" ? "/month" : ""}
            </span>
          </div>

          <button
            className="relative flex mx-auto items-center p-0.5 mb-8 w-full overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-green-400 to-green-600 group-hover:from-green-400 group-hover:to-blue-600 shadow-[0_3px_20px_rgba(166,_245,_69,_0.7)]"
            onClick={handlePayment}
          >
            <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
              Get Started
            </span>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="274"
            height="2"
            viewBox="0 0 274 2"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M1 1L273 1.00002"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          <div className="pt-5">
            <span className="text-white font-bold">{serviceTitle}</span>
          </div>
          <ul className="space-y-5 my-7">
            {service.map((item, key) => (
              <li className="flex space-x-3 items-center" key={key}>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-[#36D45A] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-sm font-normal leading-tight text-[#9CA3AF]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="274"
            height="2"
            viewBox="0 0 274 2"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M1 1L273 1.00002"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          <div className="extensionSection my-5">
            <div className="text-white font-bold">Extensions:</div>
            <div className="text-white font-bold mt-3">
              Price:{" "}
              <span className="text-[#9CA3AF] font-normal text-sm">
                €{creditPrice}/credit
              </span>
            </div>
            <div className="text-white font-bold mt-3">
              1 Credit{" "}
              <span className="text-[#9CA3AF] font-normal text-sm">
                = 50 Min of audio/video to text transcription.
              </span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="274"
            height="2"
            viewBox="0 0 274 2"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M1 1L273 1.00002"
              stroke="white"
              strokeLinecap="round"
            />
          </svg>
          <div className="mt-5 font-bold">
            <div className="text-white">{featureTitle}</div>
            <ul className="space-y-5 my-7">
              {featureContent.map((item, key) => (
                <li className="flex space-x-3 items-center" key={key}>
                  <span className="flex items-start text-sm font-normal leading-tight text-white">
                    <img
                      src="./assets/img/check.svg"
                      alt="check"
                      className="mr-2"
                    />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
