import React, {useState} from 'react';
import ServicesPhotoModal from './ServicesPhotoModal';
const ServicesPhoto = ({img, allPhotos}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="modal_services_image_block" onClick={() => setIsOpen(!isOpen)}>
        <img className="modal_services_image" src={img.imgUrl}/>
        </div>
        <ServicesPhotoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentImg={img.imgUrl}
        allPhotos={allPhotos}/>
        </>
    );
};

export default ServicesPhoto;