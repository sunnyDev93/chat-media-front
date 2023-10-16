import React from "react";

const ImageCard = ({ card }) => {
  const cardClass = `w-fit flex flex-col mx-auto bg-[#FFFFFF0D] border border-[#4E4E52] rounded-lg xl:mr-6 my-3 shadow-lg hover:shadow-basic hover:${card.style}`;
  return (
    <div className={cardClass}>
      <img
        className="rounded-t-lg m-8 flex mx-auto"
        src={card.imgSrc}
        alt={card.title}
      />
      <div className="px-5">
        <h5 className="mb-2 text-2xl font-bold text-center text-[#F3F4F6]">
          {card.title}
        </h5>
        <p className="mb-3 font-normal text-[#9CA3AF] text-center">
          {card.content}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
