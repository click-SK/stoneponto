import React from 'react';
import '../style/footer.scss'

const Footer = () => {
    return (
        <div className='footer_wraper'>
            <img src="./img/logol.png" alt="" />
            <div>
              <p>Украина, Одесская обл., г. Одесса, ponto-print@ukr.net</p>
              <p>+380509767417</p>
              <p>+380966267481</p>
            </div>
        </div>
    );
};

export default Footer;