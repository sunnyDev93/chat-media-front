import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
} from "@fortawesome/fontawesome-free-solid";

const Collapse = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  const className = isOpen
    ? "p-3 flex justify-between mx-auto cursor-pointer border border-[#4E4E52]"
    : "p-3 flex justify-between mx-auto cursor-pointer";
  return (
    <>
      <div className="card w-full mb-10">
        <div className="border border-[#4E4E52] rounded-lg bg-[#FFFFFF0D]">
          <div className={className} onClick={handleFilterOpening}>
            <h6 className="font-weight-bold text-white text-center ">
              {title}
            </h6>
            <button type="button" className="btn text-white">
              {!isOpen ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </button>
          </div>
          <div className="border-bottom">
            <div>
              {isOpen && <div className="p-3 text-white">{children}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
