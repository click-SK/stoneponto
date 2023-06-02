import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import EditCalculatorCurrentTitleBlock from "./EditCalculatorCurrentTitleBlock";
import EditCalculatorRightBlock from './EditCalculatorRightBlock';
const EditCalculatorFullTitleBlock = ({ goods, mainId, setIsFetch }) => {
  const [currentName, setCurrentName] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  console.log('currentItem',currentItem);

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
                setCurrentItem={setCurrentItem}
                />
            ))}
        </div>
        <div className='aside_list_right'>
          <EditCalculatorRightBlock
          arrayGoods={currentItem}
          isOpen={currentName == (lang == "Ua" ? currentItem?.nameUa : currentItem?.nameRu) ? true : false}
          />
        </div>
      </div>
  );
};

export default EditCalculatorFullTitleBlock;
