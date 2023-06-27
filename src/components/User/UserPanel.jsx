import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import { currentUser } from "../../store/auth";
import Modal from '../Modal/Modal'
import UserTable from '../Table/UserTable'
import '../../style/userProfile.scss'
import Loader from '../Loader/Loader';

const UserPanel = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [debt, setDebt] = useState(0)
    const [isFetch, setIsFetch] = useState(false);
    const [user, setUser] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
      fetch('http://91.206.30.132:4444/get-me',{
        headers: {
          'authorization': window.localStorage.getItem('token')
        },
      })
      .then((res) => res.json())
      .then((res) => setUser(res))
    },[isFetch])

    useEffect(() => {
      const sum = user?.orders.reduce((accumulator, currentObject) => {
        if (!currentObject.status.paid && currentObject.status.currentStatus != 'delete') {
          return accumulator + currentObject.sum;
        }
        return accumulator;
      }, 0);
      setDebt(sum)
    }, [user]);

    const handleCloseModal = () => {
        setModalIsOpen(false);
      };

      const handleOpenModal = () => {
        setModalIsOpen(true);
      };

  return (
    <div className='user_profile_wrap'>
    {user ? 
        <div>
        <div className='user_profile_information' >
          <div className='user_data'>
            <div className='name_block'>
              <div className='user_profile_email'>
                <p className='key'>{t(`Mail`)}:</p>
                <p className='value'>{user.email}</p>
              </div>
  
              <div className='user_profile_name'>
              <p className='key'>{t(`Name`)}:</p>
              <p className='value'>{user.name}</p>
              </div>
  
            </div>
            <div className='balance_block'>
                <div className='user_profile_balance'>
                  <p>{t(`Balance`)}:</p>
                  <p>{user?.balance.toFixed(0)}</p>
                </div>
  
                <div className='user_profile_discount'>
                  <p >{t(`Discount`)}:</p>
                  <p >{user.discountValue * 100}%</p>
                </div>
                <div className='user_profile_debt'>
                  <p>{t(`Debt`)}:</p> <p>{debt && debt.toFixed(0)}</p>
                </div>
              </div>
            </div>
            
  
          <button className="button_open" onClick={handleOpenModal}>
          {t(`Transaction history`)}
          </button>
  
          <Modal
            isOpen={modalIsOpen}
            onClose={handleCloseModal}
            historyData={user.balanceHistory}
          />
  
  
  
          <UserTable allOrders={[...user.orders].reverse()} currentUser={user} setIsFetch={setIsFetch}/>
        </div>
      </div>
      :
      <Loader/>}
    </div>
  );
};

export default UserPanel;
