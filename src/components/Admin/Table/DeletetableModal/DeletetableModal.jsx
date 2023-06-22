import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
// import "../../../../style/historyTransactionsModal.scss";

const DeletetableModal = ({ isOpen, onClose, setDeleteText, deleteText, handleDelete }) => {
  const [textareaValue, setTextareaValue] = useState("");

  const { t } = useTranslation();

  const handleOptionChange = (event) => {
    setDeleteText(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setDeleteText(event);
    setTextareaValue(event);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <AiOutlineClose className="cross" />
        </button>
        <div className="furniture_wrap">
          <div className="modal_wrap_item">
            <input
              className="wrap_item_input"
              type="radio"
              value="Макет не в размере"
              checked={deleteText === "Макет не в размере"}
              onChange={handleOptionChange}
            />
            <p>{t(`Layout not in size`)}</p>
          </div>
          <div className="wrap_item">
            <input
              type="radio"
              value="Слетели шпифты"
              checked={deleteText === "Слетели шпифты"}
              onChange={handleOptionChange}
            />
            <p>{t(`Flew fonts`)}</p>
          </div>
          <div className="wrap_item" >
            <input
              className="wrap_item_input"
              type="radio"
              value="По желанию заказчика"
              checked={deleteText === "По желанию заказчика"}
              onChange={handleOptionChange}
            />
            <p>{t(`At the request of the custome`)}</p>
          </div>
          <div className="wrap_item">
            <input
              className="wrap_item_input"
              type="radio"
              value="Макет в версии Corel выше 16. Версия должна быть 16 или ниже"
              checked={deleteText === "Макет в версии Corel выше 16. Версия должна быть 16 или ниже"}
              onChange={handleOptionChange}
            />
            <p>{t(`Layout in Corel version above 16. Version must be 16 or below`)}</p>
          </div>
          <div className="wrap_item">
            <input
              className="wrap_item_input"
              type="radio"
              value="Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100"
              checked={deleteText === "Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100"}
              onChange={handleOptionChange}
            />
            <p>{t(`The black color in the layout is not composite or too composite. Black should be 60,60,60,100`)}</p>
          </div>
          <div className="wrap_item item_textarea">
            <input
              className="wrap_item_input"
              type="radio"
              value=""
              checked={deleteText !== "Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100" && 
              deleteText !== "Макет в версии Corel выше 16. Версия должна быть 16 или ниже" &&
              deleteText !== "По желанию заказчика" &&
              deleteText !== "Слетели шпифты" &&
              deleteText !== "Макет не в размере"
            }
              onChange={handleOptionChange}
            /> {t(`Your option`)}
            <textarea
              value={textareaValue}
              onChange={(e) => handleTextareaChange(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleDelete} style={{marginRight:'5px', backgroundColor:'red'}}>Видалити</button>
        <button onClick={onClose}>Відміна</button>
      </div>
    </div>
  );
};

export default DeletetableModal;