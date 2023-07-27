import React, {useState, useEffect} from 'react';
import "../style/photoModal.scss";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useTranslation } from "react-i18next";
const ServicesPhotoModal = ({isOpen, setIsOpen, currentImg, allPhotos}) => {
    const [chosePhoto, setChosePhoto] = useState('');
    const { t } = useTranslation();
    useEffect(() => {
        setChosePhoto(currentImg);
    },[])
    if (!isOpen) return null;

    const handlePrev = () => {
        const indexInArray = allPhotos.findIndex((el) => el.imgUrl == chosePhoto);
        if(indexInArray != 0) {
            let idx = indexInArray - 1;
            setChosePhoto(allPhotos[idx].imgUrl)
        }
    }

    const handleNext = () => {
        const indexInArray = allPhotos.findIndex((el) => el.imgUrl == chosePhoto);
        if(indexInArray != allPhotos.length - 1) {
            let idx = indexInArray + 1;
            setChosePhoto(allPhotos[idx].imgUrl)
        }
    }

    const handleCloseModal = (e) => {
        if(e.target.id == 'photo_modal_close') {
            setIsOpen(!isOpen)
        }
    }
    return (
        <div className='photo_modal_wrap'>
            <div className='photo_modal_block' 
            id='photo_modal_close'
            onClick={(e) => handleCloseModal(e)}>
                <div className='photo_modal_close_button_wrap'
                id='photo_modal_close'>
                <button 
                onClick={() => setIsOpen(!isOpen)}
                className='photo_modal_close_button'>{t('Close')}</button>
                </div>
                <div className='photo_modal_image_block'
                id='photo_modal_close'>
                    <img className='photo_modal_image' src={chosePhoto || currentImg}/>
                </div>
                <div className='photo_modal_button_wrap'
                id='photo_modal_close'>
                    <button className='photo_modal_button' onClick={handlePrev}>
                        <AiOutlineArrowLeft/>
                    </button>
                    <button className='photo_modal_button' onClick={handleNext}>
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPhotoModal;