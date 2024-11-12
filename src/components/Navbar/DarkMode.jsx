
import React, { useState, useEffect } from "react";
import DarkButton from "../../assets/website/dark-mode-button.png";
import LightButton from "../../assets/website/light-mode-button.png";


export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isdarkMode")
      ? localStorage.getItem("isDarkMode")
      : "light"
  );
  const element = document.documentElement; // access the document element

  // useEffect hook to update the document element class based on the isDarkMode state
  useEffect(() => {
    if (isDarkMode === "dark") {
      element.classList.add("dark");
      localStorage.setItem("isDarkMode", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("isDarkMode", "light");
    }
  });

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="LightButton"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1) ] transition-all duration-300 absolute right-0 z-10 ${
          isDarkMode === "dark" ? "opacity-0" : "opacity-100"
        } `}
        onClick={() => setIsDarkMode(isDarkMode === "dark" ? "light" : "dark")}
      />

      <img
        src={DarkButton}
        alt="DarkButton"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1) ] transition-all duration-300  "
        onClick={() => setIsDarkMode(isDarkMode === "light" ? "dark" : "light")}
      />
    </div>
  );
};


export default DarkMode;