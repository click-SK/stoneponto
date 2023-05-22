import React, { useState } from "react";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
const EditCalculatorFullTitleBlock = ({ goods, mainId, setIsFetch }) => {
  console.log('mainId',mainId);
  return (
    <div style={{ paddingTop: "30px" }}>
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
