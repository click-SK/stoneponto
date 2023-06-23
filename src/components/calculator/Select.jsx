import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
const Select = ({ goods, setcurrentItem }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);
  const selectRef = useRef(null);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
    setcurrentItem(e);
  };

  return (
    <div className="custom-select" id="select-first" ref={selectRef}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {(selectedOption?.nameUa && (lang == "Ua" ? selectedOption?.nameUa : selectedOption?.nameRu)) || (lang == "Ua" ? goods[0]?.nameUa : goods[0]?.nameRu)}
      </div>
      {isOpen && (
        <div className="options">
          {goods &&
            goods.map((item, idx) => (
              <div key={idx}>
                <div>
                  {item.nameUa == "Банери" ||
                  item.nameUa == "Плівка" ||
                  item.nameUa == "Папір" ? (
                    <h4 style={{ fontWeight: 700 }}>
                      {lang == "Ua" ? <>{item.nameUa}</> : <>{item.nameRu}</>}
                    </h4>
                  ) : (
                    <p onClick={() => selectItemFunc(item)}>
                      {lang == "Ua" ? <>{item.nameUa}</> : <>{item.nameRu}</>}
                    </p>
                  )}
                </div>
                {item?.goods.length != 0 &&
                  item?.goods.map((el) => (
                    <div
                      className="option"
                      key={el._id}
                      onClick={() => selectItemFunc(el)}
                    >
                      {el.nameUa && lang == "Ua" ? (
                        <>{el.nameUa}</>
                      ) : (
                        <>{el.nameRu}</>
                      )}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Select;
