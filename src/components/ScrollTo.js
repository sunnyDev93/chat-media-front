import React from "react";
import { Link } from "react-scroll";

const ScrollTo = () => {
  return (
    <div className="z-40">
      <Link
        className="z-40 text-white text-sm xl:text-base cursor-pointer bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-3.5 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 font-medium rounded-lg text-center mb-2"
        to="targetSection"
        smooth="true"
        duration={500}
      >
        How it work
      </Link>
    </div>
  );
};

export default ScrollTo;
