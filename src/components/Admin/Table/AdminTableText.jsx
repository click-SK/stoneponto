import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { RiFileEditFill } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
const AdminTableText = ({ order, handleDownload }) => {
  const { t } = useTranslation();
  const [isEditValue, setIsEditValue] = useState(false);
  const [newValue, setNewValue] = useState(0);

  useEffect(() => {
    setNewValue(order.sum.toFixed(0));
  }, [order]);

  const handleChangeSumSave = () => {
    fetch("http://91.206.30.132:4444/update-table-sum", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tableId: order._id,
        newValue,
      }),
    }).then((res) => res.json());
    setTimeout(() => {
      setIsEditValue(!isEditValue);
    }, 1000);
  };

  console.log('order.conditions',order);

  return (
    <>
      <div className="item_row_info item_id">
        <p>{order.id}</p>
      </div>
      <div className="item_row_info item_date">
        <p>{order.date}</p>
      </div>
      <div className="item_row_info item_name">
        {order?.user?.name ? (
          <p>{order.user.name}</p>
        ) : (
          <p>{t(`No user found`)}</p>
        )}
      </div>
      <div className="item_row_info item_file">
        <p onClick={() => handleDownload(order)} className="download_file">
          {order.fileName}
        </p>
      </div>
      <div className="item_row_info item_material">
        <p>{order.material}</p>
      </div>
      <div className="item_row_info item_quality">
        <p>{order.quality}</p>
      </div>
      <div className="item_row_info item_size">
        <p>{order.width}</p>
      </div>
      <div className="item_row_info item_size">
        <p>{order.height}</p>
      </div>
      <div className="item_row_info item_size">
        <p>{order.count}</p>
      </div>
      <div className="item_row_info item_sum">
        <p>{order.sum.toFixed(0)}</p>
        {isEditValue ? (
          <AiFillCloseCircle
            onClick={() => setIsEditValue(!isEditValue)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <RiFileEditFill
            onClick={() => setIsEditValue(!isEditValue)}
            style={{ cursor: "pointer" }}
          />
        )}
        {isEditValue && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <button
              style={{
                background: "#5aad5a",
                margin: "10px 0px",
                cursor: "pointer",
              }}
              onClick={handleChangeSumSave}
            >
              <MdDoneOutline />
            </button>
          </div>
        )}
      </div>
      <div className="item_row_info item_descript">
        <p>--{t(`Description`)}--</p>
        {order.conditions.lamination?.name && (
          <div style={{ background: "red" }}>
            <p>{order.conditions.lamination?.option}</p>
            <p>{order.conditions.lamination?.name}</p>
          </div>
        )}
        {order.conditions.cutting?.name && (
          <div>
            <p>{order.conditions.cutting?.option}</p>
            <p>{order.conditions.cutting?.name}</p>
          </div>
        )}
        {order.conditions.eyelets?.name && (
          <div style={{ background: "#00ff4c" }}>
            <p>{order.conditions.eyelets?.option}</p>
            <p>{order.conditions.eyelets?.name}</p>
          </div>
        )}
        {order.conditions.poster?.name && (
          <div>
            <p>{order.conditions.poster?.option}</p>
            <p>{order.conditions.poster?.name}</p>
          </div>
        )}
        {order.conditions.solderGates?.name && (
          <div style={{ background: "blue", color: "white" }}>
            <p>{order.conditions.solderGates?.option}</p>
            <p>{order.conditions.solderGates?.name}</p>
          </div>
        )}
        {order.conditions.solderPockets?.name && (
          <div style={{ background: "blue", color: "white" }}>
            <p>{order.conditions.solderPockets?.option}</p>
            <p>{order.conditions.solderPockets?.name}</p>
          </div>
        )}
        {order.conditions.mounting?.name && (
          <div style={{ background: "orange" }}>
            <p>{order.conditions.mounting?.name}</p>
          </div>
        )}
        {order.conditions.stamp?.name && (
          <div>
            <p>{order.conditions.stamp?.name}</p>
          </div>
        )}
        {order.conditions.stretch?.name && (
          <div>
            <p>{order.conditions.stretch?.name}</p>
          </div>
        )}
        {order?.notes != "" && (
          <div>
            <p>--{t(`Notes`)}--</p>
            <div>
              <p>{order.notes}</p>
            </div>
          </div>
        )}
        {order?.address != "" && (
          <div>
            <p>--{t(`Delivery`)}--</p>
            <div style={{ background: "yellow" }}>
              <p>{order.address}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminTableText;
