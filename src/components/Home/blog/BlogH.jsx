import React from 'react'
import './BlogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../../assets/blog_img1.png'
import img2 from '../../../assets/blog_img2.png'
import img3 from '../../../assets/blog_img3.png'
import arrow from '../../../assets/arrow.svg'
import { NavLink } from 'react-router-dom';


function BlogH() {
  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Блог</h1>
                <NavLink to={'/blog'}><button><p>Перейти в блог</p><FaArrowRightLong  className='btn_icon'/></button></NavLink>
            </div>
            <div className="blog_cards">
                <div className="blog_card">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
            </div>
            <div className="blog_text">
                <h5>Производство светильников</h5>
                <div className="p">
                    <p>
                        Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                    </p>
                    <p>
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogH