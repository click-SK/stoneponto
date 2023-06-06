import React, { useState } from "react";
import EditCurrentUser from "./EditCurrentUser";
import { useTranslation } from 'react-i18next';
const CurrentUser = ({ user, setIsFetch }) => {
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="user_wrap_item_name">
        <p>{user.name}</p>
        <p>{t(`Balance`)}: {user.balance.toFixed(0)}</p>
        <div>
        <button
        onClick={() => setIsVisibleEdit(state => !state)}>{t(`Profile`)}</button>
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
