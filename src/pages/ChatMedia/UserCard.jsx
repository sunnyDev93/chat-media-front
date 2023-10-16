import React from "react";

const UserCard = () => {
  return (
    <div>
      <div className="mb-4 rounded-lg bg-[#FFFFFF0D] p-4 sm:p-4 border-2 border-[#FFFFFF0D]">
        <div className="sm:flex justify-between sm:space-x-4 xl:space-x-0">
          <div className="flex">
            <img
              alt="avatar"
              src="./assets/img/design/avatar.png"
              className="mb-2 h-10 w-10"
            />
            <div>
              <h2 className="text-md font-bold text-white mx-1">
                Mushtaq Bilal, PhD
              </h2>
              <span className="text-[#888] mx-1">@MushtaqBilalPhD</span>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M17.8569 4.07289C17.2422 4.33807 16.5732 4.52892 15.8842 4.60325C16.5996 4.17823 17.1353 3.50678 17.3908 2.71486C16.7195 3.11421 15.9841 3.39425 15.2172 3.54254C14.8967 3.19987 14.509 2.92688 14.0783 2.74059C13.6477 2.5543 13.1833 2.45869 12.7141 2.45973C10.8156 2.45973 9.28884 3.99856 9.28884 5.88696C9.28884 6.15214 9.32098 6.41731 9.37321 6.67245C6.53058 6.52379 3.99531 5.16575 2.30982 3.08651C2.00271 3.61107 1.84177 4.20835 1.84375 4.8162C1.84375 6.00548 2.44844 7.05414 3.37054 7.67089C2.82713 7.64949 2.29645 7.50012 1.82165 7.23495V7.27714C1.82165 8.94254 2.99888 10.3227 4.56786 10.6401C4.27327 10.7166 3.97022 10.7557 3.66585 10.7566C3.44286 10.7566 3.23192 10.7345 3.01897 10.7044C3.4529 12.0624 4.71652 13.0488 6.22121 13.0809C5.04397 14.003 3.56942 14.5454 1.9683 14.5454C1.68103 14.5454 1.41585 14.5354 1.14062 14.5033C2.65937 15.4776 4.46138 16.0401 6.40201 16.0401C12.702 16.0401 16.1493 10.8209 16.1493 6.29075C16.1493 6.14209 16.1493 5.99343 16.1393 5.84477C16.8062 5.3566 17.3908 4.75191 17.8569 4.07289Z"
              fill="#1DA1F2"
            />
          </svg>
        </div>
        <div className="sm:flex xl:block xl:space-y-4">
          <div className="sm:flex-1">
            <address className="text-sm font-normal not-italic text-white">
              <div className="mt-4">
                ChatPDF is an AI-powered app that will make{" "}
              </div>
              <div className="">
                reading journal articles easier and faster.
              </div>

              <div className="mt-4 text-sm font-normal text-white">
                Simply upload a PDF and start asking it <br />
                questions.
              </div>
              <div className="mt-4 text-sm font-normal text-white">
                It's like ChatGPT, but for research papers. <br />
                Here's how to use it:
              </div>
              <div className="flex justify-between">
                <div className="mt-4 text-sm font-normal text-white">
                  3,945 <span className="text-[#888]">Retweets</span>
                </div>
                <div className="mt-4 text-sm font-normal text-white">
                  18.2K <span className="text-[#888]">Likes</span>
                </div>
                <div className="mt-4 text-sm font-normal text-white">
                  2.9M <span className="text-[#888]">Views</span>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
