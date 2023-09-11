import React, { useState } from "react";
import Header from "./Header/Header";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

export default function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`font-inter text-custom-font min-h-[100dvh] px-[5%] py-[10%] sm:py-[5%] relative flex flex-col gap-[3em] ${
        theme ? "bg-dark-theme-bg" : "bg-light-theme-bg"
      } landscape:py-[2%] landscape:px-[10%]`}
    >
      <div
        className={`h-[30dvh] w-full absolute top-0 left-0 z-0 rounded-bl-[2em] rounded-br-[2em] ${
          theme
            ? "bg-dark-theme-top-bg-pattern"
            : "bg-light-theme-top-bg-pattern"
        }`}
      ></div>
      <Header theme={theme} setTheme={setTheme} />
      <SectionOne theme={theme} />
      <SectionTwo theme={theme} />
    </div>
  );
}
