import React, { useState } from "react";
import EditCalculatorCurrentArray from "./EditCalculatorCurrentArray";
import { AiOutlineDown } from "react-icons/ai";

const EditCalculatorFullData = ({ currentArray, title, mainId, editPath, setIsFetch, goodsIndex, openCloseFunc, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="goods_wrap">
        <div
          className={`goods_title ${isOpen ? 'goods_title_active' : ''}`}
          onClick={openCloseFunc}
        >
          <p>{title}</p>
          <AiOutlineDown />
        </div>
        {isOpen && (
          <EditCalculatorCurrentArray 
          currentArray={currentArray}
          mainId={mainId}
          editPath={editPath}
          setIsFetch={setIsFetch}
          goodsIndex={goodsIndex} />
        )}
      </div>
  );
};

export default EditCalculatorFullData;
