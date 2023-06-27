import React, { useState } from "react";
import EditCalculatorCurrentArray from "./EditCalculatorCurrentArray";
import { useTranslation } from 'react-i18next';
import { AiOutlineDown } from "react-icons/ai";

const EditCalculatorFullData = ({ currentArray, title, mainId, editPath, setIsFetch, goodsIndex, openCloseFunc, isOpen, isFetch }) => {
  const { t } = useTranslation();
  return (
      <div className="goods_wrap">
        <div
          className={`goods_title ${isOpen ? 'goods_title_active' : ''}`}
          onClick={openCloseFunc}
        >
          <p>{t(`${title}`)}</p>
          <AiOutlineDown />
        </div>
        {isOpen && (
          <EditCalculatorCurrentArray 
          currentArray={currentArray}
          mainId={mainId}
          editPath={editPath}
          setIsFetch={setIsFetch}
          goodsIndex={goodsIndex}
          isFetch={isFetch} />
        )}
      </div>
  );
};

export default EditCalculatorFullData;
