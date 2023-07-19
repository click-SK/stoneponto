import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLanguage } from '../../store/language';
import '../../style/calculator.scss';
import { useTranslation } from 'react-i18next';

const SelectSecond = ({ item, title, selectedOption, setSelectedOption }) => {
  const { t } = useTranslation();
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
  };

  return (
    <div style={{ width: '100%' }} id="select-second" ref={selectRef}>
      <h3>{t(`${title}`)}</h3>
      <div className="custom-select">
        <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
          {selectedOption?.imageColor && <img className="color_img" src={`http://localhost:4444${selectedOption?.imageColor}`} />}
          {(selectedOption?.nameUa && lang === 'Ua' ? selectedOption.nameUa : selectedOption.nameRu) || (lang === 'Ua' ? item[0]?.nameUa : item[0]?.nameUa)}
        </div>
        {isOpen && (
          <div className="options">
            {item.map((el) => (
              <div className="option" key={el._id} onClick={() => selectItemFunc(el)}>
                {el?.imageColor && <img className="color_img" src={`http://localhost:4444${el.imageColor}`} />}
                {lang === 'Ua' ? <>{el.nameUa}</> : <>{el.nameRu}</>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectSecond;