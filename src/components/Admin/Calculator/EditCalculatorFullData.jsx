import React, { useState } from "react";
import EditCalculatorCurrentArray from "./EditCalculatorCurrentArray";
import { AiOutlineDown } from "react-icons/ai";

const EditCalculatorFullData = ({ currentArray, title, mainId, editPath, setIsFetch, goodsIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={() => setIsOpen((state) => !state)}
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
    </div>
  );
};

export default EditCalculatorFullData;
