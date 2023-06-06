import React from 'react';
import { useTranslation } from 'react-i18next';
import DisplayAdminTableOrder from '../Admin/Table/DisplayAdminTableOrder'
const AdminTable = ({allOrders}) => {
    const { t } = useTranslation();
    return (
        <div>
        <div className='table_header'>
            <div>
                <p>Id:</p>
            </div>
            <div>
                <p>{t(`Date`)}:</p>
            </div>
            <div>
                <p>{t(`The name of the file`)}:</p>
            </div>
            <div>
                <p>{t(`Material`)}:</p>
            </div>
            <div>
                <p>{t(`Quality`)}:</p>
            </div>
            <div>
                <p>{t(`Width`)}:</p>
            </div>
            <div>
                <p>{t(`Height`)}:</p>
            </div>
            <div>
                <p>{t(`Sum`)}:</p>
            </div>
            <div>
                <p>{t(`Condition`)}:</p>
            </div>
            <div>
                <p>{t(`Status`)}:</p>
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