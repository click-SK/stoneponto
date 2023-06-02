import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
const Select = ({ goods, setcurrentItem }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
    dispatch(fetchLanguage());
  }, [lang]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const selectItemFunc = (e) => {
    setSelectedOption(e);
    setIsOpen(false);
    setcurrentItem(e);
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {(selectedOption?.nameUa && selectedOption?.nameUa) || goods[0]?.nameUa}
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
