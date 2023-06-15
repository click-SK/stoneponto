import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import AdminTableText from './AdminTableText'
import { MdDoneOutline } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import DeletetableModal from "./DeletetableModal/DeletetableModal";
const DisplayAdminTableOrder = ({ order, setIsFetch }) => {
  const [deleteText, setDeleteText] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const handleCloseModal = () => {
      setModalIsOpen(false);
    };

  

    const handleOpenModal = () => {
      setModalIsOpen(true);
    };
  const { t } = useTranslation();

 
  const handleDownload = async (order) => {
    const resonse = await fetch(`https://server-ponto-print.herokuapp.com/download?id=${order._id}`)
    if(resonse.status == 200) {
      const blob = await resonse.blob();
      const dowloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = dowloadUrl;

      const fileExtension = order.file.split('.').pop();
      console.log('fileExtension',fileExtension);

      const invalidCharacters = /[<>:"\\/|?*.]/g;
      var cleanedStr = order.fileName.replace(/\s/g, "").replace(invalidCharacters, "");
      link.download = cleanedStr + '.' + fileExtension;
      document.body.appendChild(link);
      link.click();
      link.remove();

      await fetch("https://server-ponto-print.herokuapp.com/update-status", {
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
    } else {
      alert('Помилка при завантаженні')
    }
  };

  const handleDelete = () => {
    fetch("https://server-ponto-print.herokuapp.com/update-status", {
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
    fetch("https://server-ponto-print.herokuapp.com/update-status", {
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
      {order?.status?.currentStatus == "new" && (
        <div
          className="table_item table_item_new"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div className="item_row_info item_status">
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
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px", display: 'flex', justifyContent:'center' }}>
              <button 
              style={{ padding: "5px 8px", background:'#5aad5a', margin:'0 2px' }}
              onClick={handleFinished}>
                <MdDoneOutline/></button>
              <button 
              style={{ padding: "5px 8px", background:'red', margin:'0 2px'  }}
              onClick={handleOpenModal}>
                {/* {t(`Remove`)} */}
              <MdOutlineDeleteForever/>
              </button>

            </div>
            <div style={{ padding: "10px 0px" }}>
              {/* <button 
              style={{ padding: "5px 8px", background:'#5aad5a' }}
              onClick={handleFinished}>
                <MdDoneOutline/></button> */}
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
          <div className="item_row_info item_status">
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
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
            <p>{order.status.paid ? "Оплочено" : "Не оплочено"}</p>
            <div style={{ padding: "10px 0px" }}></div>
            <div style={{ padding: "10px 0px" }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayAdminTableOrder;
