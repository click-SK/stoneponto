import React from 'react';

const InputsTamplate = ({handleCangeInput, value, type, placeholder,title}) => {
    return (
        <div className='input'>
            <h3>{title}</h3>
            <input type={type} placeholder={placeholder} value={value} onChange= {(e)=>handleCangeInput(e.target.value)} />
        </div>
    );
};

export default InputsTamplate;