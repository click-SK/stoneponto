import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import Modal from '../Modal/Modal'
import UserTable from '../Table/UserTable'
import '../../style/userProfile.scss'

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

 

  return (
    
    <div className='user_profile_wrap'>
      <p className='user_profile_title'>Мій кабінет</p>
      <div className='user_profile_information'>
        <div className='user_profile_email'>
          <p >Пошта</p>
          <p >{user.email}</p>
        </div>

        <div className='user_profile_name' >
          <p >Імя</p>
          <p >{user.name}</p>
        </div>

        <div className='user_profile_balance'>
          <p >Баланс</p>
          <p >{user.balance.toFixed(0)}</p>
        </div>

        <div className='user_profile_discount'>
          <p >Знижка</p>
          <p >{user.discountValue}</p>
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
