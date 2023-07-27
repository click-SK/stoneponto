import React from 'react';
import { useTranslation } from "react-i18next";
import DownloadProgram from '../calculator/DownloadProgram';
const ModalProgram = ({ isOpen, setIsOpen }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
        <div className="modal">
        <title>
          <button onClick={() => setIsOpen(!isOpen)}>{t(`Close`)}</button>
        </title>
        <DownloadProgram/>
        </div>
      </div>
    );
};

export default ModalProgram;