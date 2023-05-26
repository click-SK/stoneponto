import React,{useState, useEffect} from 'react';
import '../style/loginForm.scss';
const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        
    }


    return (
        <div className="login_wrap">
            <div className="login_block">
            <h2 className="login_title">Вхід для адміністрації</h2>
            <div className="input_wrap">
                <input type='text' 
                value={login} onChange={(e) => setLogin(e.target.value)}
                placeholder='Логін'/>
            </div>
            <div className="input_wrap">
                <input type='password' 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder='Пароль'/>
            </div>
            <div className="login_button_wrap">
                <button className="login_button" onClick={handleSubmit}>Увійти</button>
            </div>
        </div>
        </div>
    );
};

export default LoginForm;