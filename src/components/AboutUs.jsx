import React from 'react';
import { useTranslation } from "react-i18next";
const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div className="description_block">
          <h1>{t(`About`)}</h1>
          <p>{t(`About us paragraph 1`)}</p>
          <p>{t(`About us paragraph 2`)}</p>
          <p>{t(`OUR SERVICES`)}</p>
          <div>
            <div className='about_us_our_services_wrap'>
            <p>-{t(`Our services item 1`)}</p>
            <p>-{t(`Our services item 2`)}</p>
            <div style={{ paddingLeft: "60px" }}>
              <p>-{t(`Our services item 3`)}</p>
              <p>-{t(`Our services item 4`)}</p>
              <p>-{t(`Our services item 6`)}</p>
            </div>
            <p>-{t(`Our services item 7`)}</p>
            <p>-{t(`Our services item 8`)}</p>
            <p>-{t(`Our services item 9`)}</p>
            <p>-{t(`Our services item 10`)}</p>
            <p>-{t(`Our services item 11`)}</p>
            <p>-{t(`Our services item 12`)}</p>
            </div>
            <p>{t(`About us paragraph 3`)}</p>
            <p>{t(`About us paragraph 4`)}</p>
            <p>{t(`About us paragraph 5`)}</p>
            <p>{t(`About us paragraph 6`)}</p>
            <p>{t(`About us paragraph 7`)}</p>
            <div>
              <p style={{textAlign:'center', fontWeight:'600', marginBottom: '3px'}}>{t(`About table title`)}</p>
              <div className="about_us_table_wrap">
                <div style={{display:'flex', borderTop:'1px solid black', borderLeft:'1px solid black', borderRight:'1px solid black'}}>
                  <p style={{textAlign:'center', width:'80%', fontWeight:'600'}}>{t(`About us table material`)}</p>
                  <p style={{textAlign:'center', width:'20%', fontWeight:'600', borderLeft:'1px solid black'}}>{t(`About us table price`)} за м2</p>
                </div>
                <div style={{display:'flex', borderTop:'1px solid black', borderLeft:'1px solid black', borderRight:'1px solid black'}}>
                  <p style={{width:'80%'}}>{t(`About us table item 1`)}</p>
                  <p style={{textAlign:'center', width:'20%', borderLeft:'1px solid black'}}>220 грн.</p>
                </div>
                <div style={{display:'flex', borderTop:'1px solid black', borderLeft:'1px solid black', borderRight:'1px solid black'}}>
                  <p style={{width:'80%'}}>{t(`About us table item 2`)}</p>
                  <p style={{textAlign:'center', width:'20%', borderLeft:'1px solid black'}}>350 грн.</p>
                </div>
                <div style={{display:'flex', borderTop:'1px solid black', borderLeft:'1px solid black', borderRight:'1px solid black'}}>
                  <p style={{width:'80%'}}>{t(`About us table item 3`)}</p>
                  <p style={{textAlign:'center', width:'20%', borderLeft:'1px solid black'}}>200/250 грн.</p>
                </div>
                <div style={{display:'flex', borderTop:'1px solid black', borderLeft:'1px solid black', borderRight:'1px solid black', borderBottom:'1px solid black'}}>
                  <p style={{width:'80%'}}>{t(`About us table item 4`)}</p>
                  <p style={{textAlign:'center', width:'20%', borderLeft:'1px solid black'}}>150 грн.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AboutUs;