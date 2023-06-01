import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

const EditBalance = ({ data, editPath, title, userId, setIsFetch }) => {
  const [editValue, setEditValue] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [isEditValue, setIsEditValue] = useState(false);
  // const [action, setAction] = useState('');
  // const [historyValue, sethistoryValue] = useState('');

  console.log('editValue',editValue);
  console.log('newValue',newValue);
  console.log('editValue',editValue);

  const handleEditButtonSave = async () => {
    setIsEditValue((isEdit) => !isEdit);

    let action = '';
    let historyValue = ''
    console.log('editValue',editValue);
    console.log('data',data);

    if(editValue > data) {
      action = 'Депозит'
      historyValue = `++${newValue}`
    } else {
      action = 'Виведення'
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
      // window.location.reload();
      setIsFetch((state) => !state);
      setNewValue(0);
    }, 1000);
  };

  const handleEditButton = () => {
    setIsEditValue((state) => !state);
    setEditValue(data);
  };

  return (
      <div className='details_wrap'>
        <div className='details_title'>
          <p>
            {title}: {data}
          </p>
          {isEditValue ? (
            <AiFillCloseCircle
              onClick={() => setIsEditValue((state) => !state)}
              
            />
          ) : (
            <AiFillEdit
              onClick={handleEditButton}
              
            />
          )}
        </div>
        {isEditValue && (
          <div>
            <p>Баланс користувача</p>
            <input
              value={editValue}
              onChange={(e) => setIsEditValue(e.target.value)}
              disabled
            />
            <p>Введіть сумму</p>
            <input
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <p>Виберіть дію:</p>
            <div >
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
            <button onClick={handleEditButtonSave}>Зберегти зміни</button>
          </div>
        )}
      </div>
  );
};

export default EditBalance;
