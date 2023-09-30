import React, { useEffect, useState } from "react";

const TypingText = ({ orgText }) => {
  const [text, setText] = useState("");
  const originalText = orgText;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (text.length < originalText.length) {
        setText(originalText.slice(0, text.length + 1));
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust the interval to control typing speed
    return () => clearInterval(typingInterval);
  }, [text, originalText]);

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white capitalize">
        {text}
      </h1>
    </div>
  );
};

export default TypingText;
