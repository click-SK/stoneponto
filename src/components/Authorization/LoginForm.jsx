import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, currentUser } from '../../store/auth';
import { useNavigate } from "react-router-dom";
import '../../style/loginForm.scss';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(currentUser);
  const { t } = useTranslation();

  const handleSubmit = async () => {
    const data = await dispatch(fetchAuth({
      name: login,
      password: password
    }));

    if (data.payload.message === 'User disabled') {
      alert('Вас заблоковано, зверніться до менеджера');
    }

    if (data.payload.message === 'User not found' || data.payload.message === 'Password not found') {
      alert('Невірний логін чи пароль');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      navigate('/');
      window.location.reload();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

//   const handleClick = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

  return (
    <div className="login_wrap"> {/* Додано обробник події onClick */}
      <div className="login_block">
        <h2 className="login_title">Вхід</h2>
        <div className="input_wrap">
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(`Login`)}
          />
        </div>
        <div className="input_wrap">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(`Password`)}
          />
        </div>
        <div className="login_button_wrap">
          <button className="login_button" onClick={handleSubmit}>{t(`Sign in`)}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;