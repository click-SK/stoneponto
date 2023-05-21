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
    const [width, setWitdh] = useState(null)
    const [height, setHeight] = useState(null)
    // const [quadrature, setquadrature] = useState(null)
    const [count, setCount] = useState(null)
    const [description, setDescription] = useState('')
    const [selectedFile, setselectedFile] = useState({})
    const [coment, setComent] = useState(null)
    const [delivery, setDelivery] = useState('')
    const [totalPrice, setTotalPrice] = useState(null)
    const [totalSum, setTotalSum] = useState(0)

    const [selectedOptionQuality, setSelectedOptionQuality] = useState(null);
    const [selectedOptionCutting, setSelectedOptionCutting] = useState(null);
    const [selectedOptionSolderGates, setSelectedOptionSolderGates] = useState(null);
    const [selectedOptionSolderPockets, setSelectedOptionSolderPockets] = useState(null);
    const [selectedOptionLamination, setSelectedOptionLamination] = useState(null);
    const [selectedOptionColor, setSelectedOptionColor] = useState(null);
    const [selectedOptionPoster, setSelectedOptionPoster] = useState(null);
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
      }
      setdescArray(descriptionObj);
     },[selectedOptionCutting,isMounting,selectedOptionSolderPockets,selectedOptionSolderGates,selectedOptionPoster,selectedOptionLamination,isStretch])
     

     useEffect(() =>{
      const totalSum1 = ((quadrature * selectedOptionQuality?.price || 0) * count) +
     (selectedOptionCutting?.price || 0) + (selectedOptionSolderGates?.price || 0)+
     (selectedOptionSolderPockets?.price || 0) + (selectedOptionLamination?.price || 0) +
     (selectedOptionPoster?.price || 0) + (isStamp ? currentItem?.stamp : 0) + (isStretch ? currentItem?.stretchOnTheStretcher : 0) +
     (isMounting ? currentItem?.mounting: 0);

     setTotalSum(totalSum1)
     },[count, selectedOptionCutting, selectedOptionSolderGates,selectedOptionSolderPockets,
      selectedOptionLamination, selectedOptionPoster,selectedOptionColor,isStamp,selectedOptionQuality,isStretch,isMounting])

      useEffect(()=>{
        setSelectedOptionQuality(null);
        setSelectedOptionCutting(null);
        setSelectedOptionSolderGates(null);
        setSelectedOptionSolderPockets(null);
        setSelectedOptionLamination(null);
        setSelectedOptionColor(null);
        setSelectedOptionPoster(null);
        setIsStamp(false);
        setIsStretch(false);
        setIsMounting(false);
        setWitdh('');
        setHeight('');
        setCount('');
        setComent('');
        setDelivery('');
      },[currentItem])

     
    const handleChange = (event) =>{
        const file = event.target.files[0];

        if (file) {
            setselectedFile(file);
        }
    }

    const handleTotalSum = () =>{
        // console.log('sum',totalSum)
        // console.log('price',selectedOptionQuality?.price)
        // console.log('m2',quadrature)
        console.log('item',currentItem)
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
    // додати модалка ціни за метр
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
                <input type='checkbox' checked={isStretch} onChange={handleStretch}/>
              </div>
             )}
              {currentItem?.mounting && (
              <div>
                <h3>Намонтаживание</h3>
                <input type='checkbox' checked={isMounting} onChange={handleMounting}/>
              </div>
             )}
              {currentItem?.stamp && (
              <div>
                <h3>С печатью</h3>
                <input type='checkbox' checked={isStamp} onChange={handleStamp}/>
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