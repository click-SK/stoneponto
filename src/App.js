import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "./store/auth";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import AdminPanel from "./components/Admin/AdminPanel";
import { Routes, Route, useNavigate } from "react-router-dom";
import CalculatorPartner from "./components/calculator/CalculatorPartner";
import LoginForm from "./components/Authorization/LoginForm";
import FirstRequest from "./components/FirstRequest";
import UserPanel from "./components/User/UserPanel";
import Blog from "./components/Blog/Blog";
import Loader from "./components/Loader/Loader";
import Page404 from "./components/Page404";
function App() {
  const user = useSelector(currentUser);
  return (
    <div className="App">
      <FirstRequest />
      {
        user 
        ? 
        <>
      <Header />
      <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/news" element={<Blog />} />
        {user !== null && "isAdmin" in user ? (
          <>
            {user?.isAdmin ? (
              // Admin Route
              <>
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/calculator" element={<CalculatorPartner />} />
                <Route path="/login" element={<LoginForm />} />
              </>
            ) : (
              //Login user Route
              <>
                <Route path="/calculator" element={<CalculatorPartner />} />
                <Route path="/my-panel" element={<UserPanel />} />
              </>
            )}
          </>
        ) : (
          // Not Login user Route
          <>
            <Route path="/login" element={<LoginForm />} />
          </>
        )}
      </Routes>
      <Footer/>
        </>
        :
        <Loader/>
      }
    </div>
  );
}

export default App;
