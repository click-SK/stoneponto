import React, { useState } from 'react';


const Select = ({goods,setcurrentItem}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);



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
        {selectedOption?.name || goods[0]?.name}
      </div>
      {isOpen && (
        <div className="options">
          {goods && goods.map((item,idx) => (
                    <div key={idx}>
                        <div>
                          {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                          ?
                          <h4 style={{fontWeight:700}}>{item.name}</h4>
                          :
                          <p onClick={() => selectItemFunc(item)}>{item.name}</p>
                          }
                        </div>
                        {item?.goods.length != 0 && item?.goods.map((el,id) => (
                            <div className="option" key={id} onClick={() => selectItemFunc(el)}>
                                {el.name}
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