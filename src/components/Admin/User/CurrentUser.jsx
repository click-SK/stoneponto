import React, { useState, useEffect } from "react";
import EditCurrentUser from "./EditCurrentUser";
import { useTranslation } from 'react-i18next';

const CurrentUser = ({ user, setIsFetch }) => {
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);
  const [debt, setDebt] = useState(0)
  const { t } = useTranslation();
  console.log('user',user);
  useEffect(() => {
    const sum = user?.orders.reduce((accumulator, currentObject) => {
      if (!currentObject.status.paid && currentObject.status.currentStatus != 'delete') {
        return accumulator + currentObject.sum;
      }
      return accumulator;
    }, 0);
    setDebt(sum)
  }, [user]);
  return (
    <>
      <div className="user_wrap_item_name">
        <p>{user.name}</p>
        <p style={{color:'green'}}>{t(`Balance`)}: {user.balance.toFixed(0)}</p>
        <p style={{color:'red'}}>{t(`Debt`)}: {debt.toFixed(0)}</p>
        <div>
        <button
        onClick={() => setIsVisibleEdit(state => !state)}>{t(`Profile`)}</button>
        </div>
      </div>
      {isVisibleEdit &&   
      <EditCurrentUser 
      user={user}
      setIsVisibleEdit={setIsVisibleEdit}
      setIsFetch={setIsFetch}
      debt={debt}/>}
    </>
  );
};

export default CurrentUser;
