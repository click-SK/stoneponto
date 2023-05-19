import React, {useState,useEffect} from 'react';
import Select from './Select'
import SelectSec from './SelectSecond'
import InputsTamplate from '../template/InputsTamplate';
import '../../style/calculator.scss'


const CalculatorPartner = () => {
    const [goods, setGoods] = useState([
        {
          name: 'Выберете материал'
        },
        {
          name:'Банери',
          goods: [
            {
              name: 'Банер 440 гр. Ламинированый',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Оставить поля по 5 см',
                  price: 100,
                },
              ],
              solderingOfGates: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
              SolderingPockets: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
            },
            {
              name: 'Банер 510 гр. литой',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Оставить поля по 5 см',
                  price: 100,
                },
              ],
              solderingOfGates: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
              SolderingPockets: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
            },
            {
              name: 'Просветный банер 440 гр.',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Оставить поля по 5 см',
                  price: 100,
                },
              ],
              solderingOfGates: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
              SolderingPockets: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
            },
            {
              name: 'Сетка банерная 380 гр.',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Оставить поля по 5 см',
                  price: 100,
                },
              ],
              solderingOfGates: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
              SolderingPockets: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'По периметру',
                  price: 100,
                },
                {
                  name: 'Слева и справа',
                  price: 100,
                },
                {
                  name: 'Сверху и снизу',
                  price: 100,
                },
                {
                  name: 'Буквой П',
                  price: 100,
                },
                {
                  name: 'Слева',
                  price: 100,
                },
                {
                  name: 'Справа',
                  price: 100,
                },
                {
                  name: 'Сверху',
                  price: 100,
                },
                {
                  name: 'Снизу',
                  price: 100,
                },
              ],
            },
          ],
          eyelets: [
            {
              name: 'Нет',
              price: 0,
            },
            {
              name: 'По периметру',
              price: 100,
            },
            {
              name: 'По углам',
              price: 100,
            },
            {
              name: 'По меткам',
              price: 100,
            },
            {
              name: 'Слева и справа',
              price: 100,
            },
            {
              name: 'Сверху и снизу',
              price: 100,
            },
            {
              name: 'Буквой П',
              price: 100,
            },
            {
              name: 'Слева',
              price: 100,
            },
            {
              name: 'Справа',
              price: 100,
            },
            {
              name: 'Сверху',
              price: 100,
            },
            {
              name: 'Снизу',
              price: 100,
            },
          ],
          eyeletsSizePrice: 100,
        },
        {
          name:'Пленка',
          goods: [
            {
              name: 'Глянцевая пленка',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Плотерная',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Матовая',
                  price: 100,
                },
                {
                  name: 'Глянцевая',
                  price: 100,
                },
              ],
              mounting: 500,
            },
            {
              name: 'Матовая пленка',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Плотерная',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Матовая',
                  price: 100,
                },
                {
                  name: 'Глянцевая',
                  price: 100,
                },
              ],
              mounting: 500,
            },
            {
              name: 'Прозрачная самоклеющаяся пленка',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Плотерная',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Матовая',
                  price: 100,
                },
                {
                  name: 'Глянцевая',
                  price: 100,
                },
                {
                  name: 'Белая',
                  price: 100,
                },
              ]
            },
            {
              name: 'Прозрачная самоклеющаяся пленка',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
              ],
            },
            {
              name: 'Самоклеющая пленка с черным елеевым слоем',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
                {
                  name: 'Плотерная',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Матовая',
                  price: 100,
                },
                {
                  name: 'Глянцевая',
                  price: 100,
                },
              ]
            },
            {
              name: 'Цветная пленка серии Oracal 641',
              price: 100,
              color: [
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Плотерная',
                  price: 100,
                },
              ],
              mounting: 500,
              stamp: 500,
            },
          ],
        },
        {
          name:'Бумага',
          goods: [
            {
              name: 'Бумага сити 150 гр.',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
                {
                  name:'1440dpi',
                  price: 300,
                }
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Глянцевая 1+0',
                  price: 100,
                },
                {
                  name: 'Матовая 1+0',
                  price: 100,
                },
                {
                  name: 'Глянцевая 1+1',
                  price: 100,
                },
                {
                  name: 'Матовая 1+1',
                  price: 100,
                },
              ]
            },
            {
              name: 'Бумага блю бэк 115 гр.',
              price: 100,
              quality: [
                {
                  name:'Выберете качество',
                  price: 0,
                },
                {
                  name:'720dpi',
                  price: 100,
                },
                {
                  name:'1080dpi',
                  price: 200,
                },
              ],
              cutting: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Под обрез',
                  price: 100,
                },
              ],
              lamination: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: 'Глянцевая 1+0',
                  price: 100,
                },
                {
                  name: 'Матовая 1+0',
                  price: 100,
                },
                {
                  name: 'Глянцевая 1+1',
                  price: 100,
                },
                {
                  name: 'Матовая 1+1',
                  price: 100,
                },
              ],
              poster: [
                {
                  name: 'Нет',
                  price: 0,
                },
                {
                  name: '3x4м',
                  price: 100,
                },
                {
                  name: '3x6м',
                  price: 100,
                },
                {
                  name: '3x12м',
                  price: 100,
                },
              ]
            },
          ],
        },
        {
          name: 'Давальческий материал',
          price: 1000,
        },
        {
          name: 'Холст',
          price: 1000,
          stretchOnTheStretcher: 500,
        },
        {
          name: 'Свертопропускной пластик',
          price: 1000,
        },
        {
          name: 'Полиман',
          price: 1000,
        },
      ]);
    const [goodsList, setGoodsList] = useState ([])
      
    const [currentItem, setcurrentItem] = useState({});
    const [width, setWitdh] = useState(null)
    const [height, setHeight] = useState(null)
    const [count, setCount] = useState(null)
    const [description, setDescription] = useState('')
    const [selectedFile, setselectedFile] = useState({})
    const [coment, setComent] = useState(null)
    const [delivery, setDelivery] = useState('')
    const [totalSum, setTotalSum] = useState(null)

    const [selectedOption, setSelectedOption] = useState(null);
    const [descArray, setdescArray] = useState([]);


    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-calc')
       .then(response => response.json())
       .then(res => setGoodsList(res))
     },[])

     useEffect(() => {
      const arr = [];
      if(selectedOption?.name) {
        arr.push(`${selectedOption?.name}`);
      }
      console.log('arr',arr);
      setdescArray(arr);
   },[selectedOption])

     console.log('list',goodsList);

    const handleChange = (event) =>{
        const file = event.target.files[0];

        if (file) {
            setselectedFile(file);
        }
    }
    console.log('selectedOption',selectedOption);
    console.log(selectedFile);

    return (
        <div className='calc_wrap'>
            <title>
                <h2>Загрузка файла</h2>
                <button className='btn'>Цены за 1м2</button>
            </title>
            <div className='wrap_row'>
                <div className='calc-item material'>
                    <h3>Материал</h3>
                    <Select
                    goods={goods}
                    setcurrentItem={setcurrentItem}
                    />
                </div>
                <div className='calc-item quality'>
                    {currentItem?.quality && 
                    <SelectSec
                        item={currentItem?.quality}
                        title={'Качество'}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />} 
                </div>
            </div>
            <div className='wrap_row'>
                <div className='calc-item input_size'>
                       <InputsTamplate
                       title={'Ширина'}
                       type={'number'}
                       placeholder={'Введите ширину в мм.'}
                       value={width}
                       handleCangeInput={setWitdh}
                       />
                </div>
                <div className='calc-item input_size'>
                       <InputsTamplate
                       title={'Высота'}
                       type={'number'}
                       placeholder={'Введите высоту в мм.'}
                       value={height}
                       handleCangeInput={setHeight}
                       />
                </div>
                <div className='calc-item input_size'>
                       <InputsTamplate
                       title={'Тираж'}
                       type={'number'}
                       placeholder={'Введите тираж'}
                       value={count}
                       handleCangeInput={setCount}
                       />
                </div>
            </div>
            {/* <div className='wrap_row adding'>
                <div className='colum '>
                    {currentItem?.cutting && 
                    <SelectSec
                    item={currentItem?.cutting}
                    title={'Порезка'}
                />} 
                {currentItem?.solderingOfGates && 
                    <div className='soldering'>
                        <div className='soldering_item'>
                            <SelectSec
                            item={currentItem?.solderingOfGates}
                            title={'Пропайка подворотов'}
                            />
                        </div>
                        <div className='soldering_item'>
                            <SelectSec
                            item={currentItem?.SolderingPockets}
                            title={'Пропайка карманов'}/>
                        </div>
                    </div>
                }
                </div>

                <div className='colum upload'>
                    <h3>Файл</h3>
                    <input 
                        type='file'
                        accept='.jpg, .tif, .rar, .zip, .7z, .cdr'
                        onChange={handleChange}
                        
                    />
                </div>
            </div> */}
            <div className='wrap_row'>
                <div className='calc-item'>
                    <h3>Описание</h3>
                    {/* <textarea name="description" id="" cols="50" rows="6" value={description}  disabled></textarea> */}
                    {descArray.length !=0 && descArray.map((item,idx) => (
              <div key={idx}>
                <p>{item}</p>
              </div>
            ))}
            1
                </div>
                <div className='calc-item'>
                    <h3>Заметки</h3>
                    <textarea name="coment" id="" cols="50" rows="6" value={coment} onChange={(e) => setComent(e.target.value)}></textarea>
                </div>
            </div>
            <div className='wrap_row footer_calc' >
                <div className='calc-item delivery'>
                       <InputsTamplate
                       title={'Адрес доставки'}
                       type={'text'}
                       placeholder={'Адрес'}
                       value={delivery}
                       handleCangeInput={setDelivery}
                       />
                </div>
            <div className='total_sum'>
                <h3> Итого:<p>{totalSum || "0 "}</p>грн</h3>
            </div>
            <button onClick={() => setDescription('hello')}>submit</button>
            </div>
            </div>
    );
};

export default CalculatorPartner;