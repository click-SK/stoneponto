import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";

const EditUserPassword = ({ editPath, title, userId, setIsFetch }) => {
  const [newPassword, setNewPassword] = useState('');
  const [isEditValue, setIsEditValue] = useState(false);


  const handleEditButtonSave = async () => {
    setIsEditValue((isEdit) => !isEdit);

    await fetch(editPath, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        newPassword
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      // window.location.reload();
      setIsFetch((state) => !state);
    //   setNewValue(0);
    }, 1000);
  };

  const handleEditButton = () => {
    setIsEditValue((state) => !state);
  };

  return (
      <div className='details_wrap'>
        <div  className='details_title'>
          <p>
            {title}
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
            <div>
            <p>Новий пароль</p>
            <input 
            placeholder="Новий пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <button onClick={handleEditButtonSave}>Змінити</button>
          </div>
        )}
      </div>
  );
};

export default EditUserPassword;
