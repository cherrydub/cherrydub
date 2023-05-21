import { useState } from "react";
import Counter from "./windows/Counter";
import Cv from "./windows/Cv";

export default function WindowCard({ windowDisplayed, setWindowDisplayed }) {
  const [windowSize, setWindowSize] = useState({
    width: 300,
    height: null,
  });
  const [windowIcon, setWindowIcon] = useState("Maximize");
  const [windowTitle, setWindowTitle] = useState("");
  const [windowTitleIcon, setWindowTitleIcon] = useState("");

  const handleWindowIconClick = () => {
    if (windowIcon === "Maximize") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setWindowIcon("Restore");
    } else {
      setWindowSize({ width: 300, height: null });
      setWindowIcon("Maximize");
    }
  };

  let WindowContent = null;

  switch (windowDisplayed) {
    case "Counter":
      WindowContent = Counter;

      break;
    case "Cv":
      WindowContent = Cv;
      break;
    // Add cases for other windowDisplayed values as needed
    default:
      break;
  }

  return (
    <>
      <div style={windowSize} className="window">
        <div className="title-bar">
          <div className="title-bar-text">{windowDisplayed}</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize" />
            <button
              className="bg-gray-300"
              aria-label={windowIcon}
              onClick={handleWindowIconClick}
            />
            <button
              className="bg-gray-300"
              onClick={() => setWindowDisplayed(null)}
              aria-label="Close"
            />
          </div>
        </div>

        <div className="window-body">
          <WindowContent />
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import midpic from "../assets/middle.png";
// import toppic from "../assets/toppy.png";
// import bottompic from "../assets/bottom.png";
// import cvPdf from "../assets/cv.pdf";

// export default function WindowCard() {
//   return (
//     <div className="flex flex-col items-center h-screen">
//       <div className="window-top mt-20">
//         <img src={toppic} alt="" />
//       </div>
//       <div className="text-center flex-1 overflow-auto">
//         <div className="midpic-background">
//           <div className="bg-white mx-1 h-full">
//             <iframe src={cvPdf} title="CV" className="w-full h-full"></iframe>
//           </div>
//         </div>
//       </div>
//       <div className="window-bottom mb-20">
//         <img src={bottompic} alt="" />
//       </div>
//     </div>
//   );
// }
