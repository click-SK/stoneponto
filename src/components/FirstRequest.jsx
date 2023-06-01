import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { fetchAuthMe, fetchIsAdmin } from '../store/auth';
import {fetchCurrency} from '../store/currency'
import {fetchLanguage} from '../store/language'
const FirstRequest = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe());
        dispatch(fetchCurrency());
        dispatch(fetchLanguage());
    },[])
};

export default FirstRequest;