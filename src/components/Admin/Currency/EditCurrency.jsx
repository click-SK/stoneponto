import React, {useState, useEffect} from 'react';
import EditCurrencyValue from './EditCurrencyValue';
import { useDispatch } from 'react-redux';
import {fetchCurrency} from '../../../store/currency'
const EditCurrency = () => {
    const [bankCurrency, setBankCurrency] = useState('');
    const [currentStateCurrency, setCurrentStateCurrency] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [isFetch, setIsFetch] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-currency')
        .then((res) => res.json())
        .then((cur) => {
            setBankCurrency(cur[0].banckCurrency);
            setCurrentStateCurrency(cur[0].currency);
            setCurrentValue(cur[0].value);
            dispatch(fetchCurrency())
        })
    },[isFetch])

    
    return (
        <div>
            <div>
                <p>Курс на сайті: {currentStateCurrency}</p>
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