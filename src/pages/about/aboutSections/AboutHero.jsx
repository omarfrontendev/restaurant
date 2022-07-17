import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'

import '../about.css'

const AboutHero = ({ pages, title }) => {
  return (
    <section className='about__hero-section flex center'>
      <div className="flex column relative container">
        <h2 className='text-gold text-center'>{title}</h2>
          <div className="hero__links flex center">
          {pages.map(page => (
            <div className='flex' key={page.id} >
              <Link className='link_text' to={page.path}>{page.text}</Link>
              <MdArrowForwardIos className='next-arrow' />
            </div>
          ))} 
          <p className='link_text'>{title.length > 14 ? `${title.slice(0, 14)}...` : title}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero