import React from 'react'
import './banner.scss'
import img from '../../../assets/banner_img.png'
function Banner() {
  return (
    <div>
        <div className="banner_div">
            <div className="container">
                <div className="banner_wrap">
                    <div className="banner_text">
                        <h1>Скидка 15% на все подвесные светильники <span>до 5 февраля</span></h1>
                    </div>
                    <div className="banner_img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner