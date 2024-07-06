import React, { useEffect, useState } from 'react'
import './single.scss'
import {useGetProductByIdQuery} from '../../context/api/productApi'
import { useLocation, useParams } from 'react-router-dom'
import { FaOdnoklassniki } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
import './single.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '../../context/slices/wishlistSlice';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { addToCart } from '../../context/slices/cartSlice';



function SingleRoute() {
  const {id} = useParams()
  const {data,isError,isLoading} = useGetProductByIdQuery(id)
  let dispatch = useDispatch()
  const wishlist = useSelector(v => v.wishlist.value)

  const {pathname} = useLocation()
  
  useEffect(() =>{
        if(pathname.includes){
            window.scrollTo(0,0)
        }
  })

  const[count,setcount] = useState(1)

  const Plus = () =>{
    return setcount(count+1)
  }

  const Minus = () => {
    if(count>1){
    return setcount(count-1)
    }
    else if(count==1){
    return count
    }
}

  return (
    <div>
      <div className="container">
        <div className="single_div">
          <img src={data?.url} alt="" />
          <div className="single_text">
            <h1>{data?.title}</h1>
            <div className="min_texts">
              <div className="text">
                <p>Scott</p>
                <p>Артикул : 7655-188</p>
                <div className="p">В наличии</div>
              </div>
              <div className="imgs">
                <div className="single_icon">
                  <FaOdnoklassniki className='icon'/>
                </div>
                <div className="single_icon">
                  <FaVk className='icon'/>
                </div>
                <div className="single_icon">
                  <FaTelegramPlane className='icon'/>
                </div>
                <div className="single_icon">
                  <PiWhatsappLogoBold className='icon'/>
                </div>
              </div>
            </div>
            <h2>${data?.price*count} <del>${data?.price*2}</del></h2>
            <p>{data?.decs}</p>
            <div className="buttons">
              <div className="PlusMinus">
                <button onClick={Plus}>+</button>
                <h3>{count}</h3>
                <button onClick={Minus}>-</button>
              </div>
              <button className='cart_btn' type='submint' onClick={() => dispatch(addToCart(data))}>В корзину</button>
              <button className='heart_btn' onClick={() => dispatch(toggleHeart(data))}>
                {
                    wishlist?.some((inx) => inx === data) ? 
                    <FaHeart   className='img_icon' />
                    :
                    <FaRegHeart  className='img_icon'/>
                }
              </button>
            </div>
          </div>

        </div>

        
        <h3 className='single_h3'>Характеристика</h3>
        <ul className='ul'>
          <li><p className='p1'>Цвет</p> <p className='p2'>Жёлтый</p></li>
          <li className='li'><p className='p1'>Год</p> <p className='p2'>2016</p></li>
          <li><p className='p1'>Диаметр колеса</p> <p className='p2'>27.5</p></li>
          <li className='li'><p className='p1'>Материал рамы</p> <p className='p2'>Карбон</p></li>
          <li><p className='p1'>Размер</p> <p className='p2'>L</p></li>
          <li className='li'><p className='p1'>Страна</p> <p className='p2'>Швейцария</p></li>
          <li><p className='p1'>Производитель</p> <p className='p2'>Scott</p></li>
          <li className='li'><p className='p1'>Покрышки</p> <p className='p2'>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p></li>
          <li><p className='p1'>Рама</p> <p className='p2'>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p></li>
          <li className='li'><p className='p1'>Подседельный Штырь</p> <p className='p2'>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p></li>
          <li><p className='p1'>Седло</p> <p className='p2'>Ritchey WCS Streem V3 Titanium rails</p></li>
          <li className='li'><p className='p1'>Вилка</p> <p className='p2'>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p></li>


        </ul>
      </div>
    </div>
  )
}

export default SingleRoute