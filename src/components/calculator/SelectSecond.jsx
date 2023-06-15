import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
import '../../style/calculator.scss'
import { useTranslation } from 'react-i18next';

const SelectSecond = ({item, title, selectedOption, setSelectedOption}) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        dispatch(fetchLanguage());
      }, [lang]);
  
    
      const selectItemFunc = (e) => {
        setSelectedOption(e);
        setIsOpen(false);
    }

    

    return (
        <div style={{width: '100%'}}>
        <h3>{t(`${title}`)}</h3>
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption?.imageColor && 
                    <img className='color_img' src={`https://server-ponto-print.herokuapp.com${selectedOption?.imageColor}`}/>}
                {(selectedOption?.nameUa && lang == "Ua" ? selectedOption.nameUa : selectedOption.nameUa ) || (lang == "Ua" ? item[0]?.nameUa : item[0]?.nameUa)}
            </div>
            {isOpen && (
                <div className="options">
                    {item.map((el) => (
                        <div className="option" key={el._id} onClick={() => selectItemFunc(el)}>
                            {el?.imageColor && 
                            <img className='color_img' src={`https://server-ponto-print.herokuapp.com${el.imageColor}`}/>}
                            {lang == "Ua" ? <>{el.nameUa}</> : <>{el.nameRu}</>}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default SelectSecond;