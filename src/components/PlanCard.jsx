import React, { useState } from "react";

const PlanCard = ({ title, currency, price, text, service, isMobile }) => {
  const [selectedPlan, setSelectedPlan] = useState("month");
  const popularClass = `${
    title === "Basic" && !isMobile ? "scale-y-110 scale-x-105" : ""
  } bg-transparent border-2 border-[#36D45A] rounded-lg`;
  const handleToggle = () => {
    // Toggle between 'month' and 'year' plans when the switch is clicked
    const newPlan = selectedPlan === "month" ? "year" : "month";
    setSelectedPlan(newPlan);
  };

  return (
    <div className="sm:mx-5 mx-2">
      <div className={popularClass}>
        {title === "Basic" ? (
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

        <div className="w-full max-w-sm p-4 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-100 text-center">
            {title}
          </h5>
          {price === "0" ? (
            ""
          ) : (
            <div className="flex justify-center my-5">
              <label className="relative inline-flex items-center mb-4 cursor-pointer">
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
          )}

          <div className="flex items-baseline text-white justify-center">
            <span className="text-4xl font-bold tracking-tight">
              {selectedPlan === "month" ? (
                <div className="flex items-center">
                  {currency}
                  {price}
                </div>
              ) : (
                <div>
                  <div className="flex items-center">
                    <span className="font-bold text-4xl mr-2 text-gray-400 line-through"></span>
                    <span className="line-through text-gray-400">
                      {currency}
                      {Number(price) * 12}
                    </span>
                    /
                    <span>
                      {currency}
                      {Number(price) * 10.8}
                    </span>
                  </div>
                  <div className="flex items-center"></div>
                </div>
              )}
            </span>
            <span className="ml-1 text-xl font-normal text-gray-200">
              {selectedPlan === "month" ? "/month" : ""}
            </span>
          </div>
          <div className="text-gray-400 my-3 text-center">{text}</div>
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
                <span className="text-base font-normal leading-tight text-gray-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <button className="relative flex mx-auto items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-green-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
              Choose Plan
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
