import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SPoon } from '../../Icons'
import Button from '../../UI/button/Button'
import AOS from 'aos'

import './about-sec.css'
import "aos/dist/aos.css";

const AboutSec = () => {

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='about-section flex center section-space relative'>
      <div className="absolute letter">G</div>
        <div className="about-content container flex center">
          <div className="about-section-list left flex column-end" data-aos="fade-right" data-aos-duration="1000" >
            <h2 className='section-title text-gold'>About Us</h2>
            <SPoon classes='spoon-icon' />
            <p className='text-right about-section-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus nisi sapiente distinctio molestias, ea quasi officiis? Enim a.</p>
            <Button onClic={() => navigate('/about-us')}>Know More</Button>
          </div>
          <div className="center-img" data-aos="fade-up" data-aos-duration="1000" >
            <img src="./assets/knigh.png" alt="" />
          </div>
          <div className="about-section-list right flex column-start" data-aos="fade-left" data-aos-duration="1000" >
            <h2 className='section-title text-gold'>Our History</h2>
            <SPoon classes='spoon-icon' />
            <p className='text-left about-section-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus nisi sapiente distinctio molestias, ea quasi officiis? Enim a.</p>
            <Button onClic={() => navigate('/about-us')}>Know More</Button>
          </div>
        </div>
    </section>
  )
}

export default AboutSec