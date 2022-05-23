import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "../Register/RegisterPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../PageLogin/LoginPage";
import Navbar from "../../components/Navbar";
import HomePage from "./PageHome/HomePage";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/login_user" element={<LoginPage></LoginPage>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  );
}

export default Home;
