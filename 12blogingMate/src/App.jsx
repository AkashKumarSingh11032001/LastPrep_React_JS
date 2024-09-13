import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from './appwrite/auth'
import "./App.css";
import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'

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
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
