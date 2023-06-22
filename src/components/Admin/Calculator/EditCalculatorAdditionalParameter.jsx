import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { AiOutlineDown } from "react-icons/ai";
import {RiFileEditFill} from 'react-icons/ri';
const EditCalculatorAdditionalParameter = ({ title, data, editPath, setIsFetch, mainId, goodsIndex, openCloseFunc, isOpen }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  
  const { t } = useTranslation();

  const handleEditButtonSave = () => {
    setIsEdit((isEdit) => !isEdit);

    fetch(editPath, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: newPrice,
        goodsIndex,
        mainId
      })
    })
      .then((res) => res.json())
      setTimeout(() => {
        setIsFetch(state => !state)
      },1000)
  };

  const handleEditButton = () => {
    setIsEdit((state) => !state);
    setNewPrice(data);
  };

  return (
    
      <div className="goods_wrap">
        <div
          className={`goods_title ${isOpen ? 'goods_title_active' : ''}`}
          onClick={openCloseFunc}
        >
          <p>{t(`${title}`)}</p>
          <AiOutlineDown />
        </div>
        {isOpen && (
          <div className="goods_edit_wrap margin_none" >
            <div className='goods_edit_item flex-column'>

            <div className='goods_edit_item_title padding_none margin_none'>
            <p>{t(`${title}`)}</p>
              <p>{data} $</p>
            
              {isEdit && (
              <div className='goods_edit_item_input'>
                <input
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
                <button onClick={handleEditButtonSave}>{t(`Save`)}</button>
              </div>
            )}
            <RiFileEditFill 
            className={`goods_edit_icon ${isEdit? 'goods_edit_icon_active' : ''}`}
            onClick={handleEditButton} />

            </div>
          </div>
            </div>
        )}
      </div>
    
  );
};

export default EditCalculatorAdditionalParameter;
