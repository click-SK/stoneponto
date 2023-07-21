import React, { useState } from "react";
import { BsBackspace } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import ServicesPhoto from "./ServicesPhoto";

const Services = () => {
  const [isOpenDesing, setIsOpenDesing] = useState(false);
  const [isOpenPrint, setIsOpenPrint] = useState(false);
  const [isOpenLamin, setIsOpenLamin] = useState(false);
  const [isOpenPlotter, setIsOpenPlotter] = useState(false);
  const [isOpenGates, setIsOpenGates] = useState(false);
  const [isOpenAdversting, setIsAdversting] = useState(false);
  const [designPhotoArray] = useState([
    {
      imgUrl: './img/services/дизайн/1.jpg'
    },
    {
      imgUrl: './img/services/дизайн/2.jpg'
    },
    {
      imgUrl: './img/services/дизайн/3.jpg'
    },
    {
      imgUrl: './img/services/дизайн/4.jpg'
    },
    {
      imgUrl: './img/services/дизайн/5.jpg'
    },
    {
      imgUrl: './img/services/дизайн/6.jpg'
    },
    {
      imgUrl: './img/services/дизайн/7.jpg'
    },
    {
      imgUrl: './img/services/дизайн/8.jpg'
    },
    {
      imgUrl: './img/services/дизайн/9.jpg'
    },
    {
      imgUrl: './img/services/дизайн/10.jpg'
    },
    {
      imgUrl: './img/services/дизайн/11.jpg'
    },
    {
      imgUrl: './img/services/дизайн/12.jpg'
    },
    {
      imgUrl: './img/services/дизайн/13.jpg'
    }
  ]);
  const [outdorAdvertisingPhotoArray] = useState([
    {
      imgUrl: './img/services/изготовление наружки/1.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/2.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/3.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/4.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/5.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/6.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/7.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/8.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/9.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/10.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/11.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/12.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/13.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/14.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/15.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/16.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/17.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/18.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/19.jpg'
    },
    {
      imgUrl: './img/services/изготовление наружки/20.jpg'
    },
  ]);
  const [solderingAndStuffingPhotoArray] = useState([
    {
      imgUrl: './img/services/пропайка и набивка/1.jpg'
    },
    {
      imgUrl: './img/services/пропайка и набивка/2.jpg'
    },
    {
      imgUrl: './img/services/пропайка и набивка/3.jpg'
    },
    {
      imgUrl: './img/services/пропайка и набивка/4.jpg'
    },
    {
      imgUrl: './img/services/пропайка и набивка/5.jpg'
    },
    {
      imgUrl: './img/services/пропайка и набивка/6.jpg'
    }
  ]);
  const [largeFormatPrintingPhotoArray] = useState([
    {
      imgUrl: './img/services/широкоформатний друк/1.jpg'
    },
    {
      imgUrl: './img/services/широкоформатний друк/2.jpg'
    },
    {
      imgUrl: './img/services/широкоформатний друк/3.jpg'
    },
    {
      imgUrl: './img/services/широкоформатний друк/4.jpg'
    },
    {
      imgUrl: './img/services/широкоформатний друк/5.jpg'
    },
    {
      imgUrl: './img/services/широкоформатний друк/6.jpg'
    }
  ]);
  const [polterCuttingPhotoArray] = useState([
    {
      imgUrl: './img/services/Плоттерная порезка/1.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/2.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/3.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/4.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/5.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/6.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/7.jpg'
    },
    {
      imgUrl: './img/services/Плоттерная порезка/8.jpg'
    }
  ]);
    const { t } = useTranslation();
    const hendlerOpenDesint = () => {
      setIsOpenDesing(true);
      setIsOpenPrint(false);
      setIsOpenLamin(false);
      setIsOpenPlotter(false);
      setIsOpenGates(false);
      setIsAdversting(false);
    };
    const hendlerOpenPrint = () => {
      setIsOpenDesing(false);
      setIsOpenPrint(true);
      setIsOpenLamin(false);
      setIsOpenPlotter(false);
      setIsOpenGates(false);
      setIsAdversting(false);
    };
    const hendlerOpenLamin = () => {
      setIsOpenDesing(false);
      setIsOpenPrint(false);
      setIsOpenLamin(true);
      setIsOpenPlotter(false);
      setIsOpenGates(false);
      setIsAdversting(false);
    };
    const hendlerOpenPlotter = () => {
      setIsOpenDesing(false);
      setIsOpenPrint(false);
      setIsOpenLamin(false);
      setIsOpenPlotter(true);
      setIsOpenGates(false);
      setIsAdversting(false);
    };
    const hendlerOpenGates = () => {
      setIsOpenDesing(false);
      setIsOpenPrint(false);
      setIsOpenLamin(false);
      setIsOpenPlotter(false);
      setIsOpenGates(true);
      setIsAdversting(false);
    };
    const hendlerOpenAdversting = () => {
      setIsOpenDesing(false);
      setIsOpenPrint(false);
      setIsOpenLamin(false);
      setIsOpenPlotter(false);
      setIsOpenGates(false);
      setIsAdversting(true);
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
                    <BsBackspace className="back_img" /> {t(`The main`)}{" "}
                  </div>
                  <h3>ДИЗАЙН</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`description of services design paragraph 1`)}</p>
                    <p>{t(`description of services design paragraph 2`)}</p>
                    <p>{t(`description of services design paragraph 3`)}</p>
                  </div>
                  <div className="modal_services_images_wrap">
                    {designPhotoArray.map((img) => (
                      <ServicesPhoto img={img} key={img.imgUrl} allPhotos={designPhotoArray}/>
                    ))}
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
                    <BsBackspace className="back_img" /> {t(`The main`)}{" "}
                  </div>
                  <h3>{t(`Large format printing`)}</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_info modal_services_text_wrapper">
                    <p>{t(`Large format printing paragraph 1`)}</p>
                    <h4>{t(`Large format printing paragraph 2`)}:</h4>
                    <ul className="info_list">
                      <li>{t(`Large format printing paragraph 3`)}</li>
                      <li>{t(`Large format printing paragraph 4`)}</li>
                      <li>{t(`Large format printing paragraph 5`)}</li>
                      <li>{t(`Large format printing paragraph 6`)}</li>
                      <li>{t(`Large format printing paragraph 7`)}</li>
                      <li>{t(`Large format printing paragraph 8`)}</li>
                      <li>{t(`Large format printing paragraph 9`)}</li>
                      <li>{t(`Large format printing paragraph 10`)}</li>
                    </ul>
                  </div>
                  <div className="modal_services_images_wrap">
                    {largeFormatPrintingPhotoArray.map((img) => (
                    <ServicesPhoto img={img} key={img.imgUrl} allPhotos={largeFormatPrintingPhotoArray}/>
                    ))}
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
                    <BsBackspace className="back_img" /> {t(`The main`)}{" "}
                  </div>
                  <h3>{t(`Large format printing`)}</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`Lamination paragraph 1`)}</p>
                    <p>{t(`Lamination paragraph 2`)}</p>
                    <p>{t(`Lamination paragraph 3`)}</p>
                    <p>{t(`Lamination paragraph 4`)}</p>
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
                    <BsBackspace className="back_img" /> {t(`The main`)}{" "}
                  </div>
                  <h3>{t(`Plotter cutting`)}</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`Plotter cutting paragraph 1`)} </p>
                    <p>{t(`Plotter cutting paragraph 2`)} </p>
                    <p>{t(`Plotter cutting paragraph 3`)} </p>
                    <p>{t(`Plotter cutting paragraph 4`)} </p>
                  </div>
                  <div className="modal_services_images_wrap">
                    {polterCuttingPhotoArray.map((img) => (
                    <ServicesPhoto img={img} key={img.imgUrl} allPhotos={polterCuttingPhotoArray}/>
                    ))}
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
                    <BsBackspace className="back_img" />{t(`The main`)}{" "}
                  </div>
                  <h3>{t(`Welding of gates and stuffing of eyelets`)}</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`welding turns and stuffing eyelets paragraph 1`)}</p>
                    <p>{t(`welding turns and stuffing eyelets paragraph 2`)}</p>
                    <p>{t(`welding turns and stuffing eyelets paragraph 3`)}</p>
                    <p>{t(`welding turns and stuffing eyelets paragraph 4`)}</p>
                  </div>
                  <div className="modal_services_images_wrap">
                    {solderingAndStuffingPhotoArray.map((img) => (
                    <ServicesPhoto img={img} key={img.imgUrl} allPhotos={solderingAndStuffingPhotoArray}/> 
                    ))}
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
                    <BsBackspace className="back_img" />{t(`The main`)}{" "}
                  </div>
                  <h3>{t(`Production of outdoor advertising`)}</h3>
                  <div className="nav_services_wraper">
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenDesint()}
                    >
                      ДИЗАЙН
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPrint()}
                    >
                      {t(`Large format printing`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenLamin()}
                    >
                      {t(`Lamination`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenPlotter()}
                    >
                      {t(`Plotter cutting`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenGates()}
                    >
                      {t(`Welding of gates and stuffing of eyelets`)}
                    </button>
                    <button
                      className="nav_services_button"
                      onClick={() => hendlerOpenAdversting()}
                    >
                      {t(`Production of outdoor advertising`)}
                    </button>
                  </div>
                  <div className="modal_services_text_wrapper">
                    <p>{t(`Production of outdoor advertising paragraph 1`)}</p>
                    <p>{t(`Production of outdoor advertising paragraph 2`)}</p>
                    <p>{t(`Production of outdoor advertising paragraph 3`)}</p>
                    <p>{t(`Production of outdoor advertising paragraph 4`)}</p>
                  </div>
                  <div className="modal_services_images_wrap">
                    {outdorAdvertisingPhotoArray.map((img) => (
                    <ServicesPhoto img={img} key={img.imgUrl} allPhotos={outdorAdvertisingPhotoArray}/>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
    );
};

export default Services;