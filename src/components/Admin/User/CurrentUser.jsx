import React, { useState } from "react";
import EditCurrentUser from "./EditCurrentUser";
const CurrentUser = ({ user, setIsFetch }) => {
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "10px",
        }}
      >
        <p style={{width:'33%'}}>Пошта: {user.email}</p>
        <p style={{width:'33%'}}>Баланс: {user.balance}</p>
        <div style={{width:'33%'}}>
        <button  
        onClick={() => setIsVisibleEdit(state => !state)}>More</button>
        </div>
      </div>
      {isVisibleEdit && 
      <EditCurrentUser 
      user={user}
      setIsFetch={setIsFetch}/>}
    </div>
  );
};

export default CurrentUser;
