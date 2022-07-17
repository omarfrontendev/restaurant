import React, { useEffect } from 'react'
import Title from '../../UI/title/Title'
import Button from '../../UI/button/Button'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import AOS from 'aos'


import './gallery.css'
import "swiper/css"

const Gallery = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const images = [
    {
      id: 1,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/06.jpg',
    },
    {
      id: 2,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/07.jpg',
    },
    {
      id: 3,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01.jpg',
    },
    {
      id: 4,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/02.jpg',
    },
    {
      id: 5,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/03.jpg',
    },
    {
      id: 6,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/04.jpg',
    },
    {
      id: 7,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/05.jpg',
    },

  ]

  return (
    <section className='gallery__section section-space'>
      <div className="container">
        <div className="gallery__content flex">
          <div 
            data-aos='fade-right'
            data-aos-duration="1000" 
            className="galler__text flex column-start"
          >
              <Title subtitle='Instagram' title='Photo Gallery' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique corporis ea quibusdam.</p>
              <Button>View More</Button>
          </div>
          <div
             className="gallery"
             data-aos='fade-up'
             data-aos-duration="1000" 
          >
            <Swiper
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={800}
              slidesPerView={1}
              spaceBetween={20}
              modules={[Autoplay]}
              breakpoints={{
                575: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                },
              }}
              className="gallery_swiper"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery_img">
                    <img src={img.img} alt="" />
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

export default Gallery