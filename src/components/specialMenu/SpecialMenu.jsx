import React, { useEffect } from 'react'
import Title from '../../UI/title/Title'
import Menu from './Menu'
import AOS from 'aos'

import './specilaMenu.css'

const SpecialMenu = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  const leftMenuData = {
    title: 'Wine & Beer',
    data: [
      {
        id: 1,
        subtitle: 'Chapel Hill Shiraz',
        win: 'AU | Bottle',
        num: '56'
      },
      {
        id: 2,
        subtitle: 'Catena Malbec',
        win: 'AR | Bottle',
        num: '59'
      },
      {
        id: 3,
        subtitle: 'La Vieille Rosé',
        win: 'FR | 750 ml',
        num: '44'
      },
      {
        id: 4,
        subtitle: 'Rhino Pale Ale',
        win: 'CA | 750 ml',
        num: '31'
      },
      {
        id: 5,
        subtitle: 'Irish Guinness',
        win: 'IE | 750 ml',
        num: '26'
      },
    ]
  };

  const rightMenuData = {
    title: 'Cocktails',
    data: [
      {
        id: 1,
        subtitle: 'Aperol Spritz',
        win: 'Aperol | Villa Marchesi prosecco | soda | 30ml',
        num: '20'
      },
      {
        id: 2,
        subtitle: "Dark 'N' Stormy",
        win: 'Dark rum | Ginger beer | Slice of lime.',
        num: '16'
      },
      {
        id: 3,
        subtitle: 'Daiquiri',
        win: 'Rum | Citrus juice | Sugar',
        num: '10'
      },
      {
        id: 4,
        subtitle: 'Old Fashioned',
        win: 'Bourbon | Brown sugar | Angostura Bitters',
        num: '31'
      },
      {
        id: 5,
        subtitle: 'Old Fashioned',
        win: 'Bourbon | Brown sugar | Angostura Bitters',
        num: '31'
      },
    ]
  };

  return (
    <section className='special_menu-section section-space'>
      <Title subtitle='Menu That Fits You Palatte' title='Today’s Special' />
      <div className="special_menu-content container flex space-between">
          <Menu data={leftMenuData} state='right' />
          <div 
            className="special_menu-img" 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay='200'
          >
            <img src="./assets/3596233-1.png" alt="" />
          </div>
          <Menu data={rightMenuData} state='left' />
      </div>
    </section>
  )
}

export default SpecialMenu