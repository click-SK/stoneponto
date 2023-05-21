import React, { useState,useEffect } from 'react';
import '../../style/calculator.scss'
import '../../style/modal.scss'

const ModalPrice = ({isOpen, setIsOpen, goodsList}) => {
    
    console.log(goodsList);

    goodsList.forEach(element => {
        console.log(element)
    });

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <title>
                    <p>Ціни</p>
                    <p>Курс 38 грн</p>
                    <button onClick={() => setIsOpen(!isOpen)}>Close</button>
                </title>
                <table>
                <thead>
                    <tr>
                    <th>Матеріал</th>
                    <th>720</th>
                    <th>1080</th>
                    <th>1440</th>
                    </tr>
                </thead>
                <tbody>
                    {goodsList && goodsList.map((item,idx) => (
                        <tr key={idx}>
                            <td>
                                <div>
                                    {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                                    ? 
                                    <h4 style={{fontWeight:700}}>{item.name}</h4>
                                    :
                                    <p>{item.name !== 'Выберете материал' && item.name}</p>
                                    }   
                                </div>
                                {item?.goods.length != 0 && item?.goods.map((el,id) => (
                                <div className="option" key={id}>
                                    {el.name}
                                </div>
                        ))}
                            </td>
                            {/* <td>Значення 720</td>
                            <td>Значення 1080</td>
                            <td>Значення 1440</td> */}
                            <td>
                            <div>
                                    {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                                    ? 
                                    <h4 style={{fontWeight:700}}>{item.price}</h4>
                                    :
                                    <p>{item.price}</p>
                                    }   
                                </div>
                                {item?.goods.length != 0 && item?.goods.map((el,id) => (
                                <div key={id}>
                                    {el.quality.map((qa,idx)=>(
                                        <p>{qa.name == '720dpi'&& qa.price}</p>
                                    ))}
                                </div>
                        ))}
                            </td>
                            <td>
                            <div>
                                    {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                                    ? 
                                    <h4 style={{fontWeight:700}}>{item.price}</h4>
                                    :
                                    <p>{item.price}</p>
                                    }   
                                </div>
                                {item?.goods.length != 0 && item?.goods.map((el,id) => (
                                <div key={id}>
                                    {el.quality.map((qa,idx)=>(
                                        <p>{qa.name == '1080dpi'&& qa.price}</p>
                                    ))}
                                </div>
                        ))}
                            </td>
                            <td>
                            <div>
                                    {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                                    ? 
                                    <h4 style={{fontWeight:700}}>{item.price}</h4>
                                    :
                                    <p>{item.price}</p>
                                    }   
                                </div>
                                {item?.goods.length != 0 && item?.goods.map((el,id) => (
                                <div key={id}>
                                    {el.quality.map((qa,idx)=>(
                                        <p>{qa.name == '1440dpi'
                                        &&
                                        qa.price ? qa.price : ''}</p>
                                    ))}
                                </div>
                        ))}
                            </td>
                        </tr>
                    ))}
                    {/* {goodsList && goodsList.map((item,idx) => (
                    <div key={idx}>
                        <div>
                          {item.name == 'Банери' || item.name == 'Пленка' || item.name == 'Бумага' 
                          ?
                          <h4 style={{fontWeight:700}}>{item.name}</h4>
                          :
                          <p >{item.name}</p>
                          }
                        </div>
                        {item?.goods.length != 0 && item?.goods.map((el,id) => (
                            <div className="option" key={id}>
                                {el.name}
                            </div>
                        ))}
                    </div>
                ))} */}
                    {/* Додайте інші рядки тут */}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default ModalPrice;