import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import '../style/mainPage.scss'

const Portfolio = () => {
    const [mainImg, setMainImg] = useState('./img/portfolio/5ffe0397-fcb9-4935-9884-d41493d61b64.jpg')

    const { t } = useTranslation();

    const imgArr = [
        {
            img: './img/portfolio/5ffe0397-fcb9-4935-9884-d41493d61b64.jpg'
        },
        {
            img: './img/portfolio/f63f6944-b710-4798-9e61-2a8e3d71fdc7.jpg'
        },
        {
            img: './img/portfolio/photo_1_2023-06-18_11-33-39.jpg'
        },
        {
            img: './img/portfolio/photo_1_2023-06-18_11-34-04.jpg'
        },
        {
            img: './img/portfolio/photo_2_2023-06-18_11-34-04.jpg'
        },
        {
            img: './img/portfolio/photo_4_2023-06-18_11-34-04.jpg'
        },
        {
            img: './img/portfolio/606ebd94-7e99-4ec7-b0b7-0299b8991d44.jpg'
        },
        {
            img: './img/portfolio/photo_2023-06-18_11-34-38.jpg'
        },
        {
            img: './img/portfolio/11f4b9f6-425e-41f7-abfa-1925c650a642.jpg'
        },

    ]

    const hendlerImg = (e) =>{
        setMainImg(e)
    }

    return (
        <div className='portfolio'>
                <h2>{t(`Our works`)}</h2>
                <div className='img_wrap_work'>
                    {imgArr.map((item,idx) => (
                        <img 
                        onClick={(e) => hendlerImg(e.target.src)}
                        key={idx} src={item.img} alt={item.img} />
                    ))}
                </div>       

        </div>
    );
};

export default Portfolio;