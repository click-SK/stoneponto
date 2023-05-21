import React, { useState } from "react";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
const EditCalculatorTitleBlock = ({ goods, mainId, setIsFetch }) => {
  console.log("goods", goods);
  console.log("mainId", mainId);
  // console.log("goods[1].eyeletsSizePrice", goods[1].eyeletsSizePrice);

  return (
    <div style={{ paddingTop: "30px" }}>
      {goods &&
        goods?.goods.map((item, idx) => (
            <EditCalculatorCurrentTitleBlock
            key={item._id} 
            arrayGoods={item}
            additionalParameter={goods?.eyeletsSizePrice}
            mainId={mainId}
            setIsFetch={setIsFetch}
            goodsIndex={idx}
            />
        ))}
    </div>
  );
};

export default EditCalculatorTitleBlock;
