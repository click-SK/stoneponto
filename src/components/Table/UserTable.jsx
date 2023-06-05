import React, {useState} from 'react';
import DisplayUserTableOrder from './DisplayUserTableOrder';
import '../../style/userProfile.scss'
import '../../style/table.scss'
const UserTable = ({allOrders, currentUser}) => {

    return (
        <div className='table_wrap'>
        <div  className='table_header'>
            <div className='table_header_item table_header_id'>
                <p>Id:</p>
            </div>
            <div className='table_header_item table_header_date'>
                <p>Дата:</p>
            </div>
            <div className='table_header_item table_header_file'>
                <p>Назва файлу:</p>
            </div>
            <div className='table_header_item table_header_materials'>
            <p>Матеріал</p>
          </div>
          <div className='table_header_item table_header_quality'>
            <p>Якість</p>
          </div >
          <div className='table_header_item table_header_width'>
            <p>Ширина</p>
          </div>
          <div className='table_header_item table_header_hight'>
            <p>Висота</p>
          </div >
          <div className='table_header_item table_header_sum'>
            <p>Сумма</p>
          </div >
          <div className='table_header_item table_header_descript'>
            <p>Умова</p>
          </div>
            <div className='table_header_item table_header_status'>
                <p>Статус:</p>
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