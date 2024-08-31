import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx"

function App() {

  let info = {
    name:"Akash",
    desc:"Great Coder"
  }

  let infoArray = [1,2,3]

  return (
    <>
      <Card name="Akash" infoX={info} newArray={infoArray} />
      
    </>
  );
}

export default App;
