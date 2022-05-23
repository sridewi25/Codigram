import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import HomeAfterLogin from "./pages/Home/HomeAfterLogin";


function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);
  return (
    <>
    
      { loginStatus ? (
        <HomeAfterLogin loginStatus={loginStatus}loginCbHandler={loginCbHandler}></HomeAfterLogin>
      ) : (
        <Home loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Home>
      )}
    </>
  );
}

export default App;
