import React from "react";
import WindowCard from "./WindowCard";
import TestStyle from "./TestStyle";
import Cv from "./windows/Cv";

export default function MiddleContent({ windowDisplayed, setWindowDisplayed }) {
  console.log("window:", windowDisplayed);
  if (windowDisplayed === null) {
    return (
      <div className="absolute left-12 right-0 flex justify-center py-5"></div>
    );
  } else {
    return (
      <div className="absolute left-12 right-0 flex justify-center py-5">
        <WindowCard
          windowDisplayed={windowDisplayed}
          setWindowDisplayed={setWindowDisplayed}
        />
        {/* <TestStyle /> */}
      </div>
    );
  }
}
