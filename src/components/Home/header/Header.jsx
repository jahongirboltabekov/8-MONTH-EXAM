import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div>
        <div className="container">
            <div className="header_wrap">
                <ul>
                    <li><NavLink to={'/about'}>О компании</NavLink></li>
                    <li><NavLink to={'/delivery'}>Доставка и оплата</NavLink></li>
                    <li><NavLink to={'/return'}>Возврат</NavLink></li>
                    <li><NavLink to={'/guarantee'}>Гарантии</NavLink></li>
                    <li><NavLink to={'/contact'}>Контакты</NavLink></li>
                    <li><NavLink to={'/blog'}>Блог</NavLink></li>
                </ul>
                <div className="header_p">
                    <p className="p1">8 (800) 890-46-56</p>
                    <p className="p2">Заказать звонок</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header