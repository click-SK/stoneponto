import React, { useState } from "react";
import "../style/mainPage.scss";
import Slide from "./Slide/Slide";
import Portfolio from "./Portfolio";
import { BsBackspace } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const [isOpenDesing, setIsOpenDesing] = useState(false);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [isOpenLamin, setIsOpenLamin] = useState(false);
  const [isOpenPlotter, setIsOpenPlotter] = useState(false);
  const [isOpenGates, setIsOpenGates] = useState(false);
  const [isOpenAdversting, setIsAdversting] = useState(false);

  const { t } = useTranslation();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const hendlerOpenDesint = () => {
    setIsOpenDesing(!isOpenDesing);
    setIsOpenPrint(false);
    setIsOpenLamin(false);
    setIsOpenPlotter(false);
    setIsOpenGates(false);
    setIsAdversting(false);
  };
  const hendlerOpenPrint = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(!isOpenPrint);
    setIsOpenLamin(false);
    setIsOpenPlotter(false);
    setIsOpenGates(false);
    setIsAdversting(false);
  };
  const hendlerOpenLamin = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(false);
    setIsOpenLamin(!isOpenLamin);
    setIsOpenPlotter(false);
    setIsOpenGates(false);
    setIsAdversting(false);
  };
  const hendlerOpenPlotter = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(false);
    setIsOpenLamin(false);
    setIsOpenPlotter(!isOpenPlotter);
    setIsOpenGates(false);
    setIsAdversting(false);
  };
  const hendlerOpenGates = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(false);
    setIsOpenLamin(false);
    setIsOpenPlotter(false);
    setIsOpenGates(!isOpenGates);
    setIsAdversting(false);
  };
  const hendlerOpenAdversting = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(false);
    setIsOpenLamin(false);
    setIsOpenPlotter(false);
    setIsOpenGates(false);
    setIsAdversting(!isOpenAdversting);
  };
  const hendlerCloseAll = () => {
    setIsOpenDesing(false);
    setIsOpenPrint(false);
    setIsOpenLamin(false);
    setIsOpenPlotter(false);
    setIsOpenGates(false);
    setIsAdversting(false);
  };

  return (
    <div className="main_wraper">
      <div className="body_wrap">
        <div className="banner_wrap">
          <img src="./img/Ресурс 8.svg" alt="" />
        </div>
        <div className="description_block">
          <h1>{t(`About`)}</h1>
          <p>{t(`We are Express-Print`)}</p>
        </div>
        <div className="services">
          <h2>{t(`Description of services`)}</h2>
          <ul className="services_list">
            <li className="services_item">
              <img
                className="img_services"
                src="./img/services/pic1.jpg"
                onClick={() => hendlerOpenDesint()}
                alt=""
              />
              <p className="services_name">ДИЗАЙН</p>
              {isOpenDesing && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>ДИЗАЙН</h3>
                  <div className="img_wraper">
                    <img
                      style={{ borderRadius: "8px" }}
                      src="./img/services/pic1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`Our printing house`)}</p>
                    <p>
                      {t(`The cost of design services`)}
                    </p>
                  </div>
                </div>
              )}
            </li>
            <li className="services_item">
              <img
                className="img_services"
                onClick={() => hendlerOpenPrint()}
                src="./img/services/pic2.jpg"
                alt=""
              />
              <p className="services_name">{t(`Large format printing`)}</p>
              {isOpenPrint && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>{t(`Large format printing`)}</h3>
                  <div className="img_wraper">
                    <img src="./img/services/pic2.jpg" alt="" />
                  </div>
                  <div className="modal_services_info modal_services_text_wrapper">
                    <p>{t(`Large format printing description`)}</p>
                    <h4>{t(`We print on such materials`)}:</h4>
                    <ul className="info_list">
                      <li>{t(`Info list banner laminated`)}</li>
                      <li>{t(`Info list cast banner`)}</li>
                      <li>{t(`Info list banner grid`)}</li>
                      <li>{t(`Info list Self-adhesive film`)}</li>
                      <li>{t(`Info list papear`)}</li>
                      <li>{t(`Info list other`)}</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="services_item">
              {" "}
              <img
                className="img_services"
                onClick={() => hendlerOpenLamin()}
                src="./img/services/pic3.jpg"
                alt=""
              />
              <p className="services_name">{t(`Lamination`)}</p>
              {isOpenLamin && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>{t(`Large format printing`)}</h3>
                  <div className="img_wraper">
                    <img src="./img/services/pic3.jpg" alt="" />
                  </div>
                  <div className="modal_services_text_wrapper">
                  <p>{t(`Lamination service`)}</p>
                  </div>
                </div>
              )}
            </li>
            <li className="services_item">
              {" "}
              <img
                className="img_services"
                onClick={() => hendlerOpenPlotter()}
                src="./img/services/pic4.jpg"
                alt=""
              />
              <p className="services_name">{t(`Plotter cutting`)}</p>
              {isOpenPlotter && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>{t(`Plotter cutting`)}</h3>
                  <div className="img_wraper">
                    <img src="./img/services/pic4.jpg" alt="" />
                  </div>
                  <div className="modal_services_text_wrapper">
                  <p>{t(`The Express-Print large-format printing`)} </p>
                  </div>
                </div>
              )}
            </li>
            <li className="services_item">
              {" "}
              <img
                className="img_services"
                onClick={() => hendlerOpenGates()}
                src="./img/services/pic6.jpg"
                alt=""
              />
              <p className="services_name">
                {t(`Welding of gates and stuffing of eyelets`)}
              </p>
              {isOpenGates && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>{t(`Welding of gates and stuffing of eyelets`)}</h3>
                  <div className="img_wraper">
                    <img src="./img/services/pic6..jpg" alt="" />
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>
                      {t(
                        `The Express-Print large-format printing house produces a full cycle of post-print processing`
                      )}
                    </p>
                    <p>{t(`For banners`)}</p>
                    <p>{t(`For self-adhesive film`)}</p>
                    <p>
                      {t(
                        `For paper, this is cutting into posters or lamination`
                      )}
                    </p>
                  </div>
                </div>
              )}
            </li>
            <li className="services_item">
              {" "}
              <img
                className="img_services"
                onClick={() => hendlerOpenAdversting()}
                src="./img/services/pic7.jpg"
                alt=""
              />
              <p className="services_name">
                {t(`Production of outdoor advertising`)}
              </p>
              {isOpenAdversting && (
                <div className="modal_services">
                  <div
                    className="close_modal_services"
                    onClick={() => hendlerCloseAll()}
                  >
                    {" "}
                    <BsBackspace className="back_img" /> Назад{" "}
                  </div>
                  <h3>{t(`Production of outdoor advertising`)}</h3>
                  <div className="img_wraper">
                    <img src="./img/services/pic7.jpg" alt="" />
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>
                      {t(`We make any kind of outdoor and indoor advertising`)}
                    </p>
                    <p>{t(`So our printing house`)}</p>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="faq">
          <h2>{t(`Questions and answers`)}</h2>
          <ul>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 1`)}</h3>
              <p>{t(`Answer 1`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 2`)}</h3>
              <p>{t(`Answer 2`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 3`)}</h3>
              <p>{t(`Answer 3`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask1.svg" alt="" />
              <h3>{t(`Questions 4`)}</h3>
              <p>{t(`Answer 4`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 5`)}</h3>
              <p>{t(`Answer 5`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 6`)}</h3>
              <p>{t(`Answer 6`)}</p>
            </li>
            <li>
              {" "}
              <img src="./img/faq/ask2.svg" alt="" />
              <h3>{t(`Questions 7`)}</h3>
              <p>{t(`Answer 7`)}</p>
            </li>
          </ul>
        </div>
        <Portfolio />
      </div>
    </div>
  );
};

export default MainPage;
