import React from "react";
import { Link } from "react-scroll";

const ScrollTo = () => {
  return (
    <div>
      <Link
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-6 py-3.5 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 font-medium rounded-lg text-base text-center mb-2"
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
