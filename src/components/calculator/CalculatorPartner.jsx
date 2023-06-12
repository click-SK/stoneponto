import React, {useState,useEffect} from 'react';
import Select from './Select'
import SelectSec from './SelectSecond'
import InputsTamplate from '../template/InputsTamplate';
import ModalPrice from './ModalPrice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from "../../store/auth";
import { fetchLanguage } from "../../store/language";
import '../../style/calculator.scss'


const CalculatorPartner = () => {
    const [goodsList, setGoodsList] = useState ([])
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAllusers, setIsOpenAllusers] = useState(false);
    const [currentItem, setcurrentItem] = useState({});
    const [width, setWitdh] = useState('')
    const [height, setHeight] = useState('')
    // const [quadrature, setquadrature] = useState(null)
    const [count, setCount] = useState(1)
    const [description, setDescription] = useState('')
    const [selectedFile, setselectedFile] = useState(null)
    const [coment, setComent] = useState('')
    const [delivery, setDelivery] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [totalSum, setTotalSum] = useState(0)
    const [validationWidth, setValidationWidth] = useState(false);
    const [validationHeight, setValidationHeight] = useState(false);
    const [validationCount, setValidationCount] = useState(false);
    const [validationFile, setValidationFile] = useState(false);
    const [validationCurrentItem, setCurrentItem] = useState(false);
    const [validationOptionQuality, setOptionQuality] = useState(false);
    const [validationOptionColor, setOptionColor] = useState(false);
  
    const [selectedOptionQuality, setSelectedOptionQuality] = useState('');
    const [selectedOptionCutting, setSelectedOptionCutting] = useState('');
    const [selectedOptionSolderGates, setSelectedOptionSolderGates] = useState('');
    const [selectedOptionSolderPockets, setSelectedOptionSolderPockets] = useState('');
    const [selectedOptionLamination, setSelectedOptionLamination] = useState('');
    const [selectedOptionColor, setSelectedOptionColor] = useState('');
    const [selectedOptionPoster, setSelectedOptionPoster] = useState('');
    const [selectedOptionEyelets, setSelectedOptionEyelets] = useState('');
    const [selectedOptionEyeletsValue, setSelectedOptionEyeletsValue] = useState(30);
    const [isStamp, setIsStamp] = useState(false);
    const [isStretch, setIsStretch] = useState(false);
    const [isMounting, setIsMounting] = useState(false);
    const [descArray, setdescArray] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [currentUserState, setCurrentUserState] = useState('');
    const [currentDiscount, setCurrentDiscount] = useState('');
    const [status] = useState({
      name: 'New',
      currentStatus: 'new',
      paid: false
    });

    const { t } = useTranslation();

    const {currency} = useSelector((state) => state.currency);
    
    const quadrature = ((Number(width) * Number(height))/1000000)

    const user = useSelector(currentUser);
    const dispatch = useDispatch();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-calc')
       .then(response => response.json())
       .then(res => setGoodsList(res))
     },[])

     useEffect(() => {
      fetch('https://ponto-print.herokuapp.com/get-all-user')
     .then(response => response.json())
     .then(res => {
      setAllUsers(res);
      const newArr = res.filter((item) => user._id == item._id);
      setCurrentId(newArr[0]._id);
    })
   },[user])

   useEffect(() => {
    dispatch(fetchLanguage())
  },[lang])

    

  useEffect(() =>{
    const descriptionObj = {
      cutting: {
        option: selectedOptionCutting?.price ? (lang == "Ua" ? 'Порізка: ' : 'Порезка: ') : '',
        name: selectedOptionCutting?.price ? (lang == "Ua" ? selectedOptionCutting?.nameUa : selectedOptionCutting?.nameRu) : '',
      },
      solderGates: {
        option: selectedOptionSolderGates?.price ? (lang == "Ua" ? 'Пропаювання підворіт: ' : 'Пропайка подворотов: ') : '',
        name: selectedOptionSolderGates?.price ? (lang == "Ua" ? selectedOptionSolderGates?.nameUa : selectedOptionSolderGates?.nameRu) : '',
      },
      solderPockets: {
        option: selectedOptionSolderPockets?.price ? (lang == "Ua" ? 'Пропаювання кишень: ' : 'Пропайка карманов: ') : '',
        name: selectedOptionSolderPockets?.price ? (lang == "Ua" ? selectedOptionSolderPockets?.nameUa : selectedOptionSolderPockets?.nameRu) : '',
      },
      lamination: {
        option: selectedOptionLamination?.price ? (lang == "Ua" ? 'Ламінація: ' : 'Ламинация: ') : '',
        name: selectedOptionLamination?.price ? (lang == "Ua" ? selectedOptionLamination?.nameUa : selectedOptionLamination?.nameRu) : '',
      },
      poster: {
        option: selectedOptionPoster?.price ? (lang == "Ua" ? 'Постер: ' : 'Постер: ') : '',
        name: selectedOptionPoster?.price ? (lang == "Ua" ? selectedOptionPoster?.nameUa : selectedOptionPoster?.nameRu) : '',
      },
      stretch: {
        name:  isStretch ? (lang == "Ua" ? 'Натяжка на підрамник: ' : 'Натяжка на подрамник: ') : ''
      },
      stamp: {
        name: isStamp ? (lang == "Ua" ? 'З печаткою: ' : 'С печатью: ') : ''
      },
      mounting: {
        name:  isMounting ? (lang == "Ua" ? 'Намонтування: ' : 'Намонтаживание: ') : ''
      },
      eyelets: {
        option: selectedOptionEyelets ? (lang == "Ua" ? ' Люверси: ' : ' Люверсы: ') : '',
        name: selectedOptionEyelets ? (lang == "Ua" ? selectedOptionEyelets?.nameUa : selectedOptionEyelets?.nameRu) : '',
        value: selectedOptionEyelets ? ` ${selectedOptionEyeletsValue} см` : ''
      } 
    }
    setdescArray(descriptionObj);
   },[selectedOptionCutting,isMounting,selectedOptionEyelets,selectedOptionEyeletsValue,
    selectedOptionSolderPockets,selectedOptionSolderGates,selectedOptionPoster,selectedOptionLamination,isStretch])
     

     useEffect(() =>{
      const totalSum1 = (quadrature * selectedOptionQuality?.price * currency.currency || 0) +
     (selectedOptionCutting?.price * currency.currency || 0) + (selectedOptionSolderGates?.price * currency.currency || 0)+
     (selectedOptionSolderPockets?.price * currency.currency || 0) + (selectedOptionLamination?.price * currency.currency || 0) +
     (selectedOptionPoster?.price * currency.currency || 0) + (isStamp ? currentItem?.stamp : 0) + 
     (isStretch ? currentItem?.goods && currentItem?.goods[0]?.stretchOnTheStretcher : 0) +
     (isMounting ? currentItem?.mounting: 0);
      
     
     // Если в заказе, по квадратным метрам больше 20 квадратов, то на общую сумму присваивается скидка -10%. 

     const sumAndCount = totalSum1 * count;

     const onlyDiscount = sumAndCount * (user.discountValue || currentDiscount);

     const sumAndDiscount = sumAndCount - onlyDiscount;

     setTotalSum(sumAndDiscount)

     },[count, selectedOptionCutting, selectedOptionSolderGates,selectedOptionSolderPockets,
      selectedOptionLamination, selectedOptionPoster,selectedOptionColor,isStamp,selectedOptionQuality,isStretch,isMounting,currentDiscount])

      useEffect(()=>{
        setSelectedOptionQuality('');
        setSelectedOptionCutting('');
        setSelectedOptionSolderGates('');
        setSelectedOptionSolderPockets('');
        setSelectedOptionLamination('');
        setSelectedOptionColor('');
        setSelectedOptionPoster('');
        setIsStamp(false);
        setIsStretch(false);
        setIsMounting(false);
        setWitdh('');
        setHeight('');
        setCount('');
        setComent('');
        setDelivery('');
      },[currentItem])

    const finlObj = {
      material: (lang == "Ua" ? currentItem?.nameUa : currentItem?.nameRu),
      width: width,
      height:height,
      count:count,
      adding:descArray,
      coment:coment ? coment : '',
      deliveryt:delivery ? delivery : '',
      totalSumt:totalSum ? totalSum : '',
      // quality:selectedOptionQuality ? selectedOptionQuality.name : '',
      // cuting:selectedOptionCutting ? selectedOptionCutting.name : '',
      // gates:selectedOptionSolderGates ? selectedOptionSolderGates.name : '',
      // pockets:selectedOptionSolderPockets ? selectedOptionSolderPockets.name : '',
      // lamination:selectedOptionLamination ? selectedOptionLamination.name : '',
      // color:selectedOptionColor ? selectedOptionColor.name : '',
      // poster:selectedOptionPoster ? selectedOptionPoster.name : '',
      // eyelets:selectedOptionEyelets ? selectedOptionEyelets.name : '',
    }  


     
    const handleChange = (event) =>{
        const file = event.target.files[0];

        if (file) {
            setselectedFile(file);
        }
    }

    console.log('selectedFile',selectedFile);

    const validationFunc = () => {
      setValidationWidth(false);
      setValidationHeight(false);
      setValidationCount(false);
      setCurrentItem(false);
      setOptionQuality(false);
      setOptionColor(false);
      let isValid = true;
    
      // if (currentItem <= 0) {
      //   setCurrentItem(true);
      //   isValid = false;
      // }

      // if (selectedOptionQuality <= 0) {
      //   setOptionQuality(true);
      //   isValid = false;
      // }
      // if (selectedOptionColor <= 0) {
      //   setOptionColor(true);
      //   isValid = false;
      // }

      if (width <= 0) {
        setValidationWidth(true);
        isValid = false;
      }
    
      if (height <= 0) {
        setValidationHeight(true);
        isValid = false;
      }
    
      if (count <= 0) {
        setValidationCount(true);
        isValid = false;
      }

      if(!selectedFile) {
        setValidationFile(true);
        isValid = false;
      }
    
      return isValid;
    };

    const handleTotalSum = () => {
      const isValid = validationFunc();
    
      if (isValid) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append(
          "material",
          lang === "Ua" ? currentItem?.nameUa : currentItem?.nameRu
        );
        formData.append(
          "quality",
          lang === "Ua" ? selectedOptionQuality?.nameUa : selectedOptionQuality?.nameRu
        );
        formData.append("width", width);
        formData.append("height", height);
        formData.append("count", count);
        formData.append("userId", currentId);
        formData.append("sum", totalSum);
        formData.append("conditions", JSON.stringify(descArray));
        formData.append("notes", coment);
        formData.append("address", delivery);
        formData.append("status", JSON.stringify(status));
    
        fetch("https://ponto-print.herokuapp.com/create-table", {
          method: "POST",
          body: formData,
        }).then((res) => res.json());
    
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };

    const handleStamp = () =>{
      setIsStamp(state => !state)
    }
    const handleStretch = () =>{
      setIsStretch(state => !state)
    }
    const handleMounting = () =>{
      setIsMounting(state => !state)
    }

    const setCurrentIdFunc = (e) => {
      setIsOpenAllusers((state) => !state)
      setCurrentId(e._id);
      setIsOpenAllusers((state) => !state);
      console.log('e',e.name);
      setCurrentUserState(e?.name);
      setCurrentDiscount(e.discountValue)
      console.log('user',e);
    }

    return (
      <div className="calc_wrap">
        <title>
          {/* <h2>Загрузка файла</h2> */}
          {user && user?.isAdmin && (
            <div
              className="custom-select select_user"
              onClick={() => setIsOpenAllusers((state) => !state)}
            >
              {allUsers.length != 0 && (currentUserState || allUsers[0].name)}
              {isOpenAllusers && (
                <div className="options">
                  {allUsers.length != 0 &&
                    allUsers.map((user) => (
                      <p
                        onClick={() => setCurrentIdFunc(user)}
                        key={user._id}
                      >
                        {user.name}
                      </p>
                    ))}
                </div>
              )}
            </div>
          )}
          <button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {t(`Prices for 1m2`)}
          </button>
          <ModalPrice
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            goodsList={goodsList}
          />
        </title>
        <div className="wrap_row">
          <div className="calc-item material">
            <h3>{t(`Material`)}</h3>
            <Select goods={goodsList} setcurrentItem={setcurrentItem} />
          </div>
          <div className="calc-item quality">
            {currentItem?.color && currentItem?.color != 0 && (
              <SelectSec
                item={currentItem?.color}
                title={"Color"}
                selectedOption={selectedOptionColor}
                setSelectedOption={setSelectedOptionColor}
              />
            )}
            {currentItem?.quality && currentItem?.quality.length != 0 && (
              <SelectSec
                item={currentItem?.quality}
                title={"Quality"}
                selectedOption={selectedOptionQuality}
                setSelectedOption={setSelectedOptionQuality}
              />
            )}
            {currentItem?.goods && currentItem?.goods.length != 0 && (
              <SelectSec
                item={currentItem?.goods[0]?.quality}
                title={"Quality"}
                selectedOption={selectedOptionQuality}
                setSelectedOption={setSelectedOptionQuality}
              />
            )}
          </div>
        </div>
        <div className="wrap_row">
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Width"}
              type={"number"}
              placeholder={"Enter the width in mm"}
              value={width}
              handleCangeInput={setWitdh}
            />
            {validationWidth &&
            <p style={{color:'red'}}>{t(`Validation width`)}</p>}
          </div>
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Height"}
              type={"number"}
              placeholder={"Enter the height in mm"}
              value={height}
              handleCangeInput={setHeight}
            />
            {validationHeight &&
            <p style={{color:'red'}}>{t(`Validation height`)}</p>}
          </div>
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Circulation"}
              type={"number"}
              placeholder={"Enter circulation"}
              value={count}
              handleCangeInput={setCount}
            />
            {validationCount &&
            <p style={{color:'red'}}>{t(`Validation circulation`)}</p>}
          </div>
        </div>
        <div className="wrap_row adding">
          <div className="colum ">
            {currentItem?.eyelets && currentItem?.eyelets.length != 0 && (
              <div className="eyelets_wrap">
                <SelectSec
                  item={currentItem?.eyelets}
                  title={"Eyelets"}
                  selectedOption={selectedOptionEyelets}
                  setSelectedOption={setSelectedOptionEyelets}
                />
                {selectedOptionEyelets?.nameUa !== "По кутах" ? (
                  <InputsTamplate
                    title={"через (cм)"}
                    type={"text"}
                    placeholder={"30"}
                    value={selectedOptionEyeletsValue}
                    handleCangeInput={setSelectedOptionEyeletsValue}
                  />
                ) : (
                  <InputsTamplate
                    title={"через (cм)"}
                    type={"text"}
                    placeholder={"30"}
                    value={selectedOptionEyeletsValue}
                    handleCangeInput={setSelectedOptionEyeletsValue}
                    disabled={true}
                  />
                )}
              </div>
            )}
            {currentItem?.cutting && currentItem?.cutting.length != 0 && (
              <SelectSec
                item={currentItem?.cutting}
                title={"Cutting"}
                selectedOption={selectedOptionCutting}
                setSelectedOption={setSelectedOptionCutting}
              />
            )}
            {currentItem &&
              currentItem.goods &&
              currentItem.goods.length > 0 &&
              currentItem.goods[0].cutting.length !== 0 && (
                <SelectSec
                  item={currentItem.goods[0].cutting}
                  title={"Cutting"}
                  selectedOption={selectedOptionCutting}
                  setSelectedOption={setSelectedOptionCutting}
                />
              )}
            {currentItem?.lamination && currentItem?.lamination.length != 0 && (
              <SelectSec
                item={currentItem?.lamination}
                title={"Lamination"}
                selectedOption={selectedOptionLamination}
                setSelectedOption={setSelectedOptionLamination}
              />
            )}
            {currentItem?.poster && currentItem?.poster.length != 0 && (
              <SelectSec
                item={currentItem?.poster}
                title={"Poster"}
                selectedOption={selectedOptionPoster}
                setSelectedOption={setSelectedOptionPoster}
              />
            )}

            {currentItem?.goods &&
              currentItem?.goods[0]?.stretchOnTheStretcher && (
                <div>
                  <h3>{t(`"StretchOnTheStretcher"`)}</h3>
                  <input
                    type="checkbox"
                    value={isStretch}
                    onChange={handleStretch}
                  />
                </div>
              )}
            {currentItem?.mounting && (
              <div>
                <h3>{t(`Mounting`)}</h3>
                <input
                  type="checkbox"
                  value={isMounting}
                  onChange={handleMounting}
                />
              </div>
            )}
            {currentItem?.stamp && (
              <div>
                <h3>{t(`WithAStamp`)}</h3>
                <input type="checkbox" value={isStamp} onChange={handleStamp} />
              </div>
            )}
            {currentItem?.solderingOfGates &&
              currentItem?.solderingOfGates.length != 0 && (
                <div className="soldering">
                  <div className="soldering_item">
                    <SelectSec
                      item={currentItem?.solderingOfGates}
                      title={"SolderingOfGates"}
                      selectedOption={selectedOptionSolderGates}
                      setSelectedOption={setSelectedOptionSolderGates}
                    />
                  </div>
                  <div className="soldering_item">
                    <SelectSec
                      item={currentItem?.solderingPockets}
                      title={"SolderingPockets"}
                      selectedOption={selectedOptionSolderPockets}
                      setSelectedOption={setSelectedOptionSolderPockets}
                    />
                  </div>
                </div>
              )}
          </div>
          <div className="colum upload">
            <h3>Файл</h3>
            <input
              type="file"
              accept=".jpg, .tif, .rar, .zip, .7z, .cdr"
              onChange={handleChange}
            />
          </div>
          {validationFile &&
          <p style={{color:'red'}}>{t(`File not selected`)}</p>}
        </div>
        {/* {t(`${title}`)} */}
        <div className="wrap_row">
          <div className="calc-item">
            <h3>{t(`Description`)}</h3>
            <div className="description">
              {/* <textarea name="description" id="" cols="50" rows="6" value={description}  disabled></textarea> */}
              {/* {descArray.length != 0 &&
                Object.entries(descArray)
                  .filter(([_, value]) => value.name !== "")
                  .map(([key, value], idx) => <p key={idx}>{t(`${value}`)}</p>)} */}
              {descArray.length !== 0 &&
                Object.entries(descArray)
                  .filter(([_, value]) => value.name !== "")
                  .map(([key, item], idx) => (
                    <p key={idx}>
                      {t(`${item?.option}`)}
                      {t(`${item?.name}`)}
                      {item?.value}
                    </p>
                  ))}
            </div>
          </div>
          <div className="calc-item">
            <h3>{t(`Notes`)}</h3>
            <textarea
              name="coment"
              id=""
              cols="50"
              rows="6"
              value={coment}
              onChange={(e) => setComent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="wrap_row footer_calc">
          <div className="calc-item delivery">
            <InputsTamplate
              title={t(`Delivery address`)}
              type={"text"}
              placeholder={t(`Address`)}
              value={delivery}
              handleCangeInput={setDelivery}
            />
          </div>
          <div className="total_sum">
            <h3>
              {" "}
              {t(`Total`)}: <p>{totalSum.toFixed(0)}</p> грн
            </h3>
          </div>
          <button onClick={handleTotalSum}>{t(`Download the order`)}</button>
        </div>
        <div></div>
      </div>
    );
};

export default CalculatorPartner;