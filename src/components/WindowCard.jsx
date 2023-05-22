import { useState } from "react";
import Counter from "./windows/Counter";
import Cv from "./windows/Cv";
import Projects from "./windows/Projects";

export default function WindowCard({ windowDisplayed, setWindowDisplayed }) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  const [windowIcon, setWindowIcon] = useState("Maximize");
  const [windowTitle, setWindowTitle] = useState("");
  const [windowTitleIcon, setWindowTitleIcon] = useState("");

  const handleWindowIconClick = () => {
    if (windowIcon === "Maximize") {
      setWindowSize({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.8,
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
    case "Projects":
      WindowContent = Projects;
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
