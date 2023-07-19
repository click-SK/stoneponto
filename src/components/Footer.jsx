import React from 'react';
import { useTranslation } from "react-i18next";
import '../style/footer.scss';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='footer_wraper'>
            <img src="./img/logol.png" alt="" />
            <div>
            <p>{t(`Ukraine. Odessa`)}</p>
              <p>+380 96 626 7481</p>
              <p>+380 50 976 7417</p>
              <p>ponto-print@ukr.net</p>
            </div>
        </div>
    );
};

export default Footer;