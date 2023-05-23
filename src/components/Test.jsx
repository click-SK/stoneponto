// import React, {useState, useEffect} from 'react';

// const Test = () => {
//     const [ua, setUa] = useState([]);
//     const [ru, setRu] = useState([]);
//     const [currentLang, setCurrentLang] = useState('ua');

//     useEffect(() => {
//         fetch('http://localhost:4444/get-ua-text')
//         .then((res) => res.json())
//         .then((res) => {
//             setUa(res);
//             setCurrentLang('ua');
//         })
//     },[])

//     const getUaLang = () => {
//         fetch('http://localhost:4444/get-ua-text')
//         .then((res) => res.json())
//         .then((res) => {
//             setUa(res);
//             setCurrentLang('ua');
//         })
//     }

//     const getRuLang = () => {
//         fetch('http://localhost:4444/get-ru-text')
//         .then((res) => res.json())
//         .then((res) => {
//             setRu(res);
//             setCurrentLang('ru');
//         })
//     }

//     console.log('ua',ua);
//     console.log('ru',ru);
//     console.log('currentLang',currentLang);

//     return (
//         <div>
//             <p>Test</p>
//             <button onClick={getUaLang}>Ua</button>
//             <button onClick={getRuLang}>Ru</button>
//             <p>{currentLang == 'ua' ? ua[0]?.value : ru[0]?.привіт}</p>
//         </div>
//     );
// };

// export default Test;

import React, {useState, useEffect} from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../hooks/use-localstorage';
const Test = () => {
    const [ua, setUa] = useState([]);
    const [ru, setRu] = useState([]);
    const [currentLang, setCurrentLang] = useState('ua');
    const [language, setLanguage] = useLocalStorage('language', 'Ua');
    const { t } = useTranslation();


    const handleLenguageChange = (e) => {
        i18n.changeLanguage(e);
        setLanguage(e);
    };

    // useEffect(() => {
    //     fetch('http://localhost:4444/get-ua-text')
    //     .then((res) => res.json())
    //     .then((res) => {
    //         setUa(res);
    //         setCurrentLang('ua');
    //     })
    // },[])

    const getUaLang = () => {
        fetch('http://localhost:4444/get-ua-text')
        .then((res) => res.json())
        .then((res) => {
            setUa(res);
            setCurrentLang('ua');
        })
    }

    const getRuLang = () => {
        fetch('http://localhost:4444/get-ru-text')
        .then((res) => res.json())
        .then((res) => {
            setRu(res);
            setCurrentLang('ru');
        })
    }

    console.log('ua',ua);
    console.log('ru',ru);
    console.log('currentLang',currentLang);

    return (
        <div>
            <p>Test</p>
            <button onClick={() => handleLenguageChange('Ua')}>Ua</button>
            <button onClick={() => handleLenguageChange('Ru')}>Ru</button>
            <p>{t('hi')}</p>
        </div>
    );
};

export default Test;