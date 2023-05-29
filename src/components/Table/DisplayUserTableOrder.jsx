import React from 'react';
import UserTableText from './UserTableText'
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe } from "../../store/auth";
import { useTranslation } from 'react-i18next';

const DisplayUserTableOrder = ({order, currentUser}) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
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
            dispatch(fetchAuthMe());
        }, 1000);
      };

      const handlePay = async () => {

        if(currentUser.balance >=  order.sum) {
          await fetch("https://ponto-print.herokuapp.com/update-status", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              value: "finished",
              name: 'Виконано',
              tableId: order._id,
              paid: true
            }),
          }).then((res) => res.json());
          setTimeout(() => {
              dispatch(fetchAuthMe());
          }, 2000);
  
          await fetch('https://ponto-print.herokuapp.com/update-balance', {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: currentUser._id,
              value: currentUser.balance - order.sum,
              action: 'Виведення',
              historyValue: `-${order.sum}`
            }),
          }).then((res) => res.json());
        } else {
          return alert('Недостатньо коштів')
        }
      };
    return (
      <>
        {order.status.currentStatus == "new" && (
          <div
            style={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
              background: "#7b87d4",
            }}
          >
            <UserTableText order={order} />
            <div>
              <p>{t(`${order.status.name}`)}</p>
              <div style={{ padding: "10px 0px" }}>
                <button onClick={handleDelete}>Видалити</button>
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
            <UserTableText order={order} />
            <div>
              <p>{t(`${order.status.name}`)}</p>
            </div>
          </div>
        )}
        {order.status.currentStatus == "delete" && (
          <div
            style={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
              background: "#cc7878",
            }}
          >
            <UserTableText order={order} />
            <div>
              <p>{t(`${order.status.name}`)}</p>
            </div>
          </div>
        )}
        {order.status.currentStatus == "finished" && (
          <div
            style={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-around",
              background: "#85c470",
            }}
          >
            <UserTableText order={order} />
            <div>
              <p>{t(`${order.status.name}`)}</p>
              <div style={{ padding: "10px 0px" }}>
                {!order.status.paid && (
                  <button onClick={handlePay}>Оплатити</button>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default DisplayUserTableOrder;