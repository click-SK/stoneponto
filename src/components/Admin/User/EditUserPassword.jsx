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
    <div style={{ padding: "20px 0px" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>
            {title}
          </p>
          {isEditValue ? (
            <AiFillCloseCircle
              onClick={() => setIsEditValue((state) => !state)}
              style={{ width: "auto", height: "30px" }}
            />
          ) : (
            <AiFillEdit
              onClick={handleEditButton}
              style={{ width: "auto", height: "30px" }}
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
    </div>
  );
};

export default EditUserPassword;
