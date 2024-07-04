import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import img_card from '../../assets/img_card.svg'
import img_card2 from '../../assets/img_card2.svg'
import img_card3 from '../../assets/img_card3.svg'
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";
import './About.scss'
import BlogA from './BlogA';

function About_header() {
  return (
    <div>
        <div className="container">
            <p className='main_p'> <NavLink>Главная</NavLink><IoIosArrowForward /> О компании</p>
            <div className="about_text">
                <div className="about_cards">
                    <h1>О компании</h1>
                    <div className="about_card">
                        <p className='p1'>170+ </p>
                        <p className='p2'>Товаров</p>
                    </div>
                    <div className="about_card">
                        <p className='p1'>1000+ </p>
                        <p className='p2'>Довольных покупателей</p>
                    </div>
                    <div className="about_card">
                        <p className='p1'>170+ </p>
                        <p className='p2'>Товаров</p>
                    </div>
                </div>
                <div className="about_p">
                    <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                    <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют</p>
                    <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                </div>
            </div>
            
            <div className="theme">
                <h1>Только проверенные бренды</h1>
                <div className="buttons">
                    <div className='arrow_btn'>
                        <HiOutlineArrowLongLeft />
                    </div>
                    <div className='arrow_btn'>
                        <HiOutlineArrowLongRight />
                    </div>
                </div>
            </div>
            <div className="img_card">
                <img src={img_card} alt="" />
                <img src={img_card2} alt="" />
                <img src={img_card3} alt="" />
                <img src={img_card} alt="" />
            </div>
            <BlogA/>

        </div>
    </div>
  )
}

export default About_header