import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../../store/language";
import EditCalculatorFullData from "./EditCalculatorFullData";
import EditCalculatorAdditionalParameter from "./EditCalculatorAdditionalParameter";

const EditCalculatorRightBlock = ({ arrayGoods, additionalParameter, mainId, setIsFetch, goodsIndex, isOpen, setCurrentName, isFetch }) => {
    const [isEyelets, setIsEyelets] = useState(false);
    const [isColor, setIsColor] = useState(false);
    const [isLamination, setIsLamination] = useState(false);
    const [isPoster, setIsPoster] = useState(false);
    const [isSolderingOfGates, setIsSolderingOfGates] = useState(false);
    const [isSolderingPockets, setIsSolderingPockets] = useState(false);
    const [isCutting, setIsCutting] = useState(false);
    const [isMounting, setIsMounting] = useState(false);
    const [isStamp, setIsStamp] = useState(false);

    const dispatch = useDispatch();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        dispatch(fetchLanguage());
      }, [lang]);

    const setEyeletsFunc = () => {
      setIsEyelets(true);
      setIsColor(false);
      setIsLamination(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }

    const setColorFunc = () => {
      setIsColor(true);
      setIsEyelets(false);
      setIsLamination(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }

    const setLaminationFunc = () => {
      setIsLamination(true);
      setIsColor(false);
      setIsEyelets(false);
      setIsPoster(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }
    const setPosterFunc = () => {
      setIsPoster(true);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsSolderingOfGates(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }
    const setSolderingOfGatesFunc = () => {
      setIsSolderingOfGates(true);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsSolderingPockets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }
    const setSolderingPocketsFunc = () => {
      setIsSolderingPockets(true);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsCutting(false);
      setIsMounting(false);
      setIsStamp(false);
    }
    const setCuttingFunc = () => {
      setIsCutting(true);
      setIsSolderingPockets(false);
      setIsSolderingOfGates(false);
      setIsPoster(false);
      setIsLamination(false);
      setIsColor(false);
      setIsEyelets(false);
      setIsMounting(false);
      setIsStamp(false);
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
      setIsStamp(false);
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
    }

    console.log('isOpen',isOpen);
    
  return (
    <div className="pricing_calc__edit_item">
      {arrayGoods?.nameUa
      &&
      <>
      {isOpen && (
        <div className='pricing_calc_open_goods'>
        {arrayGoods?.color.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.color} 
        title={'Колір'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-color'
        openCloseFunc={setColorFunc}
        isOpen={isColor}
        isFetch={isFetch}/>
        }
        {arrayGoods?.eyelets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.eyelets} 
        title={'Eyelets'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-eyelets-price'
        openCloseFunc={setEyeletsFunc}
        isOpen={isEyelets}
        isFetch={isFetch}/>
        }
        {arrayGoods?.lamination.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.lamination} 
        title={'Ламінація'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-lamination'
        openCloseFunc={setLaminationFunc}
        isOpen={isLamination}
        isFetch={isFetch}/>
        }
        {arrayGoods?.poster.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.poster} 
        title={'Постер'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-poster'
        openCloseFunc={setPosterFunc}
        isOpen={isPoster}
        isFetch={isFetch}/>
        }
        {arrayGoods?.solderingOfGates.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingOfGates} 
        title={'Пропайка подворотов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-soldering-of-gates'
        openCloseFunc={setSolderingOfGatesFunc}
        isOpen={isSolderingOfGates}
        isFetch={isFetch}/>
        }
        {arrayGoods?.solderingPockets.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.solderingPockets} 
        title={'Пропайка карманов'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-soldering-pockets'
        openCloseFunc={setSolderingPocketsFunc}
        isOpen={isSolderingPockets}
        isFetch={isFetch}/>
        }
        {arrayGoods?.cutting.length != 0 &&
        <EditCalculatorFullData currentArray={arrayGoods?.cutting} 
        title={'Порізка'}
        mainId={mainId}
        setIsFetch={setIsFetch}
        goodsIndex={goodsIndex}
        editPath='https://ponto-print.herokuapp.com/update-cutting'
        openCloseFunc={setCuttingFunc}
        isOpen={isCutting}
        isFetch={isFetch}/>
        }
        {arrayGoods?.mounting && 
        <EditCalculatorAdditionalParameter
        title={'Намонтаживание'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.mounting}
        setIsFetch={setIsFetch}
        editPath='https://ponto-print.herokuapp.com/update-mounting'
        openCloseFunc={setMountingFunc}
        isOpen={isMounting}
        isFetch={isFetch}/>}
        {arrayGoods?.stamp && 
        <EditCalculatorAdditionalParameter
        title={'Печать'}
        mainId={mainId}
        goodsIndex={goodsIndex}
        data={arrayGoods?.stamp}
        setIsFetch={setIsFetch}
        editPath='https://ponto-print.herokuapp.com/update-stamp'
        openCloseFunc={setStampFunc}
        isOpen={isStamp}
        isFetch={isFetch}/>}
        </div>
      )}
      {/* <br />
      </>
      :
      <>
        <>
        </>
      <br /> */}
      </>}
    </div>
  );
};

export default EditCalculatorRightBlock;