import React, {useState} from "react";
import EditCalculatorCurrentItem from "./EditCalculatorCurrentItem";
const EditCalculatorCurrentArray = ({ currentArray, mainId, editPath, setIsFetch, goodsIndex }) => {
    const [isOpen, setIsOpen] = useState(false);
  console.log("currentArray", currentArray);
  
  // Видаляємо перший елемент масиву
  const arrayWithoutFirstElement = currentArray.slice(1);

  return (
    <div>
      {arrayWithoutFirstElement.map((item, idx) => (
        <EditCalculatorCurrentItem 
        key={item._id}
        item={item}
        mainId={mainId}
        editPath={editPath}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        currentItemIndex={idx + 1}/>
      ))}
    </div>
  );
};

export default EditCalculatorCurrentArray;