import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx"

function App() {

  let info1 = {
    name:"Akash",
    desc:"Great Coder"
  }
  let info2 = {
    name:"Singh",
    desc:"Great Singh"
  }

  let infoArray = [1,2,3]

  return (
    <>
      <Card name="Akash" infoX={info1} newArray={infoArray} />
      <Card name="Singh" infoX={info2} newArray={infoArray} />
      
    </>
  );
}

export default App;
