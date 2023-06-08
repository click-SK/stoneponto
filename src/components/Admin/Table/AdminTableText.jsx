import React from "react";
import { useTranslation } from "react-i18next";

const AdminTableText = ({ order, handleDownload }) => {
  const { t } = useTranslation();
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
        <p 
        onClick={() => handleDownload(order)}
        className="download_file"
        // style={{cursor:'pointer'}} 
        >{order.fileName}</p>
        {/* <div style={{ padding: "10px 0px" }}>
          <button onClick={() => handleDownload(order)}>{t(`Download`)}</button>
        </div> */}
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
      <div className="item_row_info item_sum">
        <p>{order.sum.toFixed(0)}</p>
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
          <div style={{ background: "#00ff4c"}}>
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
        {order?.notes != "" && (
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
