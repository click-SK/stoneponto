import React, {useState, useEffect} from 'react';
import EditCurrencyValue from './EditCurrencyValue';
const EditCurrency = () => {
    const [bankCurrency, setBankCurrency] = useState('');
    const [currentCurrency, setCurrentCurrency] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [isFetch, setIsFetch] = useState('');

    useEffect(() => {
        fetch('http://localhost:4444/get-currency')
        .then((res) => res.json())
        .then((cur) => {
            console.log('cur',cur);
            setBankCurrency(cur[0].banckCurrency);
            setCurrentCurrency(cur[0].currency);
            setCurrentValue(cur[0].value);
        })
        console.log('Efect Work');
    },[isFetch])
    
    return (
        <div>
            <div>
                <p>Курс на сайті: {currentCurrency}</p>
            </div>
            <div>
                <p>Курс банкцівський: {bankCurrency}</p>
            </div>
            <div>
                <p>Мій відсоток: {currentValue}</p>
            </div>
            <div>
                <EditCurrencyValue
                setIsFetch={setIsFetch}
                data={currentValue}/>
            </div>
        </div>
    );
};

export default EditCurrency;