import React, { useEffect, useState } from "react";
import { SPoon } from '../../Icons'
import Button from '../../UI/button/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Autoplay } from "swiper";
import AOS from 'aos'


import './hero.css'
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [currentActive, setCurrentActive] = useState(0)

  const newMeals = [
    {
      id: 1,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/02.png',
      title: 'Reserve Your Table Today',
      des: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
    },
    {
      id: 2,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/03.png',
      title: 'Food That Surprise You',
      des: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
    },
    {
      id: 3,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/04.png',
      title: 'Love The Original Taste',
      des: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
    },
    {
      id: 4,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01.png',
      title: 'The Key To Fine Dining',
      des: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus'
    }
  ];

  return (
    <section className='her-section container flex space-between'>
      {newMeals.map((m, i) => i === currentActive && (
        <div className="hero-text flex column-start " key={m.id}>
          <div className="hero-subtitle flex column-start">
            Chase The New Flavour
            <SPoon classes='spoon-icon' />
          </div>
          <h1 className='text-gold hero-title'>
            {m.title}
          </h1>
          <p className='hero-p main-text medium'>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
          </p>
          <Button>
            Explore Menu
          </Button>
        </div>
      ))}
      <div className="hero-slider-img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='300'>
        <Swiper
          onSlideChange={(e) => {
            if(e.activeIndex > newMeals.length) {
              setCurrentActive(0)
            }else if(e.activeIndex == 0) {
              setCurrentActive(newMeals.length - 1)
            }else {
              setCurrentActive(e.activeIndex - 1)
            }
          }}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={true}
          modules={[EffectCreative, Navigation, Autoplay]}
          className="mySwiper"
        >
          {newMeals.map(meal => (
              <SwiperSlide key={meal.id} className="hero-img relative">
                <img src={meal.img} alt="Meal Image" />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero