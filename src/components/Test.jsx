import React, {useState} from 'react';
import Select from './Select'

const Test = () => {
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
      const [currentItem, setcurrentItem] = useState({});
    
    
      // goods.forEach((item) => {
      //   if(item?.goods) {
      //     item?.goods.forEach((el) => {
      //       console.log('el',el);
      //     })
      //   }
      // })
    
      // console.log('goods',goods);
    
      const selectItemFunc = (e) => {
        console.log(e);
        setcurrentItem(e)
      }
    
      return (
        <>
        <h1>Калькулятор {currentItem?.name}</h1>
    
        <div>
          <h1>Материал</h1>
              <div>
                {goods.map((item,idx) => (
                    <div key={idx}>
                        <div>
                          {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                          ?
                          <h4>{item.name}</h4>
                          :
                          <p onClick={() => selectItemFunc(item)}>{item.name}</p>
                          }
                        </div>
                        {item?.goods && item?.goods.map((el,id) => (
                            <div key={id} onClick={() => selectItemFunc(el)}>
                                {el.name}
                            </div>
                        ))}
                    </div>
                ))}
              </div>
              <hr/>
              <div>
                <h1>Качество</h1>
                <div>
                  {currentItem?.quality && currentItem?.quality.map((item,idx) => (
                    <div key={idx}>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{margin: '15px 0', borderTop: '5px solid red'}}>
              <h1 style={{margin: '15px 0'}}>Select</h1>
              <Select
              />
            </div>
        </>
      )
};

export default Test;