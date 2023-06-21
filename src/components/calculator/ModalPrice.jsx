import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import { currentCurrency } from "../../store/currency";
import { fetchLanguage } from "../../store/language";
import '../../style/calculator.scss'
import '../../style/modal.scss'

const ModalPrice = ({isOpen, setIsOpen, goodsList}) => {
    const dispatch = useDispatch();
    const { currency } = useSelector(currentCurrency);

    const { t } = useTranslation();

    const lang = useSelector((state) => state.lang.language);

    useEffect(() => {
      dispatch(fetchLanguage());
    }, [lang]);

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <title>
                    <p>{t(`Prices`)}</p>
                    <p>{t(`The course is on the website`)}: {currency?.currency} грн</p>
                    <button onClick={() => setIsOpen(!isOpen)}>Close</button>
                </title>
                <div className='table'>
                <div className='table_head'>
                        <h2 className='title_name'>{t(`Material`)}</h2>
                        <h2 className='title_price'>720</h2>
                        <h2 className='title_price'>1080</h2>
                        <h2 className='title_price'>1440</h2>
                </div>
                <div className='table_body modal_table'>
                    {goodsList && goodsList.map((item,idx) => (
                        <div className='table_item_row' key={idx}>
                            <div className='colum_item colum_item_name'>
                                <div>
                                    {item.nameUa == "Банери" || item.nameUa == "Плівка" || item.nameUa == "Папір" 
                                    ? 
                                    <h4 style={{fontWeight:700}}>{ item.nameUa !== 'Банери' && item.nameUa !== 'Плівка' && item.nameUa !== 'Папір' && 
                                    lang == "Ua" ? <>{item.nameUa}</> : <>{item.nameRu}</>}</h4>
                                    :
                                    <p>{lang == "Ua" ? <>{item.nameUa == 'Виберіть матеріал' ? '' : item.nameUa}</> : <>{item.nameRu == 'Виберіть матеріал' ? '' : item.nameRu}</>}</p>
                                    }   
                                </div>
                                {item?.goods.length != 0 && item?.goods.map((el,id) => (
                                <div className="value_item" key={id}>
                                    <p> {el.nameUa !== 'Кольорова плівка серії Oracal 641' && lang == "Ua" ? <>{el.nameUa}</> : <>{item.nameRu}</>}</p>
                                    <div className='price_wrap'>
                                        {el.quality.map((qa, idx) => (
                                                qa.nameUa === '720dpi' && qa.price && (
                                                <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p>
                                                )
                                            ))}
                                            {el.quality.map((qa, idx) => (
                                                qa.nameUa === '1080dpi' && qa.price && (
                                                <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p>
                                                )
                                            ))}
                                            {el.quality.map((qa, idx) => (
                                                        qa.nameUa === '1440dpi' && 
                                                        ( <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p> )
                                                    ))}
                                    </div>
                                </div>
                        ))}
                            </div>
                            {/* <div className='price_wrap'>
                            <div className='colum_item colum_item_price  colum_item_price720'>
                                {item?.goods.length !== 0 && item?.goods.map((el, id) => (
                                    <div key={id}>
                                        {el.quality.map((qa, idx) => (
                                            qa.nameUa === '720dpi' && qa.price && (
                                            <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p>
                                            )
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className='colum_item colum_item_price colum_item_price1080'>
                                {item?.goods.length !== 0 && item?.goods.map((el, id) => (
                                    <div key={id}>
                                        {el.quality.map((qa, idx) => (
                                            qa.nameUa === '1080dpi' && qa.price && (
                                            <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p>
                                            )
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className='colum_item colum_item_price colum_item_price1440'>
                                {item?.goods.length !== 0 && item?.goods.map((el, id) => (
                                        <div key={id}>
                                            {el.quality.length !== 0 && 
                                                <div>
                                                    {el.quality.map((qa, idx) => (
                                                    qa.nameUa === '1440dpi' && 
                                                    ( <p key={idx} className='value_item price_value'>{(qa.price * currency?.currency).toFixed(0)} грн</p> )
                                                ))}
                                                </div> 
                                                }
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
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
                </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPrice;