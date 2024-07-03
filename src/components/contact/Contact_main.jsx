import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './Contact.scss'


function Contact_main() {
  return (
    <div>
        <div className="container">
            <p className='main_p'> <NavLink>Главная</NavLink><IoIosArrowForward />Контакты</p>
            <div className="about_text">
                <div className="about_cards">
                    <h1>Контакты</h1>
                </div>
                <div className="about_p">
                    <div className="h6">
                        <h6>8 (800) 890-46-56</h6>
                        <p className='p'>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: </p>
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
          <div className="contact_ways">
            <div className="contact">
                <h4>Адрес магазина</h4>
                <p>г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div className="contact">
                <h4>Почта</h4>
                <p>NORNLIGHT@mail.ru</p>
            </div>
            <div className="contact">
                <h4>Телефон</h4>
                <p>8 (800) 890-46-56</p>
            </div>

            <button>Оставить заявку</button>
          </div>
        </div>
    </div>
  )
}

export default Contact_main