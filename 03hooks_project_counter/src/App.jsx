import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//-> below counter variable will not increamnet every where so here comes the hook concepts
// function App() {

//   let counter = 5

//   const addValue = () => {
//     counter = counter+1
//   }
//   const subValue = () => {
//     this.counter--
//   }

//   return (
//     <>
//       <h1>React With AKS!</h1>
//       <h3>Counter Value: {counter}</h3>
//       <button id="add" onClick={addValue}>Increase</button>
//       <br />
//       <button id="sub" onClick={subValue}>Decrease</button>
//     </>
//   )
// }

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React With AKS!</h1>
      <h3>Counter Value: {counter}</h3>
      <button id="add" onClick={addValue}>
        Increase
      </button>
      <br />
      <button id="sub" onClick={subValue}>
        Decrease
      </button>
    </>
  );
}

export default App;
