import React, { useState } from "react";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
const EditCalculatorFullTitleBlock = ({ goods, mainId, setIsFetch }) => {

  return (
    <div className="pricing_calc__edit_block">
      {goods &&
        goods?.goods.map((item, idx) => (
            <EditCalculatorCurrentTitleBlock
            key={item._id} 
            arrayGoods={item}
            additionalParameter={''}
            mainId={mainId}
            setIsFetch={setIsFetch}
            goodsIndex={idx}
            />
        ))}
    </div>
  );
};

export default EditCalculatorFullTitleBlock;
