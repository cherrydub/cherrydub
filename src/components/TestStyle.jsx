import { useState } from "react";

export default function TestStyle() {
  const [count, setCount] = useState(0);
  const [counterWindowSize, setCounterWindowSize] = useState({
    width: 300,
    height: null,
  });
  const [windowIcon, setWindowIcon] = useState("Maximize");

  const handleWindowIconClick = () => {
    if (windowIcon === "Maximize") {
      setCounterWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setWindowIcon("Restore");
    } else {
      setCounterWindowSize({ width: 300, height: null });
      setWindowIcon("Maximize");
    }
  };

  return (
    <>
      <div style={counterWindowSize} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Counter</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize" />
            <button
              className="bg-gray-300"
              aria-label={windowIcon}
              onClick={handleWindowIconClick}
            />
            <button className="bg-gray-300" aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <p style={{ textAlign: "center" }}>Current count: {count}</p>
          <div
            className="field-row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>0</button>
          </div>
        </div>
      </div>
      <div style={counterWindowSize} className="window">
        <div className="title-bar">
          <div className="title-bar-text">NotePad</div>
          <div className="title-bar-controls">
            <button className="bg-gray-300" aria-label="Minimize" />
            <button
              className="bg-gray-300"
              aria-label={windowIcon}
              onClick={handleWindowIconClick}
            />
            <button className="bg-gray-300" aria-label="Close" />
          </div>
        </div>

        <div className="window-body">
          <p style={{ textAlign: "center" }}>Current count: {count}</p>
          <div
            className="field-row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>0</button>
          </div>
        </div>
      </div>
    </>
  );
}
