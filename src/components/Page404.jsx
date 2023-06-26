import React from 'react';
import { useNavigate } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import '../style/404.scss'
const Page404 = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div className='page_404_wrapper'>
            <div className='name_404'>404</div>
            <div className='text_404'>{t(`This page does not exist`)}!</div>
            <div className='button_wrap_404'>
            <button onClick={handleNavigate}>
            {t(`The main`)}
                <AiOutlineHome style={{marginLeft:'10px', height:'20px', width:'auto'}}/>
            </button>
            </div>
        </div>
    );
};

export default Page404;