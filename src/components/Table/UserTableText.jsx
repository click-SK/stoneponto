import React from "react";
import { useTranslation } from "react-i18next";

const UserTableText = ({ order }) => {
  const { t } = useTranslation();

  
  return (
    <>
      <div className="item_row_info item_id">
        <p>{order.id}</p>
      </div>
      <div className="item_row_info item_date">
        <p>{order.date}</p>
      </div>
      <div className="item_row_info item_file">
        <p>{order.fileName}</p>
      </div>
      <div className="item_row_info item_material">
        <p>{t(`${order.material}`)}</p>
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
        <p>--Опис--</p>
        {order && order.descriptionDelete == "" ? (
          <>
            {order.conditions.lamination?.name && (
              <div style={{ background: "red" }}>
                <p>{t(`${order.conditions.lamination?.option}`)}</p>
                <p>{t(`${order.conditions.lamination?.name}`)}</p>
              </div>
            )}
            {order.conditions.cutting?.name && (
              <div>
                <p>{t(`${order.conditions.cutting?.option}`)}</p>
                <p>{t(`${order.conditions.cutting?.name}`)}</p>
              </div>
            )}
            {order.conditions.eyelets?.name && (
              <div style={{ background: "green" }}>
                <p>{t(`${order.conditions.eyelets?.option}`)}</p>
                <p>{t(`${order.conditions.eyelets?.name}`)}</p>
              </div>
            )}
            {order.conditions.poster?.name && (
              <div>
                <p>{t(`${order.conditions.poster?.option}`)}</p>
                <p>{t(`${order.conditions.poster?.name}`)}</p>
              </div>
            )}
            {order.conditions.solderGates?.name && (
              <div style={{ background: "blue" }}>
                <p>{t(`${order.conditions.solderGates?.option}`)}</p>
                <p>{t(`${order.conditions.solderGates?.name}`)}</p>
              </div>
            )}
            {order.conditions.solderPockets?.name && (
              <div style={{ background: "blue" }}>
                <p>{t(`${order.conditions.solderPockets?.option}`)}</p>
                <p>{t(`${order.conditions.solderPockets?.name}`)}</p>
              </div>
            )}
            {order.conditions.mounting?.name && (
              <div style={{ background: "orange" }}>
                <p>{t(`${order.conditions.mounting?.name}`)}</p>
              </div>
            )}
            {order.conditions.stamp?.name && (
              <div>
                <p>{t(`${order.conditions.stamp?.name}`)}</p>
              </div>
            )}
            {order.conditions.stretch?.name && (
              <div>
                <p>{t(`${order.conditions.stretch?.name}`)}</p>
              </div>
            )}
          </>
        ) : (
          <>
            <p>{order.descriptionDelete}</p>
          </>
        )}
        {order?.notes != "" && (
          <div>
            <p>--Замітки--</p>
            <div>
              <p>{order.notes}</p>
            </div>
          </div>
        )}
        {order?.notes != "" && (
          <div>
            <p>--Доставка--</p>
            <div style={{ background: "yellow" }}>
              <p>{order.address}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserTableText;
