import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { fetchAuthMe, fetchIsAdmin } from '../store/auth';
import {fetchCurrency} from '../store/currency'
const FirstRequest = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe());
        dispatch(fetchCurrency());
    },[])
};

export default FirstRequest;