import { useState, useCallback, useEffect } from "react";

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


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, symbolsAllowed,passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      {/* PROJECT HEADING */}
      <h1 className="text-white text-center my-3">Password generator</h1>
      {/* PASSWORD & COPY BUTTON */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          // ref={passwordRef}
        />
        <button
          // onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        {/* SLIDER */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        {/* NUMBER ALLOWED */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        {/* SYMBOL ALLOWED */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={symbolsAllowed}
            id="characterInput"
            onChange={() => {
              setSymbolsAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
