import React from "react";
import ChooseLanguage from "./ChooseLanguage";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { currentCurrency } from "../store/currency";
import { currentUser } from "../store/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {FaTelegramPlane } from 'react-icons/fa';
import {FaWhatsapp } from 'react-icons/fa';
import {FaViber } from 'react-icons/fa';

import "../style/header.scss";
const Header = () => {
  const user = useSelector(currentUser);
  const { currency } = useSelector(currentCurrency);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const clearTokenStorege = () => {
    window.localStorage.removeItem("token");
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    },500)

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
              <button
              
              >
                <Link to="/login">{t(`Exit`)}</Link>
              </button>
            </span>
          ) : (
            <span className="wrap_item" onClick={clearTokenStorege}>
              <button>{t(`Entrance`)}</button>
            </span>
          )}

          <span className="wrap_item text">
            <ChooseLanguage />
          </span>
          <span className="wrap_item text">
            <FaTelegramPlane
            className="icon_social"/>
            <FaWhatsapp
            className="icon_social"/>
            <FaViber
            className="icon_social"/>
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
                  <p className="link_route">{t(`Main`)}</p>
                </Link>
                <Link to="/admin">
                  <p className="link_route">{t(`Admin panel`)}</p>
                </Link>
                <Link to="/calculator">
                  <p className="link_route">{t(`Calculator`)}</p>
                </Link>
                <Link to="/news">
                  <p className="link_route">{t(`News`)}</p>
                </Link>
              </div>
            ) : (
              //Login user Route
              <div className="navbar">
                <Link to="/">
                  <p className="link_route">{t(`Main`)}</p>
                </Link>
                <Link to="/calculator">
                  <p className="link_route">{t(`Calculator`)}</p>
                </Link>
                <Link to="/my-panel">
                  <p className="link_route">{t(`My office`)}</p>
                </Link>
                <Link to="/news">
                  <p className="link_route">{t(`News`)}</p>
                </Link>
              </div>
            )}
          </>
        ) : (
          // Not Login user Route
          <div className="navbar">
            <Link to="/">
              <p className="link_route">{t(`Main`)}</p>
            </Link>
            <Link to="/news">
                  <p className="link_route">{t(`News`)}</p>
                </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
