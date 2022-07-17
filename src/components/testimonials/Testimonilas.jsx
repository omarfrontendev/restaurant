import React from 'react'
import Title from '../../UI/title/Title'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper";

import './testimonials.css'
import "swiper/css";
import "swiper/css/pagination";

const Testimonilas = () => {

  const customers = [
    {
      id: 1,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/4-1-150x150.png',
      name: 'Wade Warren',
      job: 'Sommelier'
    },
    {
      id: 2,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/3-1-150x150.png',
      name: 'Jane Cooper',
      job: 'Chef'
    },
    {
      id: 3,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/1-5-150x150.png',
      name: 'Robert Fox',
      job: 'chef'
    },
    {
      id: 4,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/2-3-150x150.png',
      name: 'Brooklyn Simmons',
      job: 'Caterer'
    },
  ]

  return (
    <section className='testimony__section section-space'>
      <div className="over__lay"></div>
      <div className="container">
        <div className="testmony__content">
          <Title subtitle='Testimony' title='Happy Customers' />
          <div className="testimony_slider"
            data-aos='fade-up' 
            data-aos-duration="1000" 
          >
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="tesimony_swiper"
          >
            {customers.map(customer => (
              <SwiperSlide key={customer.id}>
                <div className="customer flex column">
                  <img src={customer.img} alt="Customer Image" />
                  <h3 className='text-gold'>{customer.name}</h3>
                  <span>{customer.job}</span>
                  <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, voluptatem consectetur labore quisquam temporibus porro numquam rerum error deserunt repellendus repudiandae dolore veniam, magni obcaecati doloribus iusto ex voluptates dignissimos?</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonilas