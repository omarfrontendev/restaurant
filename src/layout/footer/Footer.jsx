import React from 'react'
import Title from '../../UI/title/Title'
import Button from '../../UI/button/Button'
import { ImFacebook } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

import './footer.css'

const Footer = () => {
  return (
    <>
      <section className='subscribe__section section-space'>
        <div className="container susctibe__content section-space">
          <Title subtitle='Newsletter' title='Subscribe To Our Newsletter' />
          <div className="subscribe_form flex">
            <input type="email" name="eamil" id="eamil" placeholder='Email Address' />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className="container footer__content flex space-between section-space">
          <div className="footer_left flex column text-center">
            <h4>Contact Us</h4>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-344-1230</p>
          </div>
          <div className="footer_center column text-center">
            <h3 className='text-gold'>Gerícht</h3>
            <p>“The best way to find yourself is to lose yourself in the service of others.”</p>
            <div className="flex center">
              <ImFacebook />
              <BsTwitter />
              <BsInstagram />
            </div>
          </div>
          <div className="footer_right flex column text-center">
            <h4>Working Hours</h4>
            <p>Monday-Friday: 08:00 am -12:00 am</p>
            <p>Saturday-Sunday: 07:00am -11:00 pm</p>
          </div>
        </div>
      </footer>
      <p className='text-center' style={{padding: '10px'}}>© 2021 Geritcht. All Rights Reserved.</p>
    </>
  )
}

export default Footer