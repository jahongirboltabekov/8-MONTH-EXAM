import React from 'react'
import './Navbar.scss'
import logo from '../../../assets/logo.svg'
import burger from '../../../assets/burger.svg'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { BiBarChartAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div>
        <div className="container">
            <nav>
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
                    <div className="icons">
                        <BiBarChartAlt  className='icon'/>
                        <p>Сравнение</p>
                    </div>
                    <NavLink to={'/cart'}>
                        <div className="icons">
                            <PiShoppingCartLight  className='icon'/>
                            <p>Корзина</p>
                        </div>                            
                    </NavLink>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar