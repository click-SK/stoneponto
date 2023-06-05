import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import EditCalculatorFullData from "./EditCalculatorFullData";
import EditCalculatorAdditionalParameter from "./EditCalculatorAdditionalParameter";
import { AiOutlineDown } from "react-icons/ai";

const EditCalculatorFullTitleBlock = ({ arrayGoods, setCurrentItem, isOpen, setCurrentName, mainId, setIsFetch, goodsIndex }) => {
  const [isQuality, setIsQuality] = useState(false);
  const [isCutting, setIsCutting] = useState(false);
  const [isStretchOnTheStretcher, setIsStretchOnTheStretcher] = useState(false);

  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
      dispatch(fetchLanguage());
    }, [lang]);

  const setQualityFunc = () => {
    setIsQuality(true);
    setIsCutting(false);
    setIsStretchOnTheStretcher(false);
  }

  const setCuttingFunc = () => {
    setIsCutting(true);
    setIsQuality(false);
    setIsStretchOnTheStretcher(false);
  }
  const setStretchOnTheStretcherFunc = () => {
    setIsStretchOnTheStretcher(true);
    setIsCutting(false);
    setIsQuality(false);
  }

      const handleFunc = () => {
        setCurrentName(lang == "Ua" ? arrayGoods.nameUa : arrayGoods.nameRu)
        setCurrentItem(arrayGoods);
      }
    
  return (
    <div className="pricing_calc__edit_item">
      {arrayGoods?.nameUa ?
      <div
        className={`pricing_calc__edit_item_title ${isOpen ? 'pricing_calc__edit_item_title__active' : '' }`}
        onClick={handleFunc}
      >
        <p>{lang == "Ua" ? arrayGoods.nameUa : arrayGoods.nameRu}</p>
        <AiOutlineDown />
      </div>
      :
      <>
      {arrayGoods?.quality.length != 0 &&
      <EditCalculatorFullData currentArray={arrayGoods?.quality} 
      title={'Якість'}
      mainId={mainId}
      setIsFetch={setIsFetch}
      goodsIndex={goodsIndex}
      editPath='https://ponto-print.herokuapp.com/update-quality'
      openCloseFunc={setQualityFunc}
      isOpen={isQuality}/>
      }
      {arrayGoods?.cutting.length != 0 &&
      <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
      title={'Порізка'}
      mainId={mainId}
      setIsFetch={setIsFetch}
      goodsIndex={goodsIndex}
      editPath='https://ponto-print.herokuapp.com/update-cutting'
      openCloseFunc={setCuttingFunc}
      isOpen={isCutting}/>
      }
      {arrayGoods?.stretchOnTheStretcher &&
      <EditCalculatorAdditionalParameter data={arrayGoods?.stretchOnTheStretcher} 
      title={'Натяжка на подрамник'}
      mainId={mainId}
      setIsFetch={setIsFetch}
      goodsIndex={goodsIndex}
      editPath='https://ponto-print.herokuapp.com/update-stretch-on-the-stretcher'
      openCloseFunc={setStretchOnTheStretcherFunc}
      isOpen={isStretchOnTheStretcher}/>
      }
      </>}
    </div>
  );
};

export default EditCalculatorFullTitleBlock;