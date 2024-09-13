import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth";
import "./App.css";

import { login, logout } from "./store/authSlice";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); --> this is usefull when react app created using create-react-app [always read environment documentation]
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="App">
      <h1>Bloging Mate</h1>
    </div>
  ) : (
    <div>Loading...</div>
  ) : null
}

export default App;
