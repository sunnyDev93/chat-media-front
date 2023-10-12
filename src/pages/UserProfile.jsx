import { Card } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getToken, selectUser } from "../store/auth/selectors";
import { makePayment } from "../utils/makePayment";

export default function UserProfileCard() {
  const user = useSelector(selectUser);
  const token = useSelector(getToken);

  const [creditCnt, setCreditCnt] = useState(1);

  const handleChargeCredit = () => {
    let price = 1.49;
    if (user.plan === "Basic") {
      price = 1.29;
    }
    if (user.plan === "Advanced") {
      price = 1.09;
    }
    if (user.plan === "Pro") {
      price = 0.99;
    }
    const paymentMethodTypes = ["card"];
    const plan = {
      name: "Charge Credit",
      price: price,
      productOwner: "Simone Lamanna",
      description: `${price}€/credit   1 Credit = 30 Min of media to transcription.`,
      tokenAmount: 30000 * creditCnt,
      quantity: creditCnt,
    };
    makePayment(plan, paymentMethodTypes, token);
  };
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4 z-50 bg-white blur-0"></div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Current Plan : {user.plan}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Token: {user.token}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Role: {user.role}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Charge: {user.plan === "Free" && "Price: €1.49/credit"}
          {user.plan === "Basic" && "Price: €1.29/credit"}
          {user.plan === "Advanced" && "Price: €1.09/credit"}
          {user.plan === "Pro" && "Price: €0.99/credit"}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          1 Credit = 30 Min of media to transcription.
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <div className="flex">
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
              value={creditCnt}
              onChange={(e) => setCreditCnt(e.target.value)}
              required
            />
          </div>
          <button
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800"
            onClick={handleChargeCredit}
          >
            <p>Charge</p>
          </button>
          {/* <button
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={handleLogout}
          >
            <p>Sign out</p>
          </button> */}
        </div>
      </div>
    </Card>
  );
}
