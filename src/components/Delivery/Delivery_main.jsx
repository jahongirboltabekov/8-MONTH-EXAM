import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import "./Delivery.scss"


function Delivery_main() {
  return (
    <div>
      <div className="container">
        <p className='main_p'> <NavLink>Главная</NavLink><IoIosArrowForward />Доставка и оплата</p>
        <div className="about_text">
            <div className="about_cards">
              <h1>Доставка и оплата</h1>
            </div>
            <div className="about_p">
              <div className="h6">
                <h6>Доставка</h6>
                <p>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
              </div>
              <div className="h6">
                <h6>Курьерская доставка</h6>              
                <p>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
              </div>
              <div className="h6">
                <h6>Самовывоз</h6>
                <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют</p>
              </div>
            </div>
        </div>
      </div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1719977581532!5m2!1suz!2s" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>
  )
}

export default Delivery_main