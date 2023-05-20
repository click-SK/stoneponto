import React, { useState } from 'react';


const Select = ({goods,setcurrentItem}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

//     {
//       name: 'Выберете материал'
//     },
//     {
//       name:'Банери',
//       goods: [
//         {
//           name: 'Банер 440 гр. Ламинированый',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Оставить поля по 5 см',
//               price: 100,
//             },
//           ],
//           solderingOfGates: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//           SolderingPockets: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//         },
//         {
//           name: 'Банер 510 гр. литой',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Оставить поля по 5 см',
//               price: 100,
//             },
//           ],
//           solderingOfGates: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//           SolderingPockets: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//         },
//         {
//           name: 'Просветный банер 440 гр.',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Оставить поля по 5 см',
//               price: 100,
//             },
//           ],
//           solderingOfGates: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//           SolderingPockets: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//         },
//         {
//           name: 'Сетка банерная 380 гр.',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Оставить поля по 5 см',
//               price: 100,
//             },
//           ],
//           solderingOfGates: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//           SolderingPockets: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'По периметру',
//               price: 100,
//             },
//             {
//               name: 'Слева и справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху и снизу',
//               price: 100,
//             },
//             {
//               name: 'Буквой П',
//               price: 100,
//             },
//             {
//               name: 'Слева',
//               price: 100,
//             },
//             {
//               name: 'Справа',
//               price: 100,
//             },
//             {
//               name: 'Сверху',
//               price: 100,
//             },
//             {
//               name: 'Снизу',
//               price: 100,
//             },
//           ],
//         },
//       ],
//       eyelets: [
//         {
//           name: 'Нет',
//           price: 0,
//         },
//         {
//           name: 'По периметру',
//           price: 100,
//         },
//         {
//           name: 'По углам',
//           price: 100,
//         },
//         {
//           name: 'По меткам',
//           price: 100,
//         },
//         {
//           name: 'Слева и справа',
//           price: 100,
//         },
//         {
//           name: 'Сверху и снизу',
//           price: 100,
//         },
//         {
//           name: 'Буквой П',
//           price: 100,
//         },
//         {
//           name: 'Слева',
//           price: 100,
//         },
//         {
//           name: 'Справа',
//           price: 100,
//         },
//         {
//           name: 'Сверху',
//           price: 100,
//         },
//         {
//           name: 'Снизу',
//           price: 100,
//         },
//       ],
//       eyeletsSizePrice: 100,
//     },
//     {
//       name:'Пленка',
//       goods: [
//         {
//           name: 'Глянцевая пленка',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Плотерная',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Матовая',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая',
//               price: 100,
//             },
//           ],
//           mounting: 500,
//         },
//         {
//           name: 'Матовая пленка',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Плотерная',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Матовая',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая',
//               price: 100,
//             },
//           ],
//           mounting: 500,
//         },
//         {
//           name: 'Прозрачная самоклеющаяся пленка',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Плотерная',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Матовая',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая',
//               price: 100,
//             },
//             {
//               name: 'Белая',
//               price: 100,
//             },
//           ]
//         },
//         {
//           name: 'Прозрачная самоклеющаяся пленка',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//           ],
//         },
//         {
//           name: 'Самоклеющая пленка с черным елеевым слоем',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//             {
//               name: 'Плотерная',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Матовая',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая',
//               price: 100,
//             },
//           ]
//         },
//         {
//           name: 'Цветная пленка серии Oracal 641',
//           price: 100,
//           color: [
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Плотерная',
//               price: 100,
//             },
//           ],
//           mounting: 500,
//           stamp: 500,
//         },
//       ],
//     },
//     {
//       name:'Бумага',
//       goods: [
//         {
//           name: 'Бумага сити 150 гр.',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//             {
//               name:'1440dpi',
//               price: 300,
//             }
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Глянцевая 1+0',
//               price: 100,
//             },
//             {
//               name: 'Матовая 1+0',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая 1+1',
//               price: 100,
//             },
//             {
//               name: 'Матовая 1+1',
//               price: 100,
//             },
//           ]
//         },
//         {
//           name: 'Бумага блю бэк 115 гр.',
//           price: 100,
//           quality: [
//             {
//               name:'Выберете качество',
//               price: 0,
//             },
//             {
//               name:'720dpi',
//               price: 100,
//             },
//             {
//               name:'1080dpi',
//               price: 200,
//             },
//           ],
//           cutting: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Под обрез',
//               price: 100,
//             },
//           ],
//           lamination: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: 'Глянцевая 1+0',
//               price: 100,
//             },
//             {
//               name: 'Матовая 1+0',
//               price: 100,
//             },
//             {
//               name: 'Глянцевая 1+1',
//               price: 100,
//             },
//             {
//               name: 'Матовая 1+1',
//               price: 100,
//             },
//           ],
//           poster: [
//             {
//               name: 'Нет',
//               price: 0,
//             },
//             {
//               name: '3x4м',
//               price: 100,
//             },
//             {
//               name: '3x6м',
//               price: 100,
//             },
//             {
//               name: '3x12м',
//               price: 100,
//             },
//           ]
//         },
//       ],
//     },
//     {
//       name: 'Давальческий материал',
//       price: 1000,
//     },
//     {
//       name: 'Холст',
//       price: 1000,
//       stretchOnTheStretcher: 500,
//     },
//     {
//       name: 'Свертопропускной пластик',
//       price: 1000,
//     },
//     {
//       name: 'Полиман',
//       price: 1000,
//     },
//   ]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  

  const selectItemFunc = (e) => {
    setSelectedOption(e);
    setIsOpen(false);
    console.log('item',e);
    setcurrentItem(e)
  }

  console.log('goods',goods);

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.name || 'hello'}
      </div>
      {isOpen && (
        <div className="options">
          {goods && goods.map((item,idx) => (
                    <div key={idx}>
                        <div>
                          {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                          ?
                          <h4 style={{fontWeight:700}}>{item.name}</h4>
                          :
                          <p onClick={() => selectItemFunc(item)}>{item.name}</p>
                          }
                        </div>
                        {item?.goods.length != 0 && item?.goods.map((el,id) => (
                            <div className="option" key={id} onClick={() => selectItemFunc(el)}>
                                {el.name}
                            </div>
                        ))}
                    </div>
                ))}
        </div>
      )}
    </div>
  );
};

export default Select;