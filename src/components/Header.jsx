import React from "react";
import { Link } from "react-router-dom";
import '../style/header.scss'
const Header = () => {
  return (
    <div className="header_wraper">
      <div className="contact_login_block">
        <div className="wraper">
          <span className="wrap_item text">+380 50 976 7417</span>
          <span className="wrap_item text">+380 96 626 7481</span>
          <span className="wrap_item text">ponto-print@ukr.net</span>
          <span className="wrap_item"><button className="button_login">Log In</button></span>
          
        </div>
      </div>
      <div className="nav_logo_wraper">
        <div className="logo">
            <img src="./img/logo.png" alt="" />
        </div>
        <div className="navbar">
        <Link to="/"><p className="link_route">Головна</p></Link>
        <Link to="/admin"> <p className="link_route" >Адмін панель</p></Link>
        <Link to="/calculator"><p className="link_route" >Калькулятор</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
