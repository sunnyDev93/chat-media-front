import { Card } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";

const UserStatus = () => {
  const user = useSelector(selectUser);
  return (
    <div>
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
            {user.plan === "Free" && "Price: €1.49/credit"}
            {user.plan === "Basic" && "Price: €1.29/credit"}
            {user.plan === "Advanced" && "Price: €1.09/credit"}
            {user.plan === "Pro" && "Price: €0.99/credit"}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            1 Credit = 30 Min of media to transcription.
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UserStatus;
