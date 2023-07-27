import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
import "../../style/calculator.scss";
import { useTranslation } from "react-i18next";

const SelectedColor = ({ item, title, selectedOption, setSelectedOption }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.language);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const selectItemFunc = (e) => {
    setSelectedOption(e);
    setIsOpen(false);
  };

  return (
    <div style={{ width: "100%" }} id="select-second" ref={selectRef}>
      <h3>{t(`${title}`)}</h3>
      <div className="custom-select">
        <div
          className="selected-option option_color"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div style={{ display: "flex", paddingRight: "5px" }}>
            {selectedOption?.imageColor && (
              <img
                className="color_img"
                src={`http://91.206.30.132:4444${selectedOption?.imageColor}`}
              />
            )}
          </div>
          <p style={{ paddingLeft: "5px" }}>
            {(selectedOption?.nameUa && lang === "Ua"
              ? selectedOption.nameUa
              : selectedOption.nameUa) ||
              (lang === "Ua" ? item[0]?.nameUa : item[0]?.nameUa)}
          </p>
        </div>
        {isOpen && (
          <div className="options">
            {item.map((el) => (
              <div
                className="option option_color"
                key={el._id}
                onClick={() => selectItemFunc(el)}
              >
                <div style={{ display: "flex", paddingRight: "5px" }}>
                  {el?.imageColor && (
                    <img
                      className="color_img"
                      src={`http://91.206.30.132:4444${el.imageColor}`}
                    />
                  )}
                </div>
                <p style={{ paddingLeft: "5px" }}>
                  {lang === "Ua" ? <>{el.nameUa}</> : <>{el.nameRu}</>}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedColor;
