import React, {useState, useEffect} from "react";
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
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isChaked, setIsChaked] = useState(false);
  const [i, setI] = useState(0);


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

   const hendlerOpenMenu = () =>{
    setIsOpenNav(!isOpenNav);
    setIsChaked(!isChaked)
   }

   const hendlerMenuClose = () =>{
    setIsOpenNav(!isOpenNav);
    setIsChaked(!isChaked);
   }


  useEffect(() => {
    if (isOpenNav) {
      setIsClose(false);
    } else {
      const timeoutId = setTimeout(() => {
        setIsClose(true);
      }, 800);
  
      return () => clearTimeout(timeoutId); // Очистка таймера при зміні isOpenNav
    }
  }, [isOpenNav]);

  useEffect(() => {
    if (isOpenNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpenNav]);


  return (
    <div className="header_wraper">
      <div className="contact_login_block">
        <div className="decor_1"></div>
        <div className="decor_2"></div>
        <div className="wraper">
          <span className="wrap_item text phone_none">+380 50 976 7417</span>
          <span className="wrap_item text phone_none">+380 96 626 7481</span>
          <span className="wrap_item text mail_none">ponto-print@ukr.net</span>
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
          <span className="wrap_item text social_icon_none">
            {/* <FaTelegramPlane
            className="icon_social"/> */}
            <a href="viber://chat?number=380966267481">
              <FaViber
              className="icon_social"/>
          
            </a> 
            <a href="https://api.whatsapp.com/send?phone=380966267481">
              <FaWhatsapp
              className="icon_social"/>
          
            </a> 
          </span>
        </div>
      </div>
      {/* burger icon */}
      <div  className="burger_icon">
          <label htmlFor="check">
        <input
        onChange={() => hendlerOpenMenu() }
        type="checkbox" id="check"
        checked={isChaked} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      </div>
      {/* burger icon */}

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
      {/* open burger */}
            <div id={`${isClose ? 'closed_anim' : ''}`} className={`nav_logo_wraper_burger ${isOpenNav? 'active_menu' : `not_active_menu`} `}>
            <div className="logo_burger">
              <img src="./img/logo.png" alt="" />
            </div>
            {user !== null && "isAdmin" in user ? (
              <>
                {user?.isAdmin ? (
                  // Admin Route
                  <div className="navbar_burger">
                    <Link to="/">
                      <p className="link_route"
                      onClick={() => hendlerMenuClose() }
                      >{t(`Main`)}</p>
                    </Link>
                    <Link to="/admin">
                      <p className="link_route"
                      onClick={() => hendlerMenuClose() }
                      >{t(`Admin panel`)}</p>
                    </Link>
                    <Link to="/calculator">
                      <p className="link_route"
                      onClick={() => hendlerMenuClose() }
                      >{t(`Calculator`)}</p>
                    </Link>
                    <Link to="/news">
                      <p className="link_route"
                      onClick={() => hendlerMenuClose() }
                      >{t(`News`)}</p>
                    </Link>
                  </div>
                ) : (
                  //Login user Route
                  <div className="navbar_burger">
                    <Link to="/">
                      <p 
                      onClick={() => hendlerMenuClose() }
                      className="link_route">{t(`Main`)}</p>
                    </Link>
                    <Link to="/calculator">
                      <p
                      onClick={() => hendlerMenuClose() }
                       className="link_route">{t(`Calculator`)}</p>
                    </Link>
                    <Link to="/my-panel">
                      <p
                      onClick={() => hendlerMenuClose() }
                       className="link_route">{t(`My office`)}</p>
                    </Link>
                    <Link to="/news">
                      <p
                      onClick={() => hendlerMenuClose() }
                       className="link_route">{t(`News`)}</p>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              // Not Login user Route
              <div className="navbar_burger">
                <Link to="/">
                  <p
                  onClick={() => hendlerMenuClose() }
                   className="link_route">{t(`Main`)}</p>
                </Link>
                <Link to="/news">
                      <p 
                      onClick={() => hendlerMenuClose() }
                      className="link_route">{t(`News`)}</p>
                    </Link>
              </div>
            )}
          </div>
    </div>
  );
};

export default Header;
