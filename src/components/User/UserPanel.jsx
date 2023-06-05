import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import Modal from '../Modal/Modal'
import UserTable from '../Table/UserTable'
const UserPanel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [debt, setDebt] = useState(0)

    const user = useSelector(currentUser);

    useEffect(() => {
      const sum = user?.orders.reduce((accumulator, currentObject) => {
        if (!currentObject.status.paid) {
          return accumulator + currentObject.sum;
        }
        return accumulator;
      }, 0);
      setDebt(sum)
    }, []);

    const handleCloseModal = () => {
        setModalIsOpen(false);
      };

      const handleOpenModal = () => {
        setModalIsOpen(true);
      };

      console.log('user.orders',user);

  return (
    <div style={{ width: "80%" }}>
      <p>Мій кабінет</p>
      <div style={{ paddingTop: "30px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0px",
          }}
        >
          <p style={{ width: "50%" }}>Пошта</p>
          <p style={{ width: "50%" }}>{user.email}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0px",
          }}
        >
          <p style={{ width: "50%" }}>Імя</p>
          <p style={{ width: "50%" }}>{user.name}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0px",
          }}
        >
          <p style={{ width: "50%" }}>Баланс</p>
          <p style={{ width: "50%" }}>{user.balance.toFixed(0)}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px 0px",
          }}
        >
          <p style={{ width: "50%" }}>Знижка</p>
          <p style={{ width: "50%" }}>{user.discountValue}</p>
        </div>

        <button className="button_open" onClick={handleOpenModal}>
          Історія транзакцій
        </button>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          historyData={user.balanceHistory}
        />

        <div>
          <p>Борг: {debt.toFixed(0)}</p>
        </div>

        <UserTable allOrders={[...user.orders].reverse()} currentUser={user} />
      </div>
    </div>
  );
};

export default UserPanel;
