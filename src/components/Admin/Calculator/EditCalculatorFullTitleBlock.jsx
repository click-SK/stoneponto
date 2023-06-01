import React, { useState } from "react";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
const EditCalculatorFullTitleBlock = ({ goods, mainId, setIsFetch }) => {
  const [currentName, setCurrentName] = useState(false);
  console.log('goods',goods);

  console.log('currentName',currentName);

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
            isOpen={currentName == item.name ? true : false}
            currentName={currentName}
            setCurrentName={setCurrentName}
            />
        ))}
    </div>
  );
};

export default EditCalculatorFullTitleBlock;
