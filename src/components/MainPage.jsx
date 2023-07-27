import React, { useState } from "react";
import "../style/mainPage.scss";
import { useSelector } from "react-redux";
import Faq from "./Faq";
import AboutUs from "./AboutUs";
import Services from "./Services";

const MainPage = () => {
  const lang = useSelector((state) => state.lang.language);

  return (
    <div className="main_wraper">
      <div className="body_wrap">
        <div className="banner_wrap">
          {lang == "Ua" ? (
            <img src="./img/Ресурс 8UA.svg" alt="" />
          ) : (
            <img src="./img/Ресурс 8RU.png" alt="" />
          )}
        </div>
        <Services/>
        <AboutUs/>
        <Faq/>
      </div>
    </div>
  );
};

export default MainPage;