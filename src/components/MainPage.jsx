
import React, {useState} from 'react';
import '../style/mainPage.scss'
import Slide from './Slide/Slide';
import {BsBackspace } from 'react-icons/bs';

const MainPage = () => {

    const [isOpenDesing, setIsOpenDesing] = useState(false)
    const [isOpenPrint, setIsOpenPrint] = useState(false)
    const [isOpenLamin, setIsOpenLamin] = useState(false)
    const [isOpenPlotter, setIsOpenPlotter] = useState(false)
    const [isOpenGates, setIsOpenGates] = useState(false)
    const [isOpenAdversting, setIsAdversting] = useState(false)

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const hendlerOpenDesint = () => {
        setIsOpenDesing(!isOpenDesing);
        setIsOpenPrint(false);
        setIsOpenLamin(false);
        setIsOpenPlotter(false);
        setIsOpenGates(false);
        setIsAdversting(false);
    }
    const hendlerOpenPrint = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(!isOpenPrint);
        setIsOpenLamin(false);
        setIsOpenPlotter(false);
        setIsOpenGates(false);
        setIsAdversting(false);
    }
    const hendlerOpenLamin = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(false);
        setIsOpenLamin(!isOpenLamin);
        setIsOpenPlotter(false);
        setIsOpenGates(false);
        setIsAdversting(false);
    }
    const hendlerOpenPlotter = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(false);
        setIsOpenLamin(false);
        setIsOpenPlotter(!isOpenPlotter);
        setIsOpenGates(false);
        setIsAdversting(false);
    }
    const hendlerOpenGates = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(false);
        setIsOpenLamin(false);
        setIsOpenPlotter(false);
        setIsOpenGates(!isOpenGates);
        setIsAdversting(false);
    }
    const hendlerOpenAdversting = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(false);
        setIsOpenLamin(false);
        setIsOpenPlotter(false);
        setIsOpenGates(false);
        setIsAdversting(!isOpenAdversting);
    }
    const hendlerCloseAll = () => {
        setIsOpenDesing(false);
        setIsOpenPrint(false);
        setIsOpenLamin(false);
        setIsOpenPlotter(false);
        setIsOpenGates(false);
        setIsAdversting(false);
    }


    return (
        <div className='main_wraper'>
            <div className='body_wrap'>
            <div className='banner_wrap'>
                <img src='./img/Ресурс 8.svg' alt="" />
            </div>
                <div className='description_block'>
                        <h1>О наc</h1>
                    {/* <title>
                    </title> */}
                    <p>Мы – типография широкоформатной печати и наружной рекламы Express-Print. Мы печатаем яркие, привлекающие баннера и пленки на собственном оборудовании в кратчайшие сроки. Чтобы вы могли привлечь к своему бизнесу как можно больше клиентов и покупателей. 
                        Наша типография предоставляет полный цикл услуг. От разработки дизайна до монтажа рекламных конструкций, натяжки баннера, поклейки пленки. Также производим демонтаж старой рекламы.
                        </p>
                </div>
                    <div className='services'>
                        <h2>описание услуг</h2>
                        <ul className='services_list'>
                            <li 
                            className='services_item'
                            
                            > 
                            <img className='img_services' src="./img/services/pic1.png"
                            onClick={() => hendlerOpenDesint()} alt="" />
                             <p className='services_name' >ДИЗАЙН</p>
                             {isOpenDesing &&
                                <div className='modal_services'>
                                 <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                 <h3>ДИЗАЙН</h3>   
                                 <div className='img_wraper'>
                                    <img src="./img/services/pic1.png" alt="" />
                                 </div>
                                <p>Наша типография широкоформатной печати и наружной рекламы Express-Print предоставляет полный цикл услуг. И первое это разработка дизайна. Это может быть разработка фирменного стиля, логотипа или же обычное объявление о продаже недвижимости. Все это мы нарисуем, учитывая ваши пожелания, сделаем несколько образцов, покажем вам для утверждения и подготовим для широкоформатной печати. Наши дизайнеры уже знают как подготовить макет к печати в нашей типографии.</p>
                                <p>Стоимость дизайнерских услуг от 300 грн. В зависимости от сложности, сроков, и количества изображений. Обычно дизайн баннера или пленки делается в течении дня.</p>
                                </div>
                                }</li>
                            <li 
                            className='services_item'
                            
                            > 
                                <img
                                className='img_services'
                                onClick={() => hendlerOpenPrint()}
                                src="./img/services/pic2.png" alt="" />
                                <p className='services_name' >Широкоформатная печать</p>
                                {isOpenPrint &&
                                <div className='modal_services'>
                                <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                <h3>Широкоформатная печать</h3>   
                                <div className='img_wraper'>
                                    <img src="./img/services/pic2.png" alt="" />
                                 </div>
                                 <div className='modal_services_info'>
                                    <p>Широкоформатная печать – это печать больших форматов на разных материалах. Формат А3(297х420мм) можно напечатать на лазерном принтере в любом центре полиграфических услуг. Если вам надо что то больше этого размера, то это уже широкоформатная печать.
                                    Стоимость дизайнерских услуг от 300 грн. В зависимости от сложности, сроков, и количества изображений. Обычно дизайн баннера или пленки делается в течении дня.
                                    </p>
                                    <h4>Мы печатаем на таких материалах:</h4>
                                    <ul className='info_list'>
                                        <li>Баннер ламинированный. Это баннер плотностью 440г/м. Самый востребованный материал для наружной рекламы и самый дешёвый. Подходит для большинства случаев. Для усиления баннера по периметру может быть произведена пропайка подворотов.</li>
                                        <li>Баннер литой. Это баннер плотностью 510г/м. Отличается повышенной прочностью и износостойкостью. Качество печати, по сравнению с ламинированным баннером, примерно одинаковое. Но литой баннер применяется для больших площадей рекламы или для мест с большой ветровой нагрузкой или для долгосрочных рекламных конструкций. Для усиления баннера по периметру может быть произведена пропайка подворотов.</li>
                                        <li>Баннерная сетка. Это материал плотностью 380г/м. Это легкий но очень плотный материал. Фактически это сетка, на которой можно печатать широкоформатную печать, пропаять и набить люверсы. Баннерная секса используется для очень больших площадей или для мест с очень большой ветровой нагрузкой. На пример на берегу моря.</li>
                                        <li>Самоклеящаяся пленка. Это виниловая пленка с клеевым слоем для поклейки на любую подходящую поверхность. Стекло, автомобиль или автобус, пластик, металл… Самоклеящаяся пленка бывает глянцевая или матовая. Если пленка будет клеиться в агрессивной среде (мимоход, автомобиль, входные двери) то мы предлагаем ламинацию прозрачной самоклеящейся пленкой. Так же глянцевой или матовой. Мы используем пленку европейских производителей, что гарантирует что она не отвалится или не потрескается на солце или в других неблагоприятных условиях. Кроме того мы изготавливаем пленку для поклейки изнутри помещения. </li>
                                        <li>Бумага. Мы печатаем на 2-х видах бумаги. 150 гр/м и 115 гр/м. Ширина до 1,6м! Подходит для краткосрочной рекламы. На пример для информирования о мероприятии. Бумагу так же можно заламинировать. На пример для защиты от влаги.</li>
                                        <li>Так же мы можем печать на других материалах, включая предоставленные вами. Звоните</li>
                                    </ul>
                                 </div>
                                </div>
                                }
                                </li>
                            <li
                            className='services_item'
                            
                            > <img 
                            className='img_services'
                            onClick={() => hendlerOpenLamin()}
                            src="./img/services/pic3.png" alt="" />
                             <p className='services_name' >Ламинирование</p>
                             {isOpenLamin &&
                                <div className='modal_services'>
                                    <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                 <h3>Широкоформатная печать</h3>   
                                 <div className='img_wraper'>
                                    <img src="./img/services/pic3.png" alt="" />
                                 </div>
                                <p>Это услуга по покрытию отпечатанного материала защитной прозрачной или непрозрачной пленкой. Производится эта услуга на промышленном ламинаторе шириной 1,6 метра. Чаще всего мы ламинируем отпечатанную самоклеящуюся пленку для защиты от царапин или выгорания. Но так же можем заламинировать и бумагу. Кроме того, мы изготавливаем широкоформатную печать для поклейки на стекло изнутри помещения. Таким образом с улицы будет видна ваша реклама, а фактически пленка будет наклеена внутри помещения.
                                </p>
                                </div>
                                }
                                </li>
                            <li
                            className='services_item'
                            
                            > <img 
                            className='img_services'
                            onClick={() => hendlerOpenPlotter()}
                            src="./img/services/pic4.png" alt="" />
                             <p className='services_name' >Плоттерная порезка</p>
                             {isOpenPlotter &&
                                <div className='modal_services'>
                                     <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                 <h3>Плоттерная порезка</h3>   
                                 <div className='img_wraper'>
                                    <img src="./img/services/pic4.png" alt="" />
                                 </div>
                                <p>Широкоформатная типография Express-Print изготавливает фигурные наклейки и стикерпаки любого размера. Печать наклеек на интерьерном принтере с последующей подрезкой пленки. Это красиво и удобно для маркировки вашей продукции. Кроме того наш плоттер может фигурно порезать даже заламинированную пленку. 
                                </p>
                                </div>
                                }</li>
                            <li
                            className='services_item'
                            
                            > <img 
                            className='img_services'
                            onClick={() => hendlerOpenGates()}
                            src="./img/services/pic6.png" alt="" /> 
                            <p className='services_name' >Проварка подворотов и набивка люверсов</p>
                            {isOpenGates &&
                                <div className='modal_services'>
                                 <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                    <h3>Проварка подворотов и набивка люверсов</h3>   
                                <div className='img_wraper'>
                                    <img src="./img/services/pic6.png" alt="" />
                                 </div>
                                 <div>
                                    <p>Широкоформатная типография Express-Print производит полный цикл постпечатной обработки. </p>
                                    <p>Для баннеров – это порезка, пропайка подворотов для усиления полотна, набивка металлических колец (люверсов) для крепления на рекламную конструкцию. Сварка отпечатанных баннеров в один большой баннер с последующей пропайкой и набивкой люверсов.</p>
                                    <p>Для самоклеящейся пленки это порезка в размер, плоттерная порезка, ламинация, порезка на готовые изделия, поклейка на лист пластика (стенд).</p>
                                    <p>Для бумаги это порезка на плакаты или ламинация.</p>
                                 </div>
                                </div>
                                }</li>
                            <li
                            className='services_item'
                            
                            > <img
                            className='img_services'
                            onClick={() => hendlerOpenAdversting()}
                             src="./img/services/pic7.png" alt="" />
                             <p className='services_name' >Изготовление Наружной рекламы</p>
                             {isOpenAdversting &&
                                <div className='modal_services'>
                                 <div
                                 className='close_modal_services'
                                 onClick={()=> hendlerCloseAll()}
                                 > <BsBackspace
                                 className='back_img'
                                 /> Назад </div>
                                    <h3>Изготовление Наружной рекламы</h3>   
                                <div className='img_wraper'>
                                    <img src="./img/services/pic7.png" alt="" />
                                 </div>
                                 <div>
                                    <p>Мы изготавливаем любой вид наружной и внутренней рекламы. Это могут быть разнообразные стенды, уголки покупателя, акриловые подставки под товар, настенные рекламные конструкции (лого компании на ресепшене). На улице – это могут быть вывески, световые короба, фреймлайты, объёмные буквы. Все может быть с диодной подстветкой или без нее. Поклейка самоклеющейся пленки на окна, натяжка баннера на рекламную конструкцию. Для замеров и просчетов на место выезжают наши специалисты. Так же наши специалисты демонтируют старую рекламу, пленку, баннера, а потом повесят, приклеют, натянут вашу новую рекламу. Все в кратчайшие сроки, качественно и на высоком профессиональном уровне.</p>
                                    <p>Таким образом наша типография широкоформатной печати и наружной рекламы Express-Print предоставляет полный цикл услуг. От замера и дизайна, до монтажа и подключения. Кроме того, вы всегда можете предоставить свои готовые макеты для печати или самостоятельно осуществить монтаж рекламы. Сэкономив расходы на эти позиции. Цена на широкоформатную печать от этого не измениться.</p>
                                 </div>
                                </div>
                                }</li>
                        </ul>
                    </div>
                    <div className='faq'>
                        <h2>вопросы и ответы</h2>
                        <ul>
                            <li> <img src="./img/faq/ask1.svg" alt="" /> 
                            <h3>Как быстро я получу свои баннера или пленки?</h3>
                            <p>Если готовые файлы для печати будут до 12.00, то в тот же день.</p>
                            </li>
                            <li> <img src="./img/faq/ask1.svg" alt="" /> 
                            <h3>Как долго изготавливается вывеска, конструкция, поклейка?</h3>
                            <p>Все зависит от размеров и сложности рекламных конструкций. Все просчитывается отдельно и согласовываются тех условие, цена, сроки.</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Есть ли скидки на широкоформатную печть? Можно ли торговаться?</h3>
                            <p>Да. При больших обьемах мы даем существенные скидки. </p>
                            </li>
                            <li> <img src="./img/faq/ask1.svg" alt="" /> 
                            <h3>Какова цена на дизайн и широкоформатную печать?</h3>
                            <p>Дизайн от 300 грн. Баннер и с широкоформатной печатью, подворотами и люверсами от 190 грн. Самоклеящаяся пленка так же от 190 грн. При крупных объемах – скидка!</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Возможна ли печать баннеров большого размера?</h3>
                            <p>Да. Ширина наших широкоформатных принтеров 3,2м. Это будет бесшовное полотно. Но если размер вашей рекламной конструкции превышает 3,2м, то мы можем напечатать и спаять баннер любого размера. Даже размером с дом.</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Можно ли у вас напечатать фигурные наклейки или стикерпак?</h3>
                            <p>Да! Мы печатаем качественные наклейки на японском интерьерном принтере и вырезаем плоттером по контуру. Контур может быть абсолютно любой.</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Возможна ли отправка широкоформатной печати в другие города Украины?</h3>
                            <p>Да! Пленки мы упаковываем в твердые тубусы, а баннера наматываем на тубусы, чтобы ваша реклама не пострадала при пересылке и отправляем в любой город Украины Новой Почтой или Деливери.</p>
                            </li>
                            
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default MainPage;