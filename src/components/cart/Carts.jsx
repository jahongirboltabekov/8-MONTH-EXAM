import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, inc, removeFromCart } from '../../context/slices/cartSlice'
import { BsFillCartXFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Cart.scss'
import { NavLink } from 'react-router-dom';

const Carts = () => {
    const card = useSelector(e => e.cart.value)
    let dispatch = useDispatch()

    console.log(card);

    

    let card_product = card?.map((el) =>
        <div className="products"  key={el.id}>
            <div className="img">
                <img className='pro_img' src={el.url} alt="" />
            </div>
            <div className="about">
                <h3>{el.title}</h3>
                <p>${el?.price*el.quantity}</p>
            </div>
            <h5>{el.decs}</h5>
            <h5>{el.decs}</h5>
                             
            <div className="PlusMinus">
                <button disabled={el.quantity<=1} onClick={() => dispatch(decrementCart(el))}>-</button>
                <h5 className='count'>{el.quantity}</h5>
                <button onClick={() => dispatch(inc(el))}>+</button>
            </div>
            
            <RiDeleteBin6Line className='remove_btn' onClick={() => dispatch(removeFromCart(el.id))}/>
        </div>
    )

  return (
    <div>
        <div className="container">
            {
                card.length
                ?
                <div className="">
                    <div className="card_products">
                        <div className="h">
                            <h2>Фото</h2>
                            <h2>Товары</h2>
                            <h2>Описание</h2>
                            <h2>Артикул</h2>
                            <h2>Количество</h2>
                        </div>
                        {card_product}
                    </div>

                    <form>
                        <div className="buy_inputs">
                            <div className="inputs">
                                <h1>Оформление</h1>
                                <div className="input">
                                    <input required type="text" placeholder='ФИО'/>
                                    <input required type="text" placeholder='Tелефон'/>
                                    <input required type="text" placeholder='Электронная почта'/>
                                </div>
                            </div>
                            <div className="location">
                                <h1>Доставка</h1>
                                <input required type="text"  placeholder='Адрес доставки'/>
                                <textarea type="text"  placeholder='Комментарий'/>
                            </div>
                        </div>
                        <div className="buy_inputs">
                            <h1>Оплата</h1>
                            <div className="costs">
                                <p>Товары............................................. ${200}</p>
                                <p>Доставка.............................................. ${50}</p>
                            </div>
                            <p className="total_cost">${500}</p>
                            <div className="cost_btns">
                                <button>Купить</button>
                                <p><input required type="checkbox" />Я согласен наобработку моих персональных данных</p>
                                
                            </div>
                        </div>
                    </form>
                </div>
                
                :
                <div className="card_products">
                    <div className="empty">
                        <BsFillCartXFill className='hearts' />
                        <h1>Hozirda savatinggiz bo'sh</h1> 
                        <p>Agarda maxsulot sotib olmoqchi bo'lsanggiz bosh sahifaga o'tib savatcha tugmasini bosing</p>
                        <NavLink to={'/'}><button>Bosh Sahifaga</button></NavLink>                            
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Carts