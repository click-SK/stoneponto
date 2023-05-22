import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to="/">Головна</Link>
      <Link to="/admin">Адмін панель</Link>
    </div>
  );
};

export default Header;
