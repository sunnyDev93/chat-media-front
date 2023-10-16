import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanCard from "./PlanCard";

const MobileSlider = ({ planData, selectedPlan }) => {
  const isMobile = true;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {planData.map((item, index) => (
        <PlanCard
          key={index}
          {...item}
          isMobile={isMobile}
          selectedPlan={selectedPlan}
        />
      ))}
    </Slider>
  );
};

export default MobileSlider;
