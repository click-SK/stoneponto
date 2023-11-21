import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/downloadFile.scss";
import { BASE_URL } from "../../http/BaseUrl";
const DownloadProgram = () => {
  const { t } = useTranslation();

  const dowloadProgram = async () => {
    try {
      const resonse = await fetch(`${BASE_URL}/download-program`);
  
      if (resonse.status == 200) {
        const link = document.createElement("a");
        link.href = `${BASE_URL}/download-program`;
        document.body.appendChild(link);
        link.click();
      }
    } catch(error) {
      console.log('error',error);
    }
  };

  return (
    <div className="download_program_wrap">
      <div className="download_program_text_wrap">
        <p className="download_program_text">{t("This program")}</p>
      </div>
      <div className="download_program_button_wrap">
        <button className="download_program_button" onClick={dowloadProgram}>
          {t("Download")}
        </button>
      </div>
    </div>
  );
};

export default DownloadProgram;
