import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, inc, removeFromCart } from '../../context/slices/cartSlice'
import { BsFillCartXFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import './Cart.scss'
import { NavLink } from 'react-router-dom';
import {useFormValue} from '../../hooks/useFormValue'

const botToken = '7021165985:AAGwqbId3W_92wuIloV_yeJzDM4Q3n1D7ew';
const chatId = '-4256618912';

const  intialState ={
    name:'',
    email:'',
    phone:'',
    comment: '',
    location:'',
}

const Carts = () => {
    const card = useSelector(e => e.cart.value)
    let dispatch = useDispatch()

    let sum = card?.reduce((a,b) => a+(b.price * b.quantity), 0)

    const {state,setState, handeleChange} = useFormValue(intialState)
    const handeleSubmit = (e) => {
        e.preventDefault()
        let text= `Buyurtma   %0A%0A`
        text+=`Ismi: ${state.name} %0A%0A`
        text+=`Email: ${state.email} %0A%0A`
        text+=`Telefon raqami: ${state.phone} %0A%0A`
        text+=`Manzil: ${state.location} %0A%0A`
        text+=`Sharx: ${state.comment} %0A%0A`
        card?.forEach(i => {
            text+=`Mahsulot nomi: ${i.title} %0A%0A`           
            text+=`Miqdori: ${i.quantity} ta %0A%0A` 
            text+=`Narxi: $${i.price} %0A%0A` 
            text+=`Umumiy Narxi: $${sum} %0A%0A` 
        });

        let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`
        
        let api = new XMLHttpRequest()
        api.open('GET',url,true)
        api.send()
        setState(intialState)
    }

    
    let card_product = card?.map((el) =>
        <div className="products"  key={el.id}>
            <div className="img">
                <img className='pro_img' src={el.url} alt="" />
            </div>
            <div className="about_wrap">
                <div className="about">
                    <h3>{el.title}</h3>
                    <p>${el?.price*el.quantity }</p>
                </div>
                <h5>{el.decs}</h5>
                <h5>{el.decs}</h5>
                                
                <div className="PlusMinus">
                    <button disabled={el.quantity<=1} onClick={() => dispatch(decrementCart(el))}>-</button>
                    <h5 className='count'>{el.quantity}</h5>
                    <button onClick={() => dispatch(inc(el))}>+</button>
                    <RiDeleteBin6Line className='remove_btn' onClick={() => dispatch(removeFromCart(el.id))}/>
                </div>
                
            </div>
        </div>
    )

  return (
    <div className='cart_div'>
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

                    <form onSubmit={handeleSubmit}>
                        <div className="buy_inputs">
                            <div className="inputs">
                                <h1>Оформление</h1>
                                <div className="input">
                                    <input required type="text" placeholder='ФИО' name='name' value={state.name} onChange={handeleChange}/>
                                    <input required type="text" placeholder='Tелефон' name='phone' value={state.phone} onChange={handeleChange}/>
                                    <input required type="email" placeholder='Электронная почта' name='email' value={state.email} onChange={handeleChange}/>
                                </div>
                            </div>
                            <div className="location">
                                <h1>Доставка</h1>
                                <input required type="text"  placeholder='Адрес доставки' name='location' value={state.location} onChange={handeleChange}/>
                                <textarea type="text"  placeholder='Комментарий' name='comment' value={state.comment} onChange={handeleChange}/>
                            </div>
                        </div>
                        <div className="buy_inputs">
                            <h1>Оплата</h1>
                            <div className="costs">
                                <p>Товары.............. ${sum}</p>
                                <p>Доставка.................${50}</p>
                            </div>
                            <p className="total_cost">${sum+50}</p>
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