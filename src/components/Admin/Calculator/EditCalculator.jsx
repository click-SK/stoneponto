import React, {useState, useEffect} from 'react';
import EditCalculatorFullTitleBlock from './EditCalculatorFullTitleBlock';
const EditCalculator = () => {
    const [goodsList, setGoodsList] = useState ([]);
    const [isFetch, setIsFetch] = useState(false);
    const [isBaner, setIsBaner] = useState(false);
    const [isPlenca, setIsPlenca] = useState(false);
    const [isPapear, setIsPapear] = useState(false);
    const [isTollingMaterial, setIsTollingMaterial] = useState(false);
    const [isHolst, setIsHolst] = useState(false);
    const [isLightTransmittingPlastic, setIsLightTransmittingPlastic] = useState(false);
    const [isPoliman, setIsPoliman] = useState(false);

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-calc')
       .then(response => response.json())
       .then(res => setGoodsList(res))
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
      <div>
        <div>
          <p onClick={closeOpenBanerFunc}>Банери</p>
          <p onClick={closeOpenPlencaFunc}>Пленка</p>
          <p onClick={closeOpenPapearFunc}>Бумага</p>
          <p onClick={closeOpenTollingMaterialFunc}>Давальческий материал</p>
          <p onClick={closeOpenHolstFunc}>Холст</p>
          <p onClick={closeOpenLightTransmittingPlasticFunc}>Светопропускной пластик</p>
          <p onClick={closeOpenPolimanFunc}>Полиман</p>
        </div>
        <div>
          {isBaner && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[1]}
              mainId={goodsList.length != 0 && goodsList[1]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isPlenca && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[2]}
              mainId={goodsList.length != 0 && goodsList[2]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isPapear && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[3]}
              mainId={goodsList.length != 0 && goodsList[3]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isTollingMaterial && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[4]}
              mainId={goodsList.length != 0 && goodsList[4]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isHolst && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[5]}
              mainId={goodsList.length != 0 && goodsList[5]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isLightTransmittingPlastic && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[6]}
              mainId={goodsList.length != 0 && goodsList[6]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
        <div>
          {isPoliman && (
            <EditCalculatorFullTitleBlock
              goods={goodsList.length != 0 && goodsList[7]}
              mainId={goodsList.length != 0 && goodsList[7]._id}
              setIsFetch={setIsFetch}
            />
          )}
        </div>
      </div>
    );
};

export default EditCalculator;