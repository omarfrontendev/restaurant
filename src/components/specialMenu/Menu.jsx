import React from 'react'

import './specilaMenu.css'

const Menu = ({ data, state }) => {
  return (
    <div 
      className='special_menu'
      data-aos={`fade-${state}`} 
      data-aos-duration="1000" 
    >
      <h3 className='special_menu-title text-center'>{data.title}</h3>
      <div className="menu_list flex column-start">
        {data.data.map(data => (
          <div key={data.id}>
            <div className="row flex space-between">
              <h4 className='text-gold'>{data.subtitle}</h4>
              <div className="line"></div>
              <span>${data.num}</span>
            </div>
            <p>{data.win}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu