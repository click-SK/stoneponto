import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { currentUser } from "./store/auth";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import AdminPanel from "./components/Admin/AdminPanel";
import { Routes, Route } from "react-router-dom";
import CalculatorPartner from "./components/calculator/CalculatorPartner";
import LoginForm from "./components/Authorization/LoginForm";
import FirstRequest from "./components/FirstRequest";

function App() {
  const user = useSelector(currentUser);
  return (
    <div className="App">
      <FirstRequest />
      <Header />
      {user !== null && "isAdmin" in user ? (
        <>
          {user?.isAdmin ? (
            // Admin Route
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/calculator" element={<CalculatorPartner />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          ) : (
            //Login user Route
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/calculator" element={<CalculatorPartner />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          )}
        </>
      ) : (
        // Not Login user Route
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
