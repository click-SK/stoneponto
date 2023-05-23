import React from 'react';
import '../style/mainPage.scss'
import Slider from './template/Slider';


const MainPage = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const images = [
        // './img/banner1.png',
        './img/Ресурс 8.svg',
      ];

    //   console.log(images);


    return (
        <div className='main_wraper'>
            <div className='banner_wrap'>
                {/* <img src="./img/banner.svg" alt="" /> */}
                <Slider images={images} interval={3000} />
            </div>
            <div className='body_wrap'>
                <div className='description_block'>
                        <h1>Широкоформатная печать как средство маркетингового продвижения</h1>
                    {/* <title>
                    </title> */}
                    <p>Ponto-print, компания – производитель широкоформатной печати на собственном оборудовании. Благодаря тому, что постоянно обновляется парк оборудования и используется краска европейских и японских производителей, печать не выцветает долгое время, нет полошения и отсутствует эффект «матраса». Осуществляя печать, мы не экономим на краске, поэтому получается сочные, яркие и насыщенные отпечатки. В наличии есть спектрофотометр, благодаря которому не проблема подобрать любой корпоративный цвет. Производственные мощности и квалифицированный персонал справятся с любым объемом печати даже в самые сжатые сроки, независимо от величины заказа, включая весь спектр постпечатных услуг.  (Набивка люверсов, подрезка пленки, ламинация, порезка, проклейка швов). Наша компания предоставляет возможность отпечатать ваш заказ обычным (720dpi) или интерьерным (1440dpi) качеством.</p>
                </div>
                    <div className='services'>
                        <h2>описание услуг</h2>
                        <ul>
                            <li> <img src="./img/services/pic1.png" alt="" /> <p>ПЕЧАТЬ НА БАННЕРЕ</p></li>
                            <li> <img src="./img/services/pic2.png" alt="" /> <p>ПЕЧАТЬ НА ПЛЕНКЕ</p></li>
                            <li> <img src="./img/services/pic3.png" alt="" /> <p>ПЕЧАТЬ НА БУМАГЕ</p></li>
                            <li> <img src="./img/services/pic4.png" alt="" /> <p>ПЕЧАТЬ НА ПЕРФОПЛЕНКЕ</p></li>
                            <li> <img src="./img/services/pic6.png" alt="" /> <p>ПЕЧАТЬ НА ХОЛСТЕ</p></li>
                            <li> <img src="./img/services/pic7.png" alt="" /> <p>ПЕЧАТЬ НА БАННЕРНОЙ СЕТКЕ</p></li>
                        </ul>
                    </div>
                    <div className='faq'>
                        <h2>вопросы и ответы</h2>
                        <ul>
                            <li> <img src="./img/faq/ask1.svg" alt="" /> 
                            <h3>Питання 1</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Питання 2</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            <li> <img src="./img/faq/ask3.svg" alt="" /> 
                            <h3>Питання 3</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            <li> <img src="./img/faq/ask1.svg" alt="" /> 
                            <h3>Питання 4</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            <li> <img src="./img/faq/ask2.svg" alt="" /> 
                            <h3>Питання 5</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            <li> <img src="./img/faq/ask3.svg" alt="" /> 
                            <h3>Питання 6</h3>
                            <p>We embrace holistic development and support for employees with the aim.</p>
                            </li>
                            
                        </ul>
                    </div>
                <div className='blog'>
                    <h2>новости</h2>
                    <div className='blog_content_wrap'>
                        <div className='blog_item'>
                            <div className='img_blog_wrap'>
                                <img src="./img/blog/blog1.png" alt="" />
                            </div>
                            <div className='content_wrap'>
                            <h3 className='title_blog_item'>news title</h3>
                            <div className='date_item'><span>{formattedDate}</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio perferendis quae possimus dolorem officiis quibusdam praesentium iusto odio explicabo! Sit, minus eveniet consectetur possimus ex qui provident repellat porro.
                            A exercitationem sint quas minima mollitia cumque debitis omnis, fugiat maxime. Quasi ea magni placeat exercitationem dignissimos possimus quos inventore nam suscipit soluta, fuga, aut perspiciatis in dicta sint expedita!
                            Adipisci eum, a aspernatur expedita nobis libero ad modi tempore soluta? Nobis nesciunt dolorum veritatis doloribus eum aperiam nihil numquam molestias ut quia, sunt enim nisi, ad dolore distinctio obcaecati.
                            Beatae nam placeat aperiam dignissimos?</p>   
                            </div>
                        </div>
                        <div className='blog_item'>
                            <div className='img_blog_wrap'>
                                <img src="./img/blog/blog4.png" alt="" />
                            </div>
                            <div className='content_wrap'>
                            <h3 className='title_blog_item'>news title</h3>
                            <div className='date_item'><span>{formattedDate}</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio perferendis quae possimus dolorem officiis quibusdam praesentium iusto odio explicabo! Sit, minus eveniet consectetur possimus ex qui provident repellat porro.
                            A exercitationem sint quas minima mollitia cumque debitis omnis, fugiat maxime. Quasi ea magni placeat exercitationem dignissimos possimus quos inventore nam suscipit soluta, fuga, aut perspiciatis in dicta sint expedita!
                            Adipisci eum, a aspernatur expedita nobis libero ad modi tempore soluta? Nobis nesciunt dolorum veritatis doloribus eum aperiam nihil numquam molestias ut quia, sunt enim nisi, ad dolore distinctio obcaecati.
                            Beatae nam placeat aperiam dignissimos?</p>   
                            </div>
                        </div>
                        <div className='blog_item'>
                            <div className='img_blog_wrap'>
                                <img src="./img/blog/blog3.png" alt="" />
                            </div>
                            <div className='content_wrap'>
                            <h3 className='title_blog_item'>news title</h3>
                            <div className='date_item'><span>{formattedDate}</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio perferendis quae possimus dolorem officiis quibusdam praesentium iusto odio explicabo! Sit, minus eveniet consectetur possimus ex qui provident repellat porro.
                            A exercitationem sint quas minima mollitia cumque debitis omnis, fugiat maxime. Quasi ea magni placeat exercitationem dignissimos possimus quos inventore nam suscipit soluta, fuga, aut perspiciatis in dicta sint expedita!
                            Adipisci eum, a aspernatur expedita nobis libero ad modi tempore soluta? Nobis nesciunt dolorum veritatis doloribus eum aperiam nihil numquam molestias ut quia, sunt enim nisi, ad dolore distinctio obcaecati.
                            Beatae nam placeat aperiam dignissimos?</p>   
                            </div>
                        </div>
                        <div className='blog_item'>
                            <div className='img_blog_wrap'>
                                <img src="./img/blog/blog5.png" alt="" />
                            </div>
                            <div className='content_wrap'>
                            <h3 className='title_blog_item'>news title</h3>
                            <div className='date_item'><span>{formattedDate}</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio perferendis quae possimus dolorem officiis quibusdam praesentium iusto odio explicabo! Sit, minus eveniet consectetur possimus ex qui provident repellat porro.
                            A exercitationem sint quas minima mollitia cumque debitis omnis, fugiat maxime. Quasi ea magni placeat exercitationem dignissimos possimus quos inventore nam suscipit soluta, fuga, aut perspiciatis in dicta sint expedita!
                            Adipisci eum, a aspernatur expedita nobis libero ad modi tempore soluta? Nobis nesciunt dolorum veritatis doloribus eum aperiam nihil numquam molestias ut quia, sunt enim nisi, ad dolore distinctio obcaecati.
                            Beatae nam placeat aperiam dignissimos?</p>   
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;