import React from 'react'
import AboutHero from './aboutSections/AboutHero'
import Chef from '../../components/chef/Chef'
import Testimonilas from '../../components/testimonials/Testimonilas'
import Gallery from '../../components/gallery/Gallery'
import History from './aboutSections/History'

import './about.css'

const About = () => {

  const pages = [
    {
      text: 'Home',
      path: '/',
      id: 1
    }
  ]

  return (
    <>
      <AboutHero pages={pages} title='About Us' />
      <History />
      <Chef />
      <Testimonilas />
      <Gallery />
    </>
  )
}

export default About