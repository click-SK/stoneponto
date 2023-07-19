import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { currentCurrency } from "../../store/currency";
import { fetchLanguage } from "../../store/language";
import "../../style/calculator.scss";
import "../../style/modal.scss";

const ModalPrice = ({ isOpen, setIsOpen, goodsList }) => {
  const dispatch = useDispatch();
  const { currency } = useSelector(currentCurrency);

  const { t } = useTranslation();

  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <title>
          <p>{t(`Prices`)}</p>
          <p>
            {t(`The course is on the website`)}: {currency?.currency} грн
          </p>
          <button onClick={() => setIsOpen(!isOpen)}>{t(`Close`)}</button>
        </title>
        <div className="table">
          <div className="table_head">
            <h2 className="title_name">{t(`Material`)}</h2>
            <h2 className="title_price">720dpi</h2>
            <h2 className="title_price">1080dpi</h2>
            <h2 className="title_price">1440dpi</h2>
          </div>
          <div className="table_body modal_table">
            {goodsList &&
              goodsList.map((item, idx) => (
                <div className="table_item_row" key={idx}>
                  <div className="colum_item colum_item_name">
                    {item.nameUa == "Банери" ||
                    item.nameUa == "Плівка" ||
                    item.nameUa == "Папір" ? (
                      <h4 style={{ fontWeight: 700 }}>
                        {lang == "Ua" ? <>{item.nameUa}</> : <>{item.nameRu}</>}
                      </h4>
                    ) : (
                      <p>
                        {lang == "Ua" ? (
                          <>
                            {item.nameUa == "Виберіть матеріал"
                              ? ""
                              : item.nameUa}
                          </>
                        ) : (
                          <>
                            {item.nameRu == "Выберите материал"
                              ? ""
                              : item.nameRu}
                          </>
                        )}
                      </p>
                    )}

                    {item?.goods.length != 0 &&
                      item?.goods.map((el, id) => (
                        <div className="value_item" key={id}>
                          <p>
                            {" "}
                            {el.nameUa !==
                              "Кольорова плівка серії Oracal 641" &&
                            lang == "Ua" ? (
                              <>{el.nameUa}</>
                            ) : (
                              <>{el.nameRu}</>
                            )}
                          </p>
                          <div className="price_wrap">
                            {el.quality.map(
                              (qa, idx) =>
                                qa.nameUa === "720dpi" &&
                                qa.price && (
                                  <p
                                    key={idx}
                                    className="value_item price_value"
                                  >
                                    {(qa.price * currency?.currency).toFixed(0)}{" "}
                                    грн
                                  </p>
                                )
                            )}
                            {el.quality.map(
                              (qa, idx) =>
                                qa.nameUa === "1080dpi" &&
                                qa.price && (
                                  <p
                                    key={idx}
                                    className="value_item price_value"
                                  >
                                    {(qa.price * currency?.currency).toFixed(0)}{" "}
                                    грн
                                  </p>
                                )
                            )}
                            {el.quality.map(
                              (qa, idx) =>
                                qa.nameUa === "1440dpi" && (
                                  <p
                                    key={idx}
                                    className="value_item price_value"
                                  >
                                    {(qa.price * currency?.currency).toFixed(0)}{" "}
                                    грн
                                  </p>
                                )
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;