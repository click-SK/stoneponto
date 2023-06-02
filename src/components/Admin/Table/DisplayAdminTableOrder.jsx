import React, { useState, useEffect } from "react";
import AdminTableText from './AdminTableText'
import DeletetableModal from "./DeletetableModal/DeletetableModal";
import { useTranslation } from 'react-i18next';
const DisplayAdminTableOrder = ({ order, setIsFetch }) => {
  const [deleteText, setDeleteText] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
      setModalIsOpen(false);
    };

    console.log('deleteText',deleteText);

    const handleOpenModal = () => {
      setModalIsOpen(true);
    };
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
        descriptionDelete: deleteText
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

  console.log('order',order);

  return (
    <>
      {order?.status?.currentStatus == "new" && (
        <div
          className="table_item table_item_new"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div>
            <p>{t(`${order.status.name}`)}</p>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {order?.status?.currentStatus == "download" && (
        <div
          className="table_item table_item_download"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div>
            <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleOpenModal}>Видалити</button>
            </div>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleFinished}>Виконано</button>
            </div>
          </div>
          <DeletetableModal 
          isOpen={modalIsOpen} 
          onClose={handleCloseModal}
          setDeleteText={setDeleteText}
          deleteText={deleteText}
          handleDelete={handleDelete} />
        </div>
      )}
      {order.status.currentStatus == "delete" && (
        <div
          className="table_item table_item_delete"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div>
            <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}></div>
            <div style={{ padding: "10px 0px" }}></div>
          </div>
        </div>
      )}
      {order?.status?.currentStatus == "finished" && (
        <div
          className="table_item table_item_finished"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div>
            <p>{t(`${order.status.name}`)}</p>
            <div>{order.status.paid ? "Оплочено" : "Не оплочено"}</div>
            <div style={{ padding: "10px 0px" }}></div>
            <div style={{ padding: "10px 0px" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayAdminTableOrder;
