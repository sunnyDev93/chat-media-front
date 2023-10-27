import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getToken, selectUser } from "../store/auth/selectors";
import { useLanguage } from "../utils/LanguageContext";
import { makePayment } from "../utils/makePayment";
import { translations } from "../utils/translations";
import {
  fetchAllUsers,
  getReferedAdvancedUsersCnt,
  getReferedBasicUsersCnt,
  getReferedFreeUsersCnt,
  getReferedProUsersCnt,
  getReferedUsersCnt,
} from "../utils/user/user.controller";

export default function UserProfile() {
  const user = useSelector(selectUser);
  const [users, setUsers] = useState([]);
  const token = useSelector(getToken);
  const { language } = useLanguage();
  const [creditCnt, setCreditCnt] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await fetchAllUsers());
    };
    fetchData();
  }, []);

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
      name: user.plan,
      price: price,
      productOwner: "Simone Lamanna",
      description: `${price}€/credit   1 Credit = 30 Min of media to transcription.`,
      tokenAmount: 30000 * creditCnt,
      quantity: creditCnt,
    };
    makePayment(plan, paymentMethodTypes, token);
  };
  const [link, setLink] = useState("");

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      fetch(`http://localhost:8000/api/auth/${uid}/referralCode`)
        .then((response) => response.json())
        .then((data) => {
          setLink(
            `${window.location.host}/register?referralCode=${data.referralCode}`
          );
        });
    }
  }, [user]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    toast.info("Copied Referral URL!\n" + link);
  };
  return (
    <Card>
      <div className="flex justify-end px-4 pt-4 z-50 bg-white blur-0"></div>
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {translations[language].userPlanTtl} : {user.plan}
        </h5>
        <span className="text-sm text-gray-500 mt-2">
          {translations[language].token}: {user.token} (
          {parseInt(Number(user.token) / 60000)}h {Number(user.token) % 60} min)
        </span>
        <span className="text-sm text-gray-500 mt-2">
          {translations[language].role}: {user.role}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          Referred Users: {getReferedUsersCnt(users, user?.referalCode)}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          Referred Free Users:{" "}
          {getReferedFreeUsersCnt(users, user?.referalCode)}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          Referred Basic Users:{" "}
          {getReferedBasicUsersCnt(users, user?.referalCode)}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          Referred Advanced Users:{" "}
          {getReferedAdvancedUsersCnt(users, user?.referalCode)}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          Referred Pro Users: {getReferedProUsersCnt(users, user?.referalCode)}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          {user.plan === translations[language].freeName &&
            "Price: €1.49/credit"}
          {user.plan === translations[language].basicName &&
            "Price: €1.29/credit"}
          {user.plan === translations[language].advancedName &&
            "Price: €1.09/credit"}
          {user.plan === translations[language].proName &&
            translations[language].price +
              ": €0.99/" +
              translations[language].credit}
        </span>
        <span className="text-sm text-gray-500 mt-2">
          1 {translations[language].credit} = 30{" "}
          {translations[language].creditSup}
        </span>
        <div className="mt-3 flex space-x-3 lg:mt-6">
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
            <p>{translations[language].charge}</p>
          </button>
          {/* <button
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={handleLogout}
          >
            <p>Sign out</p>
          </button> */}
        </div>
      </div>
      <div className="flex">
        <button
          onClick={copyToClipboard}
          className="text-sm border border-gray-300 p-2 border-r-0"
        >
          Refer
        </button>
        <div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="referral code here"
            value={
              window.location.host +
              "/" +
              "register?referralCode=" +
              user?.referalCode
            }
            onChange={(e) => e.target.value}
            required
          />
        </div>
      </div>
    </Card>
  );
}
