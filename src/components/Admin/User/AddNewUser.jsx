import React,{useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
const AddNewUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { t } = useTranslation();

    const handleSubmit = async () => {
        const response = await fetch('https://ponto-print.herokuapp.com/register-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
              name
            })
          });
      
          const data = await response.json();

          if(data) {
            setEmail('');
            setPassword('');
            setName('');
            alert('Користувача успішно створено')
          }
    }
    

    return (
        <div className="login_wrap">
            <div className="login_block">
            <div className="input_wrap">
                <input type='text' 
                value={name} onChange={(e) => setName(e.target.value)} 
                placeholder={t(`Name`)}/>
            </div>
            <div className="input_wrap">
                <input type='text' 
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={t(`Mail`)}/>
            </div>
            <div className="input_wrap">
                <input type='password' 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                placeholder={t(`Password`)}/>
            </div>
            <div className="login_button_wrap">
                <button className="login_button" onClick={handleSubmit}>{t(`Register`)}</button>
            </div>
        </div>
        </div>
    );
};

export default AddNewUser;