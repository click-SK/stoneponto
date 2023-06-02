import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import {AiFillEdit} from 'react-icons/ai';
import {RiFileEditFill} from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
const EditCalculatorCurrentItem = ({item, mainId, editPath, setIsFetch, goodsIndex, currentItemIndex}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [newPrice, setNewPrice] = useState(0);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        dispatch(fetchLanguage());
      }, [lang]);

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
            currentItemIndex,
            mainId
          })
        })
          .then((res) => res.json())
          setTimeout(() => {
            // window.location.reload();
            setIsFetch(state => !state)
          },1000)
      }

      const handleEditButton = () => {
        setIsEdit(state => !state);
        setNewPrice(item.price);
      };

    return (
        <div className='goods_edit_item'>
        <div className='goods_edit_item_title'>
          <p>{lang == "Ua" ? item.nameUa : item.nameRu}</p>
          <p>{item.price} $</p>
          {isEdit && 
          <div className='goods_edit_item_input'>
              <input value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
              <button onClick={handleEditButtonSave}>Save</button>
          </div>
          }
        </div>
        <RiFileEditFill
        className={`goods_edit_icon ${isEdit? 'goods_edit_icon_active' : ''}`}
        onClick={handleEditButton}/>

        </div>
    );
};

export default EditCalculatorCurrentItem;