import React, { useState } from "react";
import EditCurrentUser from "./EditCurrentUser";
const CurrentUser = ({ user, setIsFetch }) => {
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  return (
    <>
      <div className="user_wrap_item_name">
        <p>{user.name}</p>
        <p>Баланс: {user.balance.toFixed(0)}</p>
        <div>
        <button
        onClick={() => setIsVisibleEdit(state => !state)}>Профіль</button>
        </div>
      </div>
      {isVisibleEdit &&   
      <EditCurrentUser 
      user={user}
      setIsVisibleEdit={setIsVisibleEdit}
      setIsFetch={setIsFetch}/>}
    </>
  );
};

export default CurrentUser;
