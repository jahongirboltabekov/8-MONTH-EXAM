import React from 'react'
import './Product.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import img_card from '../../../assets/img_card.svg'
import img_card2 from '../../../assets/img_card2.svg'
import img_card3 from '../../../assets/img_card3.svg'
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../context/slices/cartSlice';
import { toggleHeart } from '../../../context/slices/wishlistSlice';
import { FaHeart } from "react-icons/fa";
import { NavLink} from 'react-router-dom';

function Product({data,title}) {
  let dispatch = useDispatch()
  const wishlist = useSelector(v => v.wishlist.value)
  

    let product = data?.map((el) =>
        <div className="card" key={el.id}>
            <button onClick={() => dispatch(toggleHeart(el))}>
                    {
                        wishlist?.some((inx) => inx.id === el.id) ? 
                        <FaHeart   className='img_icon' />
                        :
                        <FaRegHeart  className='img_icon'/>
                    }

            </button>
            <NavLink to={`/products/${el.id}`}>
                <div className="img">
                    <img src={el.url} alt="" />
                </div>
            
                <div className="card_text">
                        <h3>{el.title.slice(0, 20)}</h3>
                    <div className="text">
                        <p> <del>${el.price * 2}</del>${el.price}</p>
                    </div>
                </div>
            </NavLink>
            <button type='submint' className='btn_cart' onClick={() => dispatch(addToCart(el))}><FaCartPlus /></button>
        </div>
);

return (
<div>
    <div className="container">
        <div className="theme">
            <h1>{title}</h1>
            <button><p>Все товары</p><FaArrowRightLong /></button>
        </div>
        <div className="products">
            {product}
        </div>
        <div className="theme">
            <h1>Только проверенные бренды</h1>
            <div className="buttons">
                <button><HiOutlineArrowLongLeft className=''/></button>
                <button><HiOutlineArrowLongRight className=''/></button>
            </div>
        </div>
        <div className="img_card">
            <img src={img_card} alt="" />
            <img src={img_card2} alt="" />
            <img src={img_card3} alt="" />
            <img src={img_card} alt="" />
        </div>
    </div>
</div>
)
}

export default Product