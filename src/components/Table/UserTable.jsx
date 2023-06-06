import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import DisplayUserTableOrder from './DisplayUserTableOrder';
import '../../style/userProfile.scss'
import '../../style/table.scss'
const UserTable = ({allOrders, currentUser}) => {

  const { t } = useTranslation();

    return (
        <div className='table_wrap'>
        <div  className='table_header'>
            <div className='table_header_item table_header_id'>
                <p>Id:</p>
            </div>
            <div className='table_header_item table_header_date'>
                <p>{t(`Date`)}:</p>
            </div>
            <div className='table_header_item table_header_file'>
                <p>{t(`The name of the file`)}:</p>
            </div>
            <div className='table_header_item table_header_materials'>
            <p>{t(`Material`)}</p>
          </div>
          <div className='table_header_item table_header_quality'>
            <p>{t(`Quality`)}</p>
          </div >
          <div className='table_header_item table_header_width'>
            <p>{t(`Width`)}</p>
          </div>
          <div className='table_header_item table_header_hight'>
            <p>{t(`Height`)}</p>
          </div >
          <div className='table_header_item table_header_sum'>
            <p>{t(`Sum`)}</p>
          </div >
          <div className='table_header_item table_header_descript'>
            <p>{t(`Condition`)}</p>
          </div>
            <div className='table_header_item table_header_status'>
                <p>{t(`Status`)}:</p>
            </div>
        </div>
            <div className='table_body'>
                {allOrders.map((order) => (
                    <DisplayUserTableOrder key={order.id}
                    order={order}
                    currentUser={currentUser}/>
                ))}
            </div>
        </div>
    );
};

export default UserTable;