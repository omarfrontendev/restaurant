import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/button/Button'

import './error.css'

const Error = () => {

  const navigate = useNavigate();

  return (
    <div className='error__page container text-center flex center column section-space'>
      <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/themes/geritcht-theme/assets/images/redux/404.png" alt="" />
      <h3 className='text-gold'>Oops! This Page Is Not Found.</h3>
      <Button onClic={() => navigate('/')}>Back To Home</Button>
    </div>
  )
}

export default Error