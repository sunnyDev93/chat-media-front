import React from "react";

const CarouselBtn = ({ carouselData }) => {
  return (
    <div>
      {carouselData.map((_, index) => (
        <button
          type="button"
          className="w-3 h-3 rounded-full mx-1"
          aria-current="true"
          aria-label="Slide 1"
          key={`button ${index}`}
          data-carousel-slide-to={index}
        ></button>
      ))}
    </div>
  );
};

export default CarouselBtn;
