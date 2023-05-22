import React from 'react';


const MainPage = () => {
    return (
        <div className='main_wraper'>
            <div className='banner_wrap'>
                <img src="../../public/img/banner/banner.png" alt="" />
            </div>
            <div className='body_wrap'>
                <div className='description_block'></div>
                <div className='services_faq_block'>
                    <div className='services'></div>
                    <div className='faq'></div>
                </div>
                <div className='blog'></div>
            </div>
        </div>
    );
};

export default MainPage;