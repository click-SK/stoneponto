import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import {RiFileEditFill} from 'react-icons/ri';

const EditBalance = ({ data, editPath, title, userId, setIsFetch, debt }) => {
  const [editValue, setEditValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [isEditValue, setIsEditValue] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setEditValue(data);
  },[data])

  const handleEditButtonSave = async () => {
    setIsEditValue((isEdit) => !isEdit);

    let action = '';
    let historyValue = ''

    if(editValue > data) {
      action = 'Депозит'
      historyValue = `+${newValue}`
    } else {
      action = 'Оплата замовлення'
      historyValue = `-${newValue}`
    }

    await fetch(editPath, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        value: editValue,
        action,
        historyValue
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setIsFetch((state) => !state);
      setNewValue(0);
    }, 1000);
  };

  const handleEditButton = () => {
    setIsFetch((state) => !state);
    setIsEditValue((state) => !state);
  };
  console.log('data',data);
  return (
      <div className='details_wrap'>
        <div className='details_title'>
          <p>
          {t(`${title}`)}: {data}
          </p>
          <p>{t('Debt')}: {debt.toFixed(0)}</p>
          {isEditValue && (
          <div className="details_input_balance">
            <p>{t(`User balance`)}</p>
            <input
              value={editValue}
              onChange={(e) => setIsEditValue(e.target.value)}
              disabled
            />
            <p>{t(`Enter the amount`)}</p>
            <input
              
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <p>{t(`Select an action`)}:</p>
            <div className='balance_button' >
              <button
              
                onClick={() =>
                  setEditValue((state) => Number(state) + Number(newValue))
                }
              >
                +
              </button>
              <button
              
                onClick={() =>
                  setEditValue((state) => Number(state) - Number(newValue))
                }
              >
                -
              </button>
            </div>
            <button onClick={handleEditButtonSave}>{t(`Save changes`)}</button>
          </div>
        )}
          {isEditValue ? (
            <AiFillCloseCircle
              style={{zIndex: '1001'}}
              onClick={() => setIsEditValue((state) => !state)}
              
            />
          ) : (
            <RiFileEditFill
              onClick={handleEditButton}
              
            />
          )}
        </div>
        
      </div>
  );
};

export default EditBalance;
