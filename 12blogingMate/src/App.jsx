import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); --> this is usefull when react app created using create-react-app [always read environment documentation]
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
  
  return (
    <>
      <h1>Blogging Application</h1>
    </>
  );
}

export default App;
