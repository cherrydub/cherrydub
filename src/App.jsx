import "./App.css";
import "@fontsource/roboto";
import NavigationDesktop from "./components/NavigationDesktop";
import BottomStartBar from "./components/BottomStartBar";
import MiddleContent from "./components/MiddleContent";

function App() {
  return (
    <>
      <NavigationDesktop />
      <MiddleContent />
      <BottomStartBar />
    </>
  );
}

export default App;
