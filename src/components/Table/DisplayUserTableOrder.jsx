import React from "react";
import UserTableText from "./UserTableText";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe } from "../../store/auth";
import { useTranslation } from "react-i18next";

const DisplayUserTableOrder = ({ order, currentUser }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    fetch("http://91.206.30.132:4444/update-user-table-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: "delete",
        name: "Видалено",
        tableId: order._id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == "Table status worked") {
          alert("Статус замовлення: в роботі");
        }
      });
    setTimeout(() => {
      dispatch(fetchAuthMe());
    }, 1000);
  };

  setInterval(() => {
    window.location.reload();
    // setIsFetch(state => !state);
  }, 600000);

  const handlePay = async () => {
    if (currentUser.balance >= order.sum) {
      await fetch("http://91.206.30.132:4444/update-status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: "finished",
          name: "Виконано",
          tableId: order._id,
          paid: true,
        }),
      }).then((res) => res.json());
      setTimeout(() => {
        // dispatch(fetchAuthMe());
      }, 2000);

      await fetch("http://91.206.30.132:4444/update-balance", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
          value: currentUser.balance - order.sum,
          action: "Оплата замовлення",
          historyValue: `-${order.sum}`,
        }),
      }).then((res) => res.json());
    } else {
      return alert("Недостатньо коштів");
    }
  };
  return (
    <>
      {order.status.currentStatus == "new" && (
        <div className="table_item table_item_new">
          <UserTableText order={order} />
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
            <div style={{ padding: "10px 0px" }}>
              <button onClick={handleDelete}>{t(`Remove`)}</button>
            </div>
          </div>
        </div>
      )}
      {order.status.currentStatus == "download" && (
        <div className="table_item table_item_download">
          <UserTableText order={order} />
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
          </div>
        </div>
      )}
      {order.status.currentStatus == "delete" && (
        <div className="table_item table_item_delete">
          <UserTableText order={order} />
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
          </div>
        </div>
      )}
      {order.status.currentStatus == "finished" && (
        <div className="table_item table_item_finished">
          <UserTableText order={order} />
          <div className="item_row_info item_status">
            <p>{t(`${order.status.name}`)}</p>
            <p>{order.status.paid ? "Оплочено" : "Не оплочено"}</p>
            <div style={{ padding: "10px 0px" }}>
              {!order.status.paid && (
                <div>
                  <button
                    style={{
                      padding: "5px 10px",
                      margin: "0 0 5px 0",
                      background: "rgb(90, 173, 90)",
                    }}
                    onClick={handlePay}
                  >
                    $
                  </button>
                  <p>{t(`Pay`)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayUserTableOrder;
