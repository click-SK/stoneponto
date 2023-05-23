import React, { useState,useEffect } from 'react';
import '../../style/calculator.scss'
import { useTranslation } from 'react-i18next';

const SelectSecond = ({item, title, selectedOption, setSelectedOption}) => {
    const { t } = useTranslation();
    // selectedOption, setSelectedOption
    // const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    
      const selectItemFunc = (e) => {
        setSelectedOption(e);
        setIsOpen(false);
    }
    // console.log(selectedOption?.price);

    //  useEffect(() =>{
    //     setTotalSum(selectedOption?.price)
    //  },[selectedOption])

    

    return (
        <div style={{width: '100%'}}>
        <h3>{t(`${title}`)}</h3>
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption?.imageColor && 
                    <img className='color_img' src={`https://ponto-print.herokuapp.com${selectedOption?.imageColor}`}/>}
                {(selectedOption?.name && t(`${selectedOption?.name}`)) || t(`${item[0]?.name}`)}
            </div>
            {isOpen && (
                <div className="options">
                    {item.map((el,id) => (
                        <div className="option" key={id} onClick={() => selectItemFunc(el)}>
                            {el?.imageColor && 
                            <img className='color_img' src={`https://ponto-print.herokuapp.com${el.imageColor}`}/>}
                            {t(`${el.name}`)}
                        </div>
                    ))}
                </div>
            )}
        </div>
        </div>
    );
};

export default SelectSecond;