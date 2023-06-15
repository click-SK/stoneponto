import React, {useState, useEffect} from 'react';
import EditCalculatorFullTitleBlock from './EditCalculatorFullTitleBlock';
import { useTranslation } from 'react-i18next';
import '../../../style/editeCalc.scss'

const EditCalculator = () => {
    const [goodsList, setGoodsList] = useState ([]);
    const [isFetch, setIsFetch] = useState(false);
    const [isBaner, setIsBaner] = useState(true);
    const [isPlenca, setIsPlenca] = useState(false);
    const [isPapear, setIsPapear] = useState(false);
    const [isTollingMaterial, setIsTollingMaterial] = useState(false);
    const [isHolst, setIsHolst] = useState(false);
    const [isLightTransmittingPlastic, setIsLightTransmittingPlastic] = useState(false);
    const [isPoliman, setIsPoliman] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:4444/get-all-calc')
       .then(response => response.json())
       .then(res => {
        setGoodsList(res)
        
      })
     },[isFetch])

    

     const closeOpenBanerFunc = () => {
        setIsBaner(state => !state);
        setIsPlenca(false);
        setIsPapear(false);
        setIsHolst(false);
        setIsTollingMaterial(false);
        setIsPoliman(false);
        setIsLightTransmittingPlastic(false);

     }

     const closeOpenPlencaFunc = () => {
        setIsPlenca(state => !state);
        setIsBaner(false);
        setIsPapear(false);
        setIsHolst(false);
        setIsTollingMaterial(false);
        setIsPoliman(false);
        setIsLightTransmittingPlastic(false);

     }

     const closeOpenPapearFunc = () => {
        setIsPapear(state => !state);
        setIsBaner(false);
        setIsPlenca(false);
        setIsHolst(false);
        setIsTollingMaterial(false);
        setIsPoliman(false);
        setIsLightTransmittingPlastic(false);

     }

     const closeOpenTollingMaterialFunc = () => {
        setIsTollingMaterial(state => !state);
        setIsHolst(false);
        setIsBaner(false);
        setIsPlenca(false);
        setIsPapear(false);
        setIsPoliman(false);
        setIsLightTransmittingPlastic(false);

     }

     const closeOpenHolstFunc = () => {
        setIsHolst(state => !state);
        setIsTollingMaterial(false)
        setIsBaner(false);
        setIsPlenca(false);
        setIsPapear(false);
        setIsPoliman(false);
        setIsLightTransmittingPlastic(false);
     }

     const closeOpenLightTransmittingPlasticFunc = () => {
      setIsLightTransmittingPlastic(state => !state);
      setIsHolst(false);
      setIsTollingMaterial(false)
      setIsBaner(false);
      setIsPlenca(false);
      setIsPapear(false);
      setIsPoliman(false);
   }

   const closeOpenPolimanFunc = () => {
    setIsPoliman(state => !state);
    setIsLightTransmittingPlastic(false);
    setIsHolst(false);
    setIsTollingMaterial(false)
    setIsBaner(false);
    setIsPlenca(false);
    setIsPapear(false);
 }

    return (
      <div className='pricing_calc'>
        <div className='pricing_calc__categories'>
          <p className={`categories_item ${isBaner ? 'active_item' : ' '}`} onClick={closeOpenBanerFunc}>{t(`Banners`)}</p>
          <p className={`categories_item ${isPlenca ? 'active_item' : ' '}`}  onClick={closeOpenPlencaFunc}>{t(`Film`)}</p>
          <p className={`categories_item ${isPapear ? 'active_item' : ' '}`}  onClick={closeOpenPapearFunc}>{t(`Paper`)}</p>
          <p className={`categories_item ${isTollingMaterial ? 'active_item' : ' '}`}  onClick={closeOpenTollingMaterialFunc}>{t(`TollingMaterial`)}</p>
          <p className={`categories_item ${isHolst ? 'active_item' : ' '}`}  onClick={closeOpenHolstFunc}>{t(`Canvas`)}</p>
          <p className={`categories_item ${isLightTransmittingPlastic ? 'active_item' : ' '}`}  onClick={closeOpenLightTransmittingPlasticFunc}>{t(`LightTransmittingPlastic`)}</p>
          <p className={`categories_item ${isPoliman ? 'active_item' : ' '}`}  onClick={closeOpenPolimanFunc}>{t(`Polyman`)}</p>
        </div>
        <div  >
          {isBaner && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[1]}
              mainId={goodsList.length != 0 && goodsList[1]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isPlenca && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[2]}
              mainId={goodsList.length != 0 && goodsList[2]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isPapear && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[3]}
              mainId={goodsList.length != 0 && goodsList[3]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isTollingMaterial && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[4]}
              mainId={goodsList.length != 0 && goodsList[4]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isHolst && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[5]}
              mainId={goodsList.length != 0 && goodsList[5]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isLightTransmittingPlastic && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[6]}
              mainId={goodsList.length != 0 && goodsList[6]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
        <div>
          {isPoliman && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[7]}
              mainId={goodsList.length != 0 && goodsList[7]._id}
              setIsFetch={setIsFetch}
              isFetch={isFetch}
            />
          )}
        </div>
      </div>
    );
};

export default EditCalculator;