import { useState } from "react";
import "./App.css";
import { TheamProvider } from "./contexts/Theam";
import { useEffect } from "react";
import TheamBtn from "./components/TheamBtn";
import Card from "./components/Card";

function App() {
  const [theamMode, setTheamMode] = useState("light");
  const lightTheam = () => {
    setTheamMode("light");
  };
  const darkTheam = () => {
    setTheamMode("dark");
  };

  // acctual change in theam
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theamMode);
  }, [theamMode]);

  return (
    <TheamProvider value={{ theamMode, darkTheam, lightTheam }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theam BTN */}
            <TheamBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </TheamProvider>
  );
}

export default App;
