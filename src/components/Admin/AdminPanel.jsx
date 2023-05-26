import React, {useState} from 'react';
import EditCalculator from './Calculator/EditCalculator';
import EditCurrency from './Currency/EditCurrency';
const AdminPanel = () => {
    const [editPrice, setEditPrice] = useState(true);
    const [editCurrency, setEditCurrency] = useState(false);

    const showPriceFunc = () => {
        setEditPrice(true);
        setEditCurrency(false);
    }

    const showCurrencyFunc = () => {
        setEditCurrency(true);
        setEditPrice(false);
    }
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{fontSize: '20px'}} onClick={showPriceFunc}>Ціни на калькулятор</p>
                <p style={{fontSize: '20px'}} onClick={showCurrencyFunc}>Валюта</p>
            </div>
            {editPrice && <EditCalculator/>}
            {editCurrency && <EditCurrency/>}
        </div>
    );
};

export default AdminPanel;