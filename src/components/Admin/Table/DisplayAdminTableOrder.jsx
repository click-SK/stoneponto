import React, { useState, useEffect } from "react";
import AdminTableText from './AdminTableText'
import { useTranslation } from 'react-i18next';
const DisplayAdminTableOrder = ({ order, setIsFetch }) => {
  const { t } = useTranslation();
  const handleDownload = () => {
    fetch("https://ponto-print.herokuapp.com/update-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: "download",
        name: 'В роботі',
        tableId: order._id,
        paid: false,
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setIsFetch((state) => !state);
    }, 1000);
  };

  const handleDelete = () => {
    fetch("https://ponto-print.herokuapp.com/update-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: "delete",
        name: 'Видалено',
        tableId: order._id,
        paid: false,
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setIsFetch((state) => !state);
    }, 1000);
  };

  const handleFinished = () => {
    fetch("https://ponto-print.herokuapp.com/update-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: "finished",
        name: 'Виконано',
        tableId: order._id,
        paid: false,
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setIsFetch((state) => !state);
    }, 1000);
  };

  return (
    <>
    {order.status.currentStatus == "new" && (
        <div
          style={{
            borderBottom: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
            background: '#7b87d4'
          }}
        >
          <AdminTableText 
          order={order}
          handleDownload={handleDownload}/>
          <div>
          <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}>
            </div>
            <div style={{ padding: "10px 0px" }}>
            </div>
          </div>
        </div>
      )}
    {order.status.currentStatus == "download" && (
        <div
          style={{
            borderBottom: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <AdminTableText 
          order={order}
          handleDownload={handleDownload}/>
          <div>
          <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleDelete}>Видалити</button>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleFinished}>Виконано</button>
            </div>
          </div>
        </div>
      )}
    {order.status.currentStatus == "delete" && (
        <div
          style={{
            borderBottom: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
            background: '#cc7878'
          }}
        >
          <AdminTableText 
          order={order}
          handleDownload={handleDownload}/>
          <div>
          <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}>
            </div>
            <div style={{ padding: "10px 0px" }}>
            </div>
          </div>
        </div>
      )}
    {order.status.currentStatus == "finished" && (
        <div
          style={{
            borderBottom: "1px solid black",
            display: "flex",
            justifyContent: "space-around",
            background: '#85c470'
          }}
        >
          <AdminTableText 
          order={order}
          handleDownload={handleDownload}/>
          <div>
          <p>{t(`${order.status.name}`)}</p>
          <div>
            {order.status.paid ? 'Оплочено' : 'Не оплочено'}
          </div>
            <div style={{ padding: "10px 0px" }}>
            </div>
            <div style={{ padding: "10px 0px" }}>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayAdminTableOrder;
