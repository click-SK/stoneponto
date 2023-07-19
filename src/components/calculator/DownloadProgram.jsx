import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/downloadFile.scss";
const DownloadProgram = () => {
    const { t } = useTranslation();

    const dowloadProgram = async () => {
      const resonse = await fetch(`http://localhost:4444/download-program`)

      if(resonse.status == 200) {
        const link = document.createElement('a');
        link.href = `http://localhost:4444/download-program`;
        document.body.appendChild(link);
        link.click();
      }
    }

  return (
    <div className="download_program_wrap">
    <div className="download_program_text_wrap">
        <p className="download_program_text">{t('This program')}</p>
    </div>
      <div className="download_program_button_wrap">
        <button 
        className="download_program_button"
        onClick={dowloadProgram}>{t('Download')}</button>
      </div>
    </div>
  );
};

export default DownloadProgram;
