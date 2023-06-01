import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import {RiFileEditFill} from 'react-icons/ri';

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
          {isEditValue && (
          <div className="details_input">
            <input 
            placeholder="Новий пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} />
            <button onClick={handleEditButtonSave}>Зберегти зміни</button>
          </div>
        )}
          {isEditValue ? (
            <AiFillCloseCircle
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

export default EditUserPassword;
