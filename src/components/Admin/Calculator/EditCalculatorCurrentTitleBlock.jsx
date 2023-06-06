import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import EditCalculatorFullData from "./EditCalculatorFullData";
import EditCalculatorAdditionalParameter from "./EditCalculatorAdditionalParameter";
import EditCalculatorCurrentArray from "./EditCalculatorCurrentArray";
import { AiOutlineDown } from "react-icons/ai";

const EditCalculatorFullTitleBlock = ({ arrayGoods, additionalParameter, mainId, setIsFetch, goodsIndex, isOpen, setCurrentName }) => {
    const [isQuality, setIsQuality] = useState(false);
    const [isEyelets, setIsEyelets] = useState(false);
    const [isColor, setIsColor] = useState(false);
    const [isLamination, setIsLamination] = useState(false);
    const [isPoster, setIsPoster] = useState(false);
    const [isSolderingOfGates, setIsSolderingOfGates] = useState(false);
    const [isSolderingPockets, setIsSolderingPockets] = useState(false);
    const [isCutting, setIsCutting] = useState(false);
    const [isMounting, setIsMounting] = useState(false);
    const [isStamp, setIsStamp] = useState(false);
    const [isStretchOnTheStretcher, setIsStretchOnTheStretcher] = useState(false);

    const [isBanerLaminated, setIsBanerLaminated] = useState(false);
    const [isBanerCast, setIsBanerCast] = useState(false);

    const dispatch = useDispatch();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        dispatch(fetchLanguage());
      }, [lang]);

    console.log('arrayGoods',arrayGoods);

    console.log('isBanerLaminated',isBanerLaminated);
    console.log('isBanerCast',isBanerCast);

    const setQualityFunc = () => {
      setIsQuality(true);
      setIsEyelets(false);
      setIsColor(false);
      setIsLamination(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }

    const setEyeletsFunc = () => {
      setIsEyelets(true);
      setIsQuality(false);
      setIsColor(false);
      setIsLamination(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }

    const setColorFunc = () => {
      setIsColor(true);
      setIsEyelets(false);
      setIsQuality(false);
      setIsLamination(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }

    const setLaminationFunc = () => {
      setIsLamination(true);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setPosterFunc = () => {
      setIsPoster(true);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setSolderingOfGatesFunc = () => {
      setIsSolderingOfGates(true);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setSolderingPocketsFunc = () => {
      setIsSolderingPockets(true);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setCuttingFunc = () => {
      setIsCutting(true);
      setIsSolderingPockets(false);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsMounting(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setMountingFunc = () => {
      setIsMounting(true);
      setIsCutting(false);
      setIsSolderingPockets(false);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsStamp(false);
      setIsStretchOnTheStretcher(false);
    }
    const setStampFunc = () => {
      setIsStamp(true);
      setIsMounting(false);
      setIsCutting(false);
      setIsSolderingPockets(false);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
      setIsStretchOnTheStretcher(false);
    }
    const setStretchOnTheStretcherFunc = () => {
      setIsStretchOnTheStretcher(true);
      setIsStamp(false);
      setIsMounting(false);
      setIsCutting(false);
      setIsSolderingPockets(false);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsQuality(false);
    }
    
  return (
    <div className="pricing_calc__edit_item">
      {arrayGoods?.nameUa
      ?
      <>
      <div
        className={`pricing_calc__edit_item_title ${isOpen ? 'pricing_calc__edit_item_title__active' : '' }`}
        onClick={() => setCurrentName((lang == "Ua" ? arrayGoods.nameUa : arrayGoods.nameRu))}
      >
        <p>{lang == "Ua" ? arrayGoods.nameUa : arrayGoods.nameRu}</p>
        <AiOutlineDown />
      </div>
      {isOpen && (
        <div className='pricing_calc_open_goods'>
        {arrayGoods?.color.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.color} 
        title={'Color'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-color'
        openCloseFunc={setColorFunc}
        isOpen={isColor}/>
        }
        {arrayGoods?.eyelets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.eyelets} 
        title={'Eyelets'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-eyelets-price'
        openCloseFunc={setEyeletsFunc}
        isOpen={isEyelets}/>
        }
        {arrayGoods?.lamination.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.lamination} 
        title={'Lamination'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-lamination'
        openCloseFunc={setLaminationFunc}
        isOpen={isLamination}/>
        }
        {arrayGoods?.poster.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.poster} 
        title={'Poster'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-poster'
        openCloseFunc={setPosterFunc}
        isOpen={isPoster}/>
        }
        {arrayGoods?.solderingOfGates.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingOfGates} 
        title={'SolderingOfGates'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-soldering-of-gates'
        openCloseFunc={setSolderingOfGatesFunc}
        isOpen={isSolderingOfGates}/>
        }
        {arrayGoods?.solderingPockets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingPockets} 
        title={'SolderingPockets'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-soldering-pockets'
        openCloseFunc={setSolderingPocketsFunc}
        isOpen={isSolderingPockets}/>
        }
        {arrayGoods?.cutting.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
        title={'Cutting'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-cutting'
        openCloseFunc={setCuttingFunc}
        isOpen={isCutting}/>
        }
        {arrayGoods?.mounting && 
        <EditCalculatorAdditionalParameter
        title={'Mounting'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.mounting}
        setIsFetch={setIsFetch}
        editPath='https://ponto-print.herokuapp.com/update-mounting'
        openCloseFunc={setMountingFunc}
        isOpen={isMounting}/>}
        {arrayGoods?.stamp && 
        <EditCalculatorAdditionalParameter
        title={'WithAStamp'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.stamp}
        setIsFetch={setIsFetch}
        editPath='https://ponto-print.herokuapp.com/update-stamp'
        openCloseFunc={setStampFunc}
        isOpen={isStamp}/>}
        </div>
      )}
      <br />
      </>
      :
      <>
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
        </>
      <br />
      </>}
    </div>
  );
};

export default EditCalculatorFullTitleBlock;