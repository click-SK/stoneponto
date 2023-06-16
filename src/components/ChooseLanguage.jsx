import React, {useState, useEffect} from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { fetchLanguage } from '../store/language';
import { useSelector, useDispatch } from 'react-redux';
import useLocalStorage from '../hooks/use-localstorage';
const Test = () => {
    const dispatch = useDispatch();

    const [ua, setUa] = useState([]);
    const [ru, setRu] = useState([]);
    const [currentLang, setCurrentLang] = useState('ua');
    const [language, setLanguage] = useLocalStorage('language', 'Ua');
    const { t } = useTranslation();


    const handleLenguageChange = (e) => {
        i18n.changeLanguage(e);
        setLanguage(e);
        dispatch(fetchLanguage());
    };

    return (
        <div className='lang_change'>
            <button onClick={() => handleLenguageChange('Ua')}>Ua</button>
            <button onClick={() => handleLenguageChange('Ru')}>Ru</button>
        </div>
    );
};

export default Test;