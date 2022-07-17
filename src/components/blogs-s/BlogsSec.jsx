import React, { useEffect } from 'react'
import Button from '../../UI/button/Button'
import Title from '../../UI/title/Title'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Autoplay } from "swiper"
import AOS from 'aos'

import './blogs-s.css'
import "swiper/css"
import "swiper/css/free-mode"
import { useNavigate } from 'react-router-dom'

const BlogsSec = ({ blogs }) => {

  useEffect(() => {
    AOS.init()
  }, []);

  const navigate = useNavigate();

  return (
    <section className='blogs__section section-space'>
      <div className="container"
        data-aos='fade-up'
        data-aos-duration="1000" 
      >
        <Title subtitle='Blogs' title='Gerícht Updates' />
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="blogs_swiper"
      >
        {blogs.map(blog => (
          <SwiperSlide key={blog.id}>
            <div className="single__blog relative flex column">
              <div className="single__blog-date absolute">{blog.date}</div>
              <div onClick={() => navigate(`/blogs/${blog.id}`)} className="single__blog-img">
                <img src={blog.img} alt="" />
              </div>
              <div className="single__blog-data">
                <span className='single__blog-subtitle'>{blog.subtitle}</span>
                <h3 onClick={() => navigate(`/blogs/${blog.id}`)} className='text-gold'>{blog.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex eius quaerat molestias delectus cum magni ducimus, voluptatum voluptas rerum, iure nisi.</p>
                <Button onClic={() => navigate(`/blogs/${blog.id}`)}>Read More</Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  )
}

export default BlogsSec