import React from 'react'
import AboutSec from '../../components/about/AboutSec'
import Hero from '../../components/hero/Hero'
import Images from '../../components/images-section/Images'
import SpecialMenu from '../../components/specialMenu/SpecialMenu'
import Chef from '../../components/chef/Chef'
import Testimonilas from '../../components/testimonials/Testimonilas'
import Awards from '../../components/awards/Awards'
import BlogsSec from '../../components/blogs-s/BlogsSec'
import Gallery from '../../components/gallery/Gallery'

const Home = ({ blogs }) => {
  return (
    <>
      <Hero />
      <AboutSec />
      <Images />
      <SpecialMenu />
      <Chef />
      <Testimonilas />
      <Awards />
      <BlogsSec blogs={blogs} />
      <Gallery />
    </>
  )
}

export default Home