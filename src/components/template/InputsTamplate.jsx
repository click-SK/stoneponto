import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

const InputsTamplate = ({handleCangeInput, value, type, placeholder,title, disabled}) => {
    const { t } = useTranslation();

    return (
        <div className='input'>
            <h3>{t(`${title}`)}</h3>
            <input type={type} 
            placeholder={t(`${placeholder}`)}
            value={value} 
            disabled={disabled} 
            onChange= {(e)=>handleCangeInput(e.target.value)} />
        </div>
    );
};

export default InputsTamplate;