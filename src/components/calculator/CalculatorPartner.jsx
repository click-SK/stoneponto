import React, {useState,useEffect} from 'react';
import Select from './Select'
import SelectSec from './SelectSecond'
import InputsTamplate from '../template/InputsTamplate';
import ModalPrice from './ModalPrice';
import '../../style/calculator.scss'


const CalculatorPartner = () => {

    const [goodsList, setGoodsList] = useState ([])
    const [isOpen, setIsOpen] = useState(false);  
    const [currentItem, setcurrentItem] = useState({});
    const [width, setWitdh] = useState('')
    const [height, setHeight] = useState('')
    // const [quadrature, setquadrature] = useState(null)
    const [count, setCount] = useState('')
    const [description, setDescription] = useState('')
    const [selectedFile, setselectedFile] = useState({})
    const [coment, setComent] = useState('')
    const [delivery, setDelivery] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [totalSum, setTotalSum] = useState(0)

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
    
    const quadrature = ((Number(width) * Number(height))/1000000)

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-calc')
       .then(response => response.json())
       .then(res => setGoodsList(res))
     },[])

    //  console.log(goodsList);
  //    useEffect(() => {
  //     const arr = [];
  //     if(selectedOptionQuality) {
  //       arr.push(`${selectedOptionQuality}`);
  //     }
  //     console.log('arr',arr);
  //     setdescArray(state => [state,...arr]);
  //  },[count, selectedOptionCutting, selectedOptionSolderGates,selectedOptionSolderPockets,
  //   selectedOptionLamination, selectedOptionPoster,selectedOptionColor,isStamp ])
     
  useEffect(() =>{
      const descriptionObj = {
        cutting: selectedOptionCutting?.price ? `Порезка: ${selectedOptionCutting?.name}` : '',
        solderGates:selectedOptionSolderGates?.price ? `Пропайка подворотов: ${selectedOptionSolderGates?.name}` : '',
        solderPockets:selectedOptionSolderPockets?.price ? `Пропайка карманов: ${selectedOptionSolderPockets?.name}` : '',
        Lamination:selectedOptionLamination?.price ? `Ламинация: ${selectedOptionLamination?.name}` : '',
        poster:selectedOptionPoster?.price ? `Постер: ${selectedOptionPoster?.name}` : '',
        stretch:isStretch ? `Натяжка на подрамник` : '',
        stamp:isStamp ? `С печатью` : '',
        mounting:isMounting ? `Намонтаживание` : '',
        eyelets: selectedOptionEyelets? `Люверсы: ${selectedOptionEyelets?.name} ${selectedOptionEyeletsValue } см`: '',
      }
      setdescArray(descriptionObj);
     },[selectedOptionCutting,isMounting,selectedOptionEyelets,selectedOptionEyeletsValue,selectedOptionSolderPockets,selectedOptionSolderGates,selectedOptionPoster,selectedOptionLamination,isStretch])
     

     useEffect(() =>{
      const totalSum1 = ((quadrature * selectedOptionQuality?.price || 0) * count) +
     (selectedOptionCutting?.price || 0) + (selectedOptionSolderGates?.price || 0)+
     (selectedOptionSolderPockets?.price || 0) + (selectedOptionLamination?.price || 0) +
     (selectedOptionPoster?.price || 0) + (isStamp ? currentItem?.stamp : 0) + (isStretch ? currentItem?.stretchOnTheStretcher : 0) +
     (isMounting ? currentItem?.mounting: 0);
      
     
     // Если в заказе, по квадратным метрам больше 20 квадратов, то на общую сумму присваивается скидка -10%. 


     setTotalSum(totalSum1)
     },[count, selectedOptionCutting, selectedOptionSolderGates,selectedOptionSolderPockets,
      selectedOptionLamination, selectedOptionPoster,selectedOptionColor,isStamp,selectedOptionQuality,isStretch,isMounting])

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
      material: currentItem.name,
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

    const handleTotalSum = () =>{

        console.log( 'final ',finlObj);
    }

    const handleStamp = () =>{
      setIsStamp(state => !state)
    }
    const handleStretch = () =>{
      setIsStretch(state => !state)
    }
    const handleMounting = () =>{
      setIsMounting(state => !state)
    }


    // Додати люверси + інпут 30 см
    // перевірити суму та опис                  -- 
    // додати модалка ціни за метр              --
    // змінити стилі
    // по сабміт створити кінцевий файл
    // Переробити селект колір, додати пошук 
    return (
      <div className="calc_wrap">
        <title>
          <h2>Загрузка файла</h2>
          <button className="btn" onClick={() => setIsOpen(!isOpen)}>Цены за 1м2</button>
          <ModalPrice
            isOpen = {isOpen}
            setIsOpen = {setIsOpen}
            goodsList = {goodsList}
          />
        </title>
        <div className="wrap_row">
          <div className="calc-item material">
            <h3>Материал</h3>
            <Select goods={goodsList} setcurrentItem={setcurrentItem}/>
          </div>
          <div className="calc-item quality">
            {currentItem?.color && currentItem?.color != 0 
            &&
            <SelectSec
                item={currentItem?.color}
                title={"Цвет"}
                selectedOption={selectedOptionColor}
                setSelectedOption={setSelectedOptionColor}
              />
            }
            {currentItem?.quality && currentItem?.quality.length != 0 
            &&
            <SelectSec
                item={currentItem?.quality}
                title={"Качество"}
                selectedOption={selectedOptionQuality}
                setSelectedOption={setSelectedOptionQuality}
              />
            }
            {currentItem?.goods && currentItem?.goods.length != 0
            &&
            <SelectSec
                item={currentItem?.goods[0]?.quality}
                title={"Качество"}
                selectedOption={selectedOptionQuality}
                setSelectedOption={setSelectedOptionQuality}
              />
            }
          </div>
        </div>
        <div className="wrap_row">
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Ширина"}
              type={"number"}
              placeholder={"Введите ширину в мм."}
              value={width}
              handleCangeInput={setWitdh}
            />
          </div>
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Высота"}
              type={"number"}
              placeholder={"Введите высоту в мм."}
              value={height}
              handleCangeInput={setHeight}
            />
          </div>
          <div className="calc-item input_size">
            <InputsTamplate
              title={"Тираж"}
              type={"number"}
              placeholder={"Введите тираж"}
              value={count}
              handleCangeInput={setCount}
            />
          </div>
        </div>
        <div className="wrap_row adding">
          <div className="colum ">
            {currentItem?.eyelets && currentItem?.eyelets.length != 0 && (
              
                <div className='eyelets_wrap'>
                  <SelectSec
                  item={currentItem?.eyelets}
                  title={"Люверсы"}
                  selectedOption={selectedOptionEyelets}
                  setSelectedOption={setSelectedOptionEyelets}
                  />
                  {selectedOptionEyelets?.name !== 'По углам' ?
                   
                  <InputsTamplate
                    title={"через (cм)"}
                    type={"text"}
                    placeholder={"30"}
                    value={selectedOptionEyeletsValue}
                    handleCangeInput={setSelectedOptionEyeletsValue}
                  />
                  :
                  <InputsTamplate
                    title={"через (cм)"}
                    type={"text"}
                    placeholder={"30"}
                    value={selectedOptionEyeletsValue}
                    handleCangeInput={setSelectedOptionEyeletsValue}
                    disabled = {true}
                  />
                  }
                </div>

            )}
            {currentItem?.cutting && currentItem?.cutting.length != 0 && (
              <SelectSec
                item={currentItem?.cutting}
                title={"Порезка"}
                selectedOption={selectedOptionCutting}
                setSelectedOption={setSelectedOptionCutting}
              />
            )}
            {currentItem?.goods && currentItem?.goods[0].cutting.length != 0
            &&
            <SelectSec
                item={currentItem?.goods[0]?.cutting}
                title={"Порезка"}
                selectedOption={selectedOptionCutting}
                setSelectedOption={setSelectedOptionCutting}
              />
            }
            {currentItem?.lamination && currentItem?.lamination.length != 0 && (
              <SelectSec
                item={currentItem?.lamination}
                title={"Ламинация"}
                selectedOption={selectedOptionLamination}
                setSelectedOption={setSelectedOptionLamination}
              />
            )}
            {currentItem?.poster && currentItem?.poster.length != 0 && (
              <SelectSec
                item={currentItem?.poster}
                title={"Постер"}
                selectedOption={selectedOptionPoster}
                setSelectedOption={setSelectedOptionPoster}
              />
            )}
       
              {currentItem?.stretchOnTheStretcher && (
              <div>
                <h3>Натяжка на подрамник</h3>
                <input type='checkbox' value={isStretch} onChange={handleStretch}/>
              </div>
             )}
              {currentItem?.mounting && (
              <div>
                <h3>Намонтаживание</h3>
                <input type='checkbox' value={isMounting} onChange={handleMounting}/>
              </div>
             )}
              {currentItem?.stamp && (
              <div>
                <h3>С печатью</h3>
                <input type='checkbox' value={isStamp} onChange={handleStamp}/>
              </div>
             )}
            {currentItem?.solderingOfGates && currentItem?.solderingOfGates.length != 0 && (
              <div className="soldering">
                <div className="soldering_item">
                  <SelectSec
                    item={currentItem?.solderingOfGates}
                    title={"Пропайка подворотов"}
                    selectedOption={selectedOptionSolderGates}
                    setSelectedOption={setSelectedOptionSolderGates}
                  />
                </div>
                <div className="soldering_item">
                  <SelectSec
                    item={currentItem?.solderingPockets}
                    title={"Пропайка карманов"}
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
        </div>
        <div className="wrap_row">
          <div className="calc-item">
            <h3>Описание</h3>
            <div className="description">
              {/* <textarea name="description" id="" cols="50" rows="6" value={description}  disabled></textarea> */}
              {descArray.length != 0 &&
                Object.entries(descArray).filter(([_, value]) => value.name !== '').map(([key, value], idx) => 
                <p key={idx}>{value}</p>)}
            </div>
          </div>
          <div className="calc-item">
            <h3>Заметки</h3>
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
              title={"Адрес доставки"}
              type={"text"}
              placeholder={"Адрес"}
              value={delivery}
              handleCangeInput={setDelivery}
            />
          </div>
          <div className="total_sum">
            <h3>
              {" "}
              Итого: <p>{totalSum.toFixed(0)}</p> грн
            </h3>
          </div>
          <button onClick={handleTotalSum}>submit</button>
        </div>
      </div>
    );
};

export default CalculatorPartner;