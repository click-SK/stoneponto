import React from "react";
import { useTranslation } from "react-i18next";
import "../../style/confirmationModal.scss";
const ConfirmationModal = ({isOpen, setIsOpen, func}) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsOpen(!isOpen);
    func()
  }
  return (
    <div className="confirmation_modal_wrap">
        <div className="confirmation_modal_block">
            <div className="confirmation_modal_text_wrap">
                <p className="confirmation_modal_text">Ви дійсно хочите видалити всі данні таблиці?</p>
            </div>
            <div className="confirmation_modal_button_wrap">
            <button className="confirmation_modal_button confirm" onClick={handleConfirm}>Підтвердити</button>
            <button className="confirmation_modal_button cancel" onClick={() => setIsOpen(!isOpen)}>Відміна</button>
            </div>
        </div>
    </div>
  );
};

export default ConfirmationModal;
