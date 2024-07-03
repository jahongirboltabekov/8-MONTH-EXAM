import React from 'react'
import '../Home/blog/BlogH.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../assets/blog_img1.png'
import img2 from '../../assets/blog_img2.png'
import img3 from '../../assets/blog_img3.png'
import arrow from '../../assets/arrow.svg'
import { NavLink } from 'react-router-dom';

function BlogA() {
  return (
    <div>
        <div className="container">
            <div className="theme">
                <h1>Блог</h1>
                <NavLink to={'/blog'}><button><p>Перейти в блог</p><FaArrowRightLong className='btn_icon' /></button></NavLink>
                
            </div>
            <div className="blog_cards">
                <div className="blog_card">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
                <div className="blog_card">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <h4>Как правильно освещать дом снаружи? <img src={arrow} alt="" /></h4>
                    <p>01.01.2024</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogA