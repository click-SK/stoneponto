import React, {useState, useEffect} from 'react';
import i18n from '../i18n';
import { fetchLanguage } from '../store/language';
import { useSelector, useDispatch } from 'react-redux';
import useLocalStorage from '../hooks/use-localstorage';
import '../style/choseLanguage.scss'
const Test = () => {
    const dispatch = useDispatch();
    const [currentLang, setCurrentLang] = useState('ua');
    const [language, setLanguage] = useLocalStorage('language', 'Ua');
    const lang = useSelector((state) => state.lang.language);

    // useEffect(() => {
    //     setCurrentLang(lang);
    // },[lang])


    const handleLenguageChange = (e) => {
        i18n.changeLanguage(e);
        setLanguage(e);
        dispatch(fetchLanguage());
    };

    return (
        <div className='lang_change'>
            <button className={lang == 'Ua' ? 'active_language' : ''} onClick={() => handleLenguageChange('Ua')}>Ua</button>
            <button className={lang == 'Ru' ? 'active_language' : ''} onClick={() => handleLenguageChange('Ru')}>Ru</button>
        </div>
    );
};

export default Test;