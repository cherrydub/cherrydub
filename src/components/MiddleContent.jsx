import React from "react";
import WindowCard from "./WindowCard";
import TestStyle from "./TestStyle";

export default function MiddleContent({ windowDisplayed, setWindowDisplayed }) {
  console.log("window:", windowDisplayed);
  if (windowDisplayed === null) {
    return (
      <div className="border-4 border-pink-700 absolute top-0 left-20 right-20 h-full border-1">
        no window selected
      </div>
    );
  } else {
    return (
      <div className="border-4 border-yellow-700 absolute top-0 left-20 right-20 h-full border-1">
        <WindowCard
          windowDisplayed={windowDisplayed}
          setWindowDisplayed={setWindowDisplayed}
        />
        {/* <TestStyle /> */}
      </div>
    );
  }
}
