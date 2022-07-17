import React from 'react'
import AboutHero from '../about/aboutSections/AboutHero'
import Title from '../../UI/title/Title'
import Button from '../../UI/button/Button'
import Images from '../../components/images-section/Images'
import Awards from '../../components/awards/Awards'
import SpecialMenu from '../../components/specialMenu/SpecialMenu'
import { useNavigate } from 'react-router-dom'

import './services.css'

const Services = () => {

  const navigate = useNavigate();

  const pages = [
    {
      id: 1,
      path: '/',
      text: 'Home'
    }
  ]

  return (
    <>
      <AboutHero title='Services' pages={pages} />
      <section className='quakity__section section-space text-center'>
        <Title subtitle='Serving Quality' title='We At Gericth Are Serving Our Customers For Over A Decade.'/>
        <div className="quality__content">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cupiditate facere modi asperiores, aut hic, iusto repellat at accusamus minima obcaecati veniam temporibus amet aliquid pariatur voluptas quidem quam beatae.</p>
          <div className="btns flex center">
            <Button onClic={() => navigate('/servies')}>Read More</Button>
            <Button onClic={() => navigate('/contact-us')}>Contact US</Button>
          </div>
        </div>
      </section>
      <Images />
      <Awards />
      <section className='happy__section section-space text-center flex center column'>
        <h2 className='text-gold'>Happy Hours</h2>
        <p>Monday - Friday (4:00 Pm - 7:00 Pm)</p>
      </section>
      <SpecialMenu />
    </>
  )
}

export default Services