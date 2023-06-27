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
    const resonse = await fetch(`http://91.206.30.132:4444/download?id=${order._id}`)
    if(resonse.status == 200) {
      console.log('status 200');
      const link = document.createElement('a');
      link.href = `http://91.206.30.132:4444/download?id=${order._id}`;
      document.body.appendChild(link);
      link.click();
      // link.remove();

      await fetch("http://91.206.30.132:4444/update-status", {
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
        console.log('The end promise');
        setIsFetch((state) => !state);
      }, 1000);
    } else {
      alert('Помилка при завантаженні')
    }
  };

  const handleDelete = () => {
    console.log('work');
    fetch("http://91.206.30.132:4444/update-status", {
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
    fetch("http://91.206.30.132:4444/update-status", {
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
            <div 
            className="button_wrap"
             >
              <button 
              style={{ padding: "5px 8px", background:'#5aad5a', margin:'0 2px' }}
              onClick={handleFinished}>
                <MdDoneOutline/></button>
              <button 
              style={{ padding: "5px 8px", background:'red', margin:'0 2px'  }}
              onClick={handleOpenModal}>
              <MdOutlineDeleteForever/>
              </button>

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
      {(order?.status?.currentStatus == "download") && (
        <div
          className="table_item table_item_download"
        >
          <AdminTableText order={order} handleDownload={handleDownload} />
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
            <div 
            className="button_wrap"
             >
              <button 
              style={{ padding: "5px 8px", background:'#5aad5a', margin:'0 2px' }}
              onClick={handleFinished}>
                <MdDoneOutline/></button>
              <button 
              style={{ padding: "5px 8px", background:'red', margin:'0 2px'  }}
              onClick={handleOpenModal}>
              <MdOutlineDeleteForever/>
              </button>

            </div>
            <div>
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
            <div ></div>
            <div ></div>
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
            <div ></div>
            <div ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayAdminTableOrder;
