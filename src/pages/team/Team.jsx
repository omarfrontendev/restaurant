import React from 'react'
import AboutHero from '../about/aboutSections/AboutHero'
import Chefs from './Chefs'
import Chef from '../../components/chef/Chef'
import Awards from '../../components/awards/Awards'

import './team.css'

const Team = () => {
  return (
    <>
      <AboutHero title='Team' pages={[{id: 1, text: 'Home', path: '/'}]} />
      <Chefs />
      <Chef />
      <Awards />
    </>
  )
}

export default Team