import React from 'react'
import AboutHero from '../about/aboutSections/AboutHero'
import Button from '../../UI/button/Button'

import './contact-us.css'

const ContactUs = () => {
  return (
    <>
      <AboutHero title={'Contact Us'} pages={[{id:1, text:'Home', path: '/'}]} />
      <div className="container">
        <section className='out_location section-space'>
          <img style={{display: 'block', width: '100%', border: '2px solid var(--gold-color)'}} src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/Rectangle-30.jpg" alt="" />
        </section>
      </div>
      <section className='contact_form section-space'>
        <div className="container">
          <div className="conatct__content flex space-between">
            <form className='flex column-start'>
              <input required type="text" id="fullname" placeholder='Full Name' />
              <input required type="email" id='email' placeholder='Email Address' />
              <textarea required name="message" placeholder='Message' id="message" cols="30" rows="10"></textarea>
              <Button type='submit'>Subscribe</Button>
            </form>
            <div className="contact_img">
              <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Group-43.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs