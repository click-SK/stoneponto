import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../../../style/historyTransactionsModal.scss";

const DeletetableModal = ({ isOpen, onClose, setDeleteText, deleteText, handleDelete }) => {
  const [textareaValue, setTextareaValue] = useState("");

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
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value="Макет не в размере"
              checked={deleteText === "Макет не в размере"}
              onChange={handleOptionChange}
            />
            <p>Макет не в размере</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value="Слетели шпифты"
              checked={deleteText === "Слетели шпифты"}
              onChange={handleOptionChange}
            />
            <p>Слетели шпифты</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value="По желанию заказчика"
              checked={deleteText === "По желанию заказчика"}
              onChange={handleOptionChange}
            />
            <p>По желанию заказчика</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value="Макет в версии Corel выше 16. Версия должна быть 16 или ниже"
              checked={deleteText === "Макет в версии Corel выше 16. Версия должна быть 16 или ниже"}
              onChange={handleOptionChange}
            />
            <p>Макет в версии Corel выше 16. Версия должна быть 16 или ниже</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value="Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100"
              checked={deleteText === "Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100"}
              onChange={handleOptionChange}
            />
            <p>Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100</p>
          </div>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              value=""
              checked={deleteText !== "Черный цвет в макете не композитный или чересчур композитный. Черный должен быть 60,60,60,100" && 
              deleteText !== "Макет в версии Corel выше 16. Версия должна быть 16 или ниже" &&
              deleteText !== "По желанию заказчика" &&
              deleteText !== "Слетели шпифты" &&
              deleteText !== "Макет не в размере"
            }
              onChange={handleOptionChange}
            />
            <textarea
              value={textareaValue}
              onChange={(e) => handleTextareaChange(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleDelete}>Видалити</button>
        <button onClick={onClose}>Відміна</button>
      </div>
    </div>
  );
};

export default DeletetableModal;