import React, {useState} from 'react';
import EditCalculator from './Calculator/EditCalculator';
import EditCurrency from './Currency/EditCurrency';
import AddNewUser from './User/AddNewUser';
import AllUsers from './User/AllUsers';
import EditTable from './Table/EditTable';
const AdminPanel = () => {
    const [editPrice, setEditPrice] = useState(true);
    const [editCurrency, setEditCurrency] = useState(false);
    const [editAddNewUser, setEditAddNewUser] = useState(false);
    const [editAllUsers, setEditAllUsers] = useState(false);
    const [editTable, setEditTable] = useState(false);

    const showPriceFunc = () => {
        setEditPrice(true);
        setEditCurrency(false);
        setEditAddNewUser(false);
        setEditAllUsers(false);
        setEditTable(false);
    }

    const showCurrencyFunc = () => {
        setEditCurrency(true);
        setEditPrice(false);
        setEditAddNewUser(false);
        setEditAllUsers(false);
        setEditTable(false);
    }

    const showAddNewUser = () => {
        setEditAddNewUser(true);
        setEditCurrency(false)
        setEditPrice(false);
        setEditAllUsers(false);
        setEditTable(false);
    }

    const showAllUser = () => {
        setEditAllUsers(true);
        setEditAddNewUser(false);
        setEditCurrency(false)
        setEditPrice(false);
        setEditTable(false);
    }

    const showTable = () => {
        setEditTable(true);
        setEditAllUsers(false);
        setEditAddNewUser(false);
        setEditCurrency(false)
        setEditPrice(false);
    }


    return (
        <div style={{width: '100%'}}>
            <div style={{display:'flex', justifyContent:'space-around', paddingBottom:'50px'}}>
                <p style={{fontSize: '20px'}} onClick={showPriceFunc}>Ціни на калькулятор</p>
                <p style={{fontSize: '20px'}} onClick={showCurrencyFunc}>Валюта</p>
                <p style={{fontSize: '20px'}} onClick={showAddNewUser}>Додати нового користувача</p>
                <p style={{fontSize: '20px'}} onClick={showAllUser}>Всі користувачі</p>
                <p style={{fontSize: '20px'}} onClick={showTable}>Таблиця</p>
            </div>
            {editPrice && <EditCalculator/>}
            {editCurrency && <EditCurrency/>}
            {editAddNewUser && <AddNewUser/>}
            {editAllUsers && <AllUsers/>}
            {editTable && <EditTable/>}
        </div>
    );
};

export default AdminPanel;