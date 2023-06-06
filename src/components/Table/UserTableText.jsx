import React from "react";
import { useTranslation } from "react-i18next";

const UserTableText = ({ order }) => {
  const { t } = useTranslation();

  
  return (
    <>
      <div>
        <p>{order.id}</p>
      </div>
      <div>
        <p>{order.date}</p>
      </div>
      <div>
        <p>{order.fileName}</p>
      </div>
      <div>
        <p>{order.material}</p>
      </div>
      <div>
        <p>{order.quality}</p>
      </div>
      <div>
        <p>{order.width}</p>
      </div>
      <div>
        <p>{order.height}</p>
      </div>
      <div>
        <p>{order.sum.toFixed(0)}</p>
      </div>
      <div>
        <p>--{t(`Description`)}--</p>
        {order && order.descriptionDelete == "" ? (
          <>
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
              <div style={{ background: "green" }}>
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
              <div style={{ background: "blue" }}>
                <p>{order.conditions.solderGates?.option}</p>
                <p>{order.conditions.solderGates?.name}</p>
              </div>
            )}
            {order.conditions.solderPockets?.name && (
              <div style={{ background: "blue" }}>
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
          </>
        ) : (
          <>
            <p>{order.descriptionDelete}</p>
          </>
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
            <div>
              <p>{order.address}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserTableText;
