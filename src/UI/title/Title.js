import React from 'react'
import { SPoon } from '../../Icons'

import './title.css'

const Title = ({ subtitle, title }) => {
  return (
    <div className='main-title flex column'>
      <p className='subtitle'>{subtitle || ''}</p>
      <SPoon classes='spoon-icon' />
      <h2 className='section-title text-gold'>{title}</h2>
    </div>
  )
}

export default Title