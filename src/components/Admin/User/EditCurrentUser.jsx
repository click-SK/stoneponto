import React, {useState, useEffect} from 'react';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import EditCurrentUserSecond from './EditCurrentUserSecond';
import EditBalance from './EditBalance';
import Modal from '../../Modal/Modal';
// import AdminTable from '../../Table/AdminTable';
const EditCurrentUser = ({user, setIsFetch}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCloseModal = () => {
        setModalIsOpen(false);
      };

      const handleOpenModal = () => {
        setModalIsOpen(true);
      };
    

    return (
      <div style={{ padding: "20px 0px" }}>
        <EditCurrentUserSecond
          data={user.name}
          userId={user._id}
          editPath={"https://ponto-print.herokuapp.com/update-name"}
          title="Імя"
          setIsFetch={setIsFetch}
        />

        <EditCurrentUserSecond
          data={user.discountValue}
          userId={user._id}
          editPath={"https://ponto-print.herokuapp.com/update-discount"}
          title="Знижка"
          setIsFetch={setIsFetch}
        />

        <EditCurrentUserSecond
          data={user.email}
          userId={user._id}
          editPath={""}
          title="Пошта"
          setIsFetch={setIsFetch}
        />

        <EditBalance
          data={user.balance.toFixed(0)}
          userId={user._id}
          editPath={"https://ponto-print.herokuapp.com/update-balance"}
          title="Баланс"
          setIsFetch={setIsFetch}
        />

        <button className="button_open" onClick={handleOpenModal}>
          Історія транзакцій
        </button>

        <Modal
          isOpen={modalIsOpen}
          onClose={handleCloseModal}
          historyData={user.balanceHistory}
        />

        {/* <AdminTable
        allOrders={user.orders}/> */}
      </div>
    );
};

export default EditCurrentUser;