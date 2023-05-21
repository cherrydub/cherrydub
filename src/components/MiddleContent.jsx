import React from "react";
import WindowCard from "./WindowCard";
import TestStyle from "./TestStyle";
import Cv from "./windows/Cv";

export default function MiddleContent({ windowDisplayed, setWindowDisplayed }) {
  console.log("window:", windowDisplayed);
  if (windowDisplayed === null) {
    return (
      <div className="border-4 border-pink-700 absolute top-0 left-14 right-0 h-full border-1">
        <Cv />
      </div>
    );
  } else {
    return (
      <div className="border-4 border-yellow-700 absolute top-0 left-14 right-0 h-full border-1 p-8">
        <WindowCard
          windowDisplayed={windowDisplayed}
          setWindowDisplayed={setWindowDisplayed}
        />
        {/* <TestStyle /> */}
      </div>
    );
  }
}
