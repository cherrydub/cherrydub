import "./App.css";
import "@fontsource/roboto";
import NavigationDesktop from "./components/NavigationDesktop";
import BottomStartBar from "./components/BottomStartBar";
import MiddleContent from "./components/MiddleContent";
import "98.css";
import { useState } from "react";

function App() {
  const [windowDisplayed, setWindowDisplayed] = useState(null);

  return (
    <>
      <NavigationDesktop setWindowDisplayed={setWindowDisplayed} />
      <MiddleContent
        windowDisplayed={windowDisplayed}
        setWindowDisplayed={setWindowDisplayed}
      />
      <BottomStartBar />
    </>
  );
}

export default App;
