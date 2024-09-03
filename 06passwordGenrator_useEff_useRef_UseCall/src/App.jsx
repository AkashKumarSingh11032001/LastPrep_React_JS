import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let strX = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numX = "0123456789";
    const symbolX = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (numberAllowed) strX += numX;
    if (symbolsAllowed) strX += symbolX;
    strX += characters;

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * strX.length + 1);
      password += strX.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, symbolsAllowed, setPassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full py-1 outline-none"
            value={password}
            placeholder="password"
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default App;
