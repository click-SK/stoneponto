import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from "react-redux";
import { fetchLanguage } from "../../store/language";
import '../../style/calculator.scss'
import '../../style/modal.scss'

const ForLayouts = ({isOpen, setIsOpen, goodsList}) => {
    const dispatch = useDispatch();

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
                    <p>{t(`REQUIREMENTS FOR LAYOUTS`)}</p>
                    <button onClick={() => setIsOpen(!isOpen)}>{t(`Close`)}</button>
                </title>
                <div className='table'>
                <div className='table_head for_layouts'>
                        <h2 className='title_name '>{t(`File formats`)}:</h2>
                        
                </div>
                <div className='table_body modal_table'>
                        <ul className='for_layouts_list_wrap'>
                            <li>• .tiff</li>
                            <li>• .psd ({t(`Photoshop up to and including CS3`)})</li>
                            <li>• .jpg</li>
                            <li>• .cdr ({t(`CorelDRAW up to version 13 inclusive`)})</li>
                            <li>{t(`Layouts must be made in the size of 1:1, (if in scale - indicate the scale)`)}</li>
                            <li>{t(`It is desirable to attach an additional .jpeg file to the layout for viewing`)}</li>
                        </ul>
                </div>
                <div className='table_head for_layouts'>
                        <h2 className='title_name '>{t(`Raster file requirements`)}:</h2>
                        
                </div>
                <div className='table_body modal_table'>
                        <ul className='for_layouts_list_wrap'>
                            <li>• {t(`CMYK color model`)};</li>
                            <li>• {t(`all layers must be merged into a single layer`)};</li>
                            <li>• {t(`optimal file size - up to 150 MB`)};</li>
                            <li>• .cdr ({t(`CorelDRAW up to version 13 inclusive`)})</li>
                            <li>-{t(`for normal quality printing 720dpi 50-100 dpi`)};</li>
                            <li>-{t(`for printing images with interior quality 1440dpi 150-300 dpi`)};</li>
                            <li>• {t(`if you provide files in .psd format`)}</li>
                        </ul>
                </div>
                </div>
                <div className='table_head for_layouts'>
                        <h2 className='title_name '>{t(`Requirements for vector files`)}:</h2>
                        
                </div>
                <div className='table_body modal_table'>
                        <ul className='for_layouts_list_wrap'>
                            <li>• {t(`CMYK color model`)};</li>
                            <li>• {t(`one image to print - one file (without pages)`)};</li>
                            <li>• {t(`all font objects must be converted to curves`)};</li>
                            <li>• {t(`the layout should not contain visible or invisible objects that go beyond the print size`)};</li>
                            <li>• {t(`there should be a frame along the border of the printed image`)};</li>
                            <li>• {t(`all contours (strokes) with a thickness of more than 2mm`)};</li>
                            <li>• {t(`if you imagine a 1:10 layout`)};</li>
                            <li>• {t(`effects in Corel Draw files must be rasterized`)}</li>
                            <li>{t(`Important`)}:</li>
                            <li>• {t(`if the layout has increased requirements for individual (indexed) colors`)};</li>
                            <li>• {t(`black color must be composite (eg: C60,M60,Y60, K100)`)};</li>
                            <li>• {t(`if there are white (light) fields around the edges of the file - make a black stroke of 1 pixel`)};</li>
                            <li>• {t(`avoid large bit-map-out scaling`)};</li>
                            <li>• {t(`print resolution and file resolution are different concepts`)};</li>
                            <li>• {t(`before sending layout`)};</li>
                            <li>• {t(`to achieve a high degree of matching`)}</li>
                        </ul>
                
                </div>
                <div className='table_head for_layouts'>
                        <h2 className='title_name '>{t(`When preparing files, consider`)}:</h2>
                        
                </div>
                <div className='table_body modal_table'>
                        <ul className='for_layouts_list_wrap'>
                            <li>{t(`Pay attantion`)}</li>
                        </ul>
                        <ul className='for_layouts_list_wrap'>
                            <li>{t(`Provision of layouts for full color wide format printing`)}</li>
                        </ul>
                
                </div>
            </div>
        </div>
    );
};

export default ForLayouts;