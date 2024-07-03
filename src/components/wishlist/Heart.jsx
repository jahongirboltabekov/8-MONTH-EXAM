import React from 'react'
import { useSelector } from 'react-redux'
import './Heart.scss'
import Product from '../Home/Product/Product'
import { NavLink } from 'react-router-dom'
import { RiHeartsFill } from "react-icons/ri";

function Heart() {
  const wishlist = useSelector(v => v.wishlist.value)
  console.log(wishlist);
  
  return (
    <div>
      <div className="container">
     {
      wishlist?.length 
      ?
      <Product title='Избранные товары' data={wishlist} />
      :
      <div className="card_products">
          <div className="empty">
              <RiHeartsFill className='hearts' />
              <h1>Sizga yoqqanini qoʻshing</h1> 
              <p>Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing</p>
              <NavLink to={'/'}><button>Bosh Sahifaga</button></NavLink>                    
          </div>
      </div>    
    }    
    </div>
    </div>
  )
}

export default Heart