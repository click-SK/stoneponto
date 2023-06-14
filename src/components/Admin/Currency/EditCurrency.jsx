import React, {useState, useEffect} from 'react';
import EditCurrencyValue from './EditCurrencyValue';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {fetchCurrency} from '../../../store/currency'
import '../../../style/editCurency.scss'
import {RiFileEditFill} from 'react-icons/ri';

const EditCurrency = () => {
    const [bankCurrency, setBankCurrency] = useState('');
    const [currentStateCurrency, setCurrentStateCurrency] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [isFetch, setIsFetch] = useState(false);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://server-ponto-print.herokuapp.com/get-currency')
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
                    <p className='curency_site'>{t(`The course is on the website`)}: {currentStateCurrency}</p>
                </div>
                <div>
                    <p className='curency_nbu'>{t(`Banking course`)}: {bankCurrency}</p>
                </div>
                <div>
                    <p className='curency_plus'>{t(`My percentage`)}: {currentValue}</p>
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