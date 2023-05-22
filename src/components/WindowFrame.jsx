import { useState } from "react";
import Counter from "./windows/Counter";
import Cv from "./windows/Cv";
import Projects from "./windows/Projects";
import WindowTop from "./WindowTop";
import WindowMiddle from "./WindowMiddle";

export default function WindowFrame({}) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  return (
    <>
      <div style={windowSize} className="window">
        <WindowTop />
        <WindowMiddle />
      </div>
    </>
  );
}
