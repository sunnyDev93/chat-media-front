import React, { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex flex-col center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-block font-bold p-4 rounded-t-lg px-7 text-white ${
          isOpen
            ? "border-b-2 border-[#36D45A] bg-gradient-to-t from-[#36D45A] via-gray-950 to-black"
            : ""
        }`}
      >
        {title}
      </button>
      <div
        className={`overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        } transition-max-height duration-700`}
      >
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
