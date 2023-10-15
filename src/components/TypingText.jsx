import React, { useEffect, useState } from "react";

const TypingText = ({ orgText, className, spd }) => {
  const [text, setText] = useState("");
  const originalText = orgText;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (originalText) {
        if (text.length < originalText.length) {
          setText(originalText.slice(0, text.length + 1));
        } else {
          clearInterval(typingInterval);
        }
      }
    }, spd); // Adjust the interval to control typing speed
    return () => clearInterval(typingInterval);
  }, [text, originalText, spd]);

  return (
    <div>
      <h1 className={className}>{text}</h1>
    </div>
  );
};

export default TypingText;
