import React, {useState, useEffect} from "react";
import EditCalculatorCurrentItem from "./EditCalculatorCurrentItem";
import { useTranslation } from 'react-i18next';
const EditCalculatorCurrentArray = ({ currentArray, mainId, editPath, setIsFetch, goodsIndex, isFetch }) => {
  const [arrayWithoutFirstElement, setArrayWithoutFirstElement] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    if(Array.isArray(currentArray)) {
      const arr = currentArray.slice(1);
      setArrayWithoutFirstElement(arr);
    }
  },[currentArray])

  return (
    <div className="goods_edit_wrap">
      <div className="goods_edit_wrap_header">
        <p>{t(`Title`)}</p>
        <p>{t(`Price`)}</p>
      </div>
      {arrayWithoutFirstElement.length != 0 && 
      arrayWithoutFirstElement.map((item, idx) => (
        <EditCalculatorCurrentItem 
        key={item._id}
        item={item}
        mainId={mainId}
        editPath={editPath}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        currentItemIndex={idx + 1}
        isFetch={isFetch}/>
      ))}
    </div>
  );
};

export default EditCalculatorCurrentArray;