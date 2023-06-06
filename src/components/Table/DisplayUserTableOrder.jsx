import React from 'react';
import UserTableText from './UserTableText'
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe } from "../../store/auth";
import { useTranslation } from 'react-i18next';

const DisplayUserTableOrder = ({order, currentUser}) => {
  console.log('order',order);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleDelete = () => {
        fetch("https://ponto-print.herokuapp.com/update-user-table-status", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: "delete",
            name: 'Видалено',
            tableId: order._id,
          }),
        }).then((res) => res.json())
        .then((res) => {
          console.log('res',res)
          if(res.message == "Table status worked") {
            alert('Статус замовлення: в роботі')
          }
        })
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
          className="table_item table_item_new"
          >
            <UserTableText order={order} />
            <div className="item_row_info item_status">
              <p>{t(`${order.status.name}`)}</p>
              <div style={{ padding: "10px 0px" }}>
                <button onClick={handleDelete}>Видалити</button>
              </div>
            </div>
          </div>
        )}
        {order.status.currentStatus == "download" && (
          <div
            className="table_item table_item_download"
          >
            <UserTableText order={order} />
            <div className="item_row_info item_status">
              <p>{t(`${order.status.name}`)}</p>
            </div>
          </div>
        )}
        {order.status.currentStatus == "delete" && (
          <div
            className="table_item table_item_delete"  
          >
            <UserTableText order={order} />
            <div className="item_row_info item_status">
              <p>{t(`${order.status.name}`)}</p>
            </div>
          </div>
        )}
        {order.status.currentStatus == "finished" && (
          <div
            className="table_item table_item_finished"
          >
            <UserTableText order={order} />
            <div className="item_row_info item_status">
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