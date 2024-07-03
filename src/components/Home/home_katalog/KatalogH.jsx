import './KatalogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import crad1 from '../../../assets/card1.svg'
import crad4 from '../../../assets/card4.svg'
import katalog1 from '../../../assets/katalog1.png'
import katalog2 from '../../../assets/katalog2.png'
import katalog3 from '../../../assets/katalog3.png'
import katalog4 from '../../../assets/katalog4.png'
import katalog5 from '../../../assets/katalog5.png'
import katalog6 from '../../../assets/katalog6.png'
import { NavLink } from 'react-router-dom';

function KatalogH() { 
  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Каталог</h1>
                <NavLink to={''}><button><p>Весь каталог</p><FaArrowRightLong  className='btn_icon'/></button></NavLink>
            </div>
            <div className="products_card">
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Люстры</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog1} alt="" />
                </div>
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Светильники</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog2} alt="" />
                </div>
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Бра</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog3} alt="" />
                </div>
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Торшеры</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog4} alt="" />
                </div>
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Настольные лампы</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog5} alt="" />
                </div>
                <div className="product_card">
                    <div className="text">
                        <p className='p1'>Споты</p>
                        <p className='p2'>От 540₽ <FaArrowRightLong  className='icon'/></p>
                    </div>
                    <img src={katalog6} alt="" />
                </div>
            </div>
            <div className="theme">
                <h1>Почему NORNLIGHT?</h1>
                <NavLink to={'/about'}><button><p>О компании</p><FaArrowRightLong  className='btn_icon'/></button></NavLink>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={crad1} alt="" />
                    <h3>Только проверенные бренды</h3>       
                    <p>Бренды, проверенные временем и качеством</p>        
                </div>
                <div className="card">
                    <img src={crad1} alt="" />
                    <h3>Самые низкие цены</h3>       
                    <p>Ниже не будет нигде</p>        
                </div>
                <div className="card">
                    <img src={crad4} alt="" />
                    <h3>Быстрая доствка</h3>       
                    <p>Доставляем по всей РФза 1-10 дней</p>        
                </div>
                <div className="card">
                    <img src={crad4} alt="" />
                    <h3>Большой ассортимент</h3>       
                    <p>Более 1000 товаров</p>        
                </div>
            </div>
        </div>
    </div>
  )
}

export default KatalogH