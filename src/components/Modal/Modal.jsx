import React from "react";
import DisplayCurrentTransaction from './DisplayCurrentTransaction'
import {AiOutlineClose} from 'react-icons/ai';
import '../../style/historyTransactionsModal.scss';
const Modal = ({ isOpen, onClose, historyData }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-btn" onClick={onClose}>
          <AiOutlineClose className="cross"/>
          </button>
          <div className="furniture_wrap">
            {historyData.map((transaction) => (
              <DisplayCurrentTransaction 
              key={transaction._id}
              transaction={transaction}/>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  