import React, {useState} from 'react';
import EditCalculator from './Calculator/EditCalculator';
import EditCurrency from './Currency/EditCurrency';
import AddNewUser from './User/AddNewUser';
import AllUsers from './User/AllUsers';
import EditTable from './Table/EditTable';
import AdminBlog from './Blog/AdminBlog';
import '../../style/adminPanel.scss'
const AdminPanel = () => {
    const [editPrice, setEditPrice] = useState(true);
    const [editCurrency, setEditCurrency] = useState(false);
    const [editAddNewUser, setEditAddNewUser] = useState(false);
    const [editAllUsers, setEditAllUsers] = useState(false);
    const [editTable, setEditTable] = useState(false);
    const [editBlog, setEditBlog] = useState(false);

    const showPriceFunc = () => {
        setEditPrice(true);
        setEditCurrency(false);
        setEditAddNewUser(false);
        setEditAllUsers(false);
        setEditTable(false);
        setEditBlog(false);
    }

    const showCurrencyFunc = () => {
        setEditCurrency(true);
        setEditPrice(false);
        setEditAddNewUser(false);
        setEditAllUsers(false);
        setEditTable(false);
        setEditBlog(false);
    }

    const showAddNewUser = () => {
        setEditAddNewUser(true);
        setEditCurrency(false)
        setEditPrice(false);
        setEditAllUsers(false);
        setEditTable(false);
        setEditBlog(false);
    }

    const showAllUser = () => {
        setEditAllUsers(true);
        setEditAddNewUser(false);
        setEditCurrency(false)
        setEditPrice(false);
        setEditTable(false);
        setEditBlog(false);
    }

    const showTable = () => {
        setEditTable(true);
        setEditAllUsers(false);
        setEditAddNewUser(false);
        setEditCurrency(false)
        setEditPrice(false);
        setEditBlog(false);
    }

    const showBlog = () => {
        setEditBlog(true);
        setEditTable(false);
        setEditAllUsers(false);
        setEditAddNewUser(false);
        setEditCurrency(false)
        setEditPrice(false);
    }

    
    return (
        <div className='admin_panel'>
            <div className='admin_panel__header'>
                <p className={`admin_header__item ${editPrice ? 'active' : ' ' }  `} onClick={showPriceFunc}>Ціни на калькулятор</p>
                <p className={`admin_header__item ${editCurrency ? 'active' : ' ' }  `} onClick={showCurrencyFunc}>Валюта</p>
                <p className={`admin_header__item ${editAddNewUser ? 'active' : ' ' }  `} onClick={showAddNewUser}>Додати нового користувача</p>
                <p className={`admin_header__item ${editAllUsers ? 'active' : ' ' }  `} onClick={showAllUser}>Всі користувачі</p>
                <p className={`admin_header__item ${editTable ? 'active' : ' ' }  `} onClick={showTable}>Таблиця</p>
                <p className={`admin_header__item ${editBlog ? 'active' : ' ' }  `} onClick={showBlog}>Блог</p>
            </div>
            {editPrice && <EditCalculator/>}
            {editCurrency && <EditCurrency/>}
            {editAddNewUser && <AddNewUser/>}
            {editAllUsers && <AllUsers/>}
            {editTable && <EditTable/>}
            {editBlog && <AdminBlog/>}
        </div>
    );
};

export default AdminPanel;