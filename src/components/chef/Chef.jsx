import React, { useEffect } from 'react'
import Title from '../../UI/title/Title'
import { ImQuotesLeft } from 'react-icons/im'
import AOS from 'aos'
 
import './chef.css'

const Chef = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='chef__sction section-space'>
      <div className="container">
        <div className="chedf__content flex space-between">
          <div
            data-aos='fade-right'
            data-aos-duration="1000" 
            className="chef_img"
          >
            <img style={{width: '100%', maxWidth: '450px'}} src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Image.png" alt="" />
          </div>
          <div 
            className="chef-data"
            data-aos="fade-left" 
            data-aos-duration="1000" 
          >
            <Title title='What We Believe In' subtitle='Chef’s Word'/>
            <div className="chef__text">
              <span><ImQuotesLeft className='quotes-icon'/></span>
              <p className='chef-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero qui quia aliquid temporibus voluptas soluta sequi nobis, distinctio fuga, ratione asperiores harum dolor ullam ipsa quam impedit reiciendis. Illum, hic! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur accusamus nesciunt vel nobis ut?</p>
            </div>
            <h3 className='text-gold'>Kevin Luo</h3>
            <span>Chef & Founder</span>
            <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/Kevin-Luo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chef