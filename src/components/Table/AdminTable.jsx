import React from 'react';
import DisplayAdminTableOrder from '../Admin/Table/DisplayAdminTableOrder'
const AdminTable = ({allOrders}) => {
    console.log('allOrders',allOrders);
    return (
        <div>
        <div style={{borderBottom: '1px solid black', display:'flex',justifyContent:'space-around'}}>
            <div>
                <p>Id:</p>
            </div>
            <div>
                <p>Дата:</p>
            </div>
            <div>
                <p>Назва файлу:</p>
            </div>
            <div>
                <p>Матеріал:</p>
            </div>
            <div>
                <p>Якість:</p>
            </div>
            <div>
                <p>Ширина:</p>
            </div>
            <div>
                <p>Висота:</p>
            </div>
            <div>
                <p>Сумма:</p>
            </div>
            <div>
                <p>Умова:</p>
            </div>
            <div>
                <p>Статус:</p>
            </div>
        </div>
            {allOrders.map((order) => (
                <DisplayAdminTableOrder key={order.id}
                order={order}/>
            ))}
        </div>
    );
};

export default AdminTable;