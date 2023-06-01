import React, {useState, useEffect} from 'react';
import EditCurrencyValue from './EditCurrencyValue';
import { useDispatch } from 'react-redux';
import {fetchCurrency} from '../../../store/currency'
import '../../../style/editCurency.scss'
import {RiFileEditFill} from 'react-icons/ri';

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
        <div className='edit_curency_wrap'>
            <div className='wrap_item edit_curency '>
                <div >
                    <p className='curency_site'>Курс на сайті: {currentStateCurrency}</p>
                </div>
                <div>
                    <p className='curency_nbu'>Курс банкцівський: {bankCurrency}</p>
                </div>
                <div>
                    <p className='curency_plus'>Мій відсоток: {currentValue}</p>
                </div>
            </div>
            <>
                <EditCurrencyValue
                setIsFetch={setIsFetch}
                data={currentValue}/>
            </>
        </div>
    );
};

export default EditCurrency;