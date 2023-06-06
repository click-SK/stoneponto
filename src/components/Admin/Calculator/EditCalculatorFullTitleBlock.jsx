import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
const EditCalculatorFullTitleBlock = ({ goods, mainId, setIsFetch }) => {
  const [currentName, setCurrentName] = useState(false);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
      dispatch(fetchLanguage());
    }, [lang]);

  return (
    <div className="pricing_calc__edit_block">
      <div className='aside_list_left'>
          {goods &&
            goods?.goods.map((item, idx) => (
                <EditCalculatorCurrentTitleBlock
                key={item._id} 
                arrayGoods={item}
                additionalParameter={''}
                mainId={mainId}
                setIsFetch={setIsFetch}
                goodsIndex={idx}
                isOpen={currentName == (lang == "Ua" ? item.nameUa : item.nameRu) ? true : false}
                currentName={currentName}
                setCurrentName={setCurrentName}
                />
            ))}
        </div>
      </div>
  );
};

export default EditCalculatorFullTitleBlock;