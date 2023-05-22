import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Головна</Link>
      <Link to="/admin">Адмін панель</Link>
      <Link to="/calculator">Калькулятор</Link>
    </div>
  );
};

export default Header;
