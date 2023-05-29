import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Select = ({goods,setcurrentItem}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  

  const selectItemFunc = (e) => {
    setSelectedOption(e);
    setIsOpen(false);
    setcurrentItem(e)
  }

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {(selectedOption?.name && t(`${selectedOption?.name}`)) || t(`${goods[0]?.name}`)}
      </div>
      {isOpen && (
        <div className="options">
          {goods && goods.map((item,idx) => (
                    <div key={idx}>
                        <div>
                          {item.name == 'Banners' || item.name == 'Film' || item.name == 'Paper' 
                          ?
                          <h4 style={{fontWeight:700}}>{t(`${item.name}`)}</h4>
                          :
                          <p onClick={() => selectItemFunc(item)}>{t(`${item.name}`)}</p>
                          }
                        </div>
                        {item?.goods.length != 0 && item?.goods.map((el,id) => (
                            <div className="option" key={id} onClick={() => selectItemFunc(el)}>
                                {el.name && t(`${el.name}`)}
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