import React from "react";
import ChooseLanguage from "./ChooseLanguage";
import { useDispatch, useSelector } from "react-redux";
import { currentCurrency } from "../store/currency";
import { currentUser } from "../store/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/header.scss";
const Header = () => {
  const user = useSelector(currentUser);
  const { currency } = useSelector(currentCurrency);
  const navigate = useNavigate();

  const clearTokenStorege = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="header_wraper">
      <div className="contact_login_block">
        <div className="decor_1"></div>
        <div className="decor_2"></div>
        <div className="wraper">
          <span className="wrap_item text">+380 50 976 7417</span>
          <span className="wrap_item text">+380 96 626 7481</span>
          <span className="wrap_item text">ponto-print@ukr.net</span>
          {!user?.email ? (
            <span className="wrap_item">
              <button>
                <Link to="/login">Вхід</Link>
              </button>
            </span>
          ) : (
            <span className="wrap_item" onClick={clearTokenStorege}>
              <button>Вихід</button>
            </span>
          )}

          <span className="wrap_item text">
            <ChooseLanguage />
          </span>
          <span className="wrap_item text">
            Курс на сайті: {currency?.currency}
          </span>
        </div>
      </div>

      <div className="nav_logo_wraper">
        <div className="logo">
          <img src="./img/logo.png" alt="" />
        </div>
        {user !== null && "isAdmin" in user ? (
          <>
            {user?.isAdmin ? (
              // Admin Route
              <div className="navbar">
                <Link to="/">
                  <p className="link_route">Головна</p>
                </Link>
                <Link to="/admin">
                  {" "}
                  <p className="link_route">Адмін панель</p>
                </Link>
                <Link to="/calculator">
                  <p className="link_route">Калькулятор</p>
                </Link>
              </div>
            ) : (
              //Login user Route
              <div className="navbar">
                <Link to="/">
                  <p className="link_route">Головна</p>
                </Link>
                <Link to="/admin"> </Link>
                <Link to="/calculator">
                  <p className="link_route">Калькулятор</p>
                </Link>
              </div>
            )}
          </>
        ) : (
          // Not Login user Route
          <div className="navbar">
            <Link to="/">
              <p className="link_route">Головна</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
