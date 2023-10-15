import React, { useEffect, useState } from "react";

const HeroTypingText = ({ textArray, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < textArray[currentIndex].length && isTyping) {
        setCurrentText(
          (prevText) => prevText + textArray[currentIndex][charIndex]
        );
        setCharIndex(charIndex + 1);
      } else if (charIndex === textArray[currentIndex].length) {
        // Delay for 1 second before starting to erase
        setTimeout(() => {
          setIsTyping(false);
          setCharIndex(textArray[currentIndex].length - 1);
        }, 1000);
      } else if (!isTyping && charIndex > 0) {
        setCurrentText((prevText) => prevText.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else {
        setIsTyping(true);
        setCurrentIndex((currentIndex + 1) % textArray.length);
        setCharIndex(0);
      }
    }, 50); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex, charIndex, textArray, isTyping]);
  return (
    <div>
      <h1 className={className}>{currentText}</h1>
    </div>
  );
};

export default HeroTypingText;
