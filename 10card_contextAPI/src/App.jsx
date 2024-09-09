import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TheamProvider } from "./contexts/Theam";

function App() {
  return (
    <TheamProvider >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theam BTN */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
        </div>
      </div>
    </TheamProvider>
  );
}

export default App;
