import React from "react";

const ImageCard = ({ card }) => {
  return (
    <div className="max-w-sm bg-[#FFFFFF0D] border border-[#4E4E52] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg m-8 flex mx-auto"
        src={card.imgSrc}
        alt={card.title}
      />
      <div className="px-5">
        <h5 className="mb-2 text-2xl font-bold text-center text-[#F3F4F6]">
          {card.title}
        </h5>
        <p className="mb-3 font-normal text-[#9CA3AF]">{card.content}</p>
      </div>
    </div>
  );
};

export default ImageCard;
