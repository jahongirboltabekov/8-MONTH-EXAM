import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import logo from '../../../assets/logo.svg'
import carts from '../../../assets/carts.svg'

function Footer() {
  return (
    <div className='footer_div'>
        <div className="container">
            <footer>
                <ul>
                    <li><NavLink to={'/'}><img src={logo} alt="" /></NavLink></li>
                    <li>8 (800) 890-46-56</li>
                    <li><img src={carts} alt="" /></li>
                    <li><p>Политика конфидециальности</p></li>
                    <li><p>Политика конфидециальности</p></li>
                </ul>
                <ul>
                    <p>Покупателям</p>
                    <li>О компании</li>
                    <li>Доставка и оплата</li>
                    <li>Возврат</li>
                    <li>Гарантии</li>
                    <li>Контакты</li>
                    <li>Блог</li>
                </ul>
                <ul>
                    <p>Товары</p>
                    <li>Люстры</li>
                    <li>Светильники</li>
                    <li>Бра</li>
                    <li>Торшеры</li>
                    <li>Комплектуюшие</li>
                    <li>Настольные лампы</li>
                </ul>
                <ul>
                    <p>Покупателям</p>
                    <li>Споты</li>
                    <li>Трековые светильники</li>
                    <li>Уличные светильники</li>
                    <li>Технические светильники</li>
                    <li>Светодиодные ленты</li>
                </ul>

            </footer>
        </div>
    </div>
  )
}

export default Footer