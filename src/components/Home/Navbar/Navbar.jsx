import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../../../assets/logo.svg'
import burger from '../../../assets/burger.svg'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { PiXBold } from "react-icons/pi";
import { BiBarChartAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { HiMiniShoppingCart } from "react-icons/hi2";


function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
        <div className="container">
            <div className={`header_wrap ${menu ? "show" : ""}`}>
                <div className="model_icons">
                    <div className="menu_icon">
                        <PiXBold onClick={() => setMenu(!menu)} className='menu' />
                    </div>
                    <div className="menu_icons">
                        <NavLink to={'/wishlist'}>
                                <FaRegHeart  className='icon'/>
                        </NavLink>
                        <div className="icons_2">
                            <BiBarChartAlt  className='icon'/>
                        </div>
                        <NavLink to={'/cart'}>
                                <HiMiniShoppingCart  className='icon'/>                                                       
                        </NavLink>
                    </div>

                </div>
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
            <nav>
                <div className="">
                    <TiThMenu onClick={() => setMenu(!menu)} className='menu' />
                </div>
                <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
                <div className="search">
                    <button><img src={burger} alt="" />Каталог</button>
                    <div className="inputH">
                        <input className='header_search' type="text" placeholder='Поиск по товарам'/>
                        <CiSearch className='input_icon'  /> 
                    </div>
                </div>
                <div className="header_icons">
                    <NavLink to={'/wishlist'}>
                        <div className="icons">
                            <FaRegHeart  className='icon'/>
                            <p>Избранное</p>
                        </div>
                    </NavLink>
                    <div className="icons_2">
                        <BiBarChartAlt  className='icon'/>
                        <p>Сравнение</p>
                    </div>
                    <NavLink to={'/cart'}>
                        <div className="icons">
                            <HiMiniShoppingCart  className='icon'/>
                            <p>Корзина</p>
                        </div>                            
                    </NavLink>
                </div>
            </nav>
                <div className="inputH_2">
                    <input className='header_search' type="text" placeholder='Поиск по товарам'/>
                    <CiSearch className='input_icon'  /> 
                </div>
        </div>
    </div>
  )
}

export default Navbar