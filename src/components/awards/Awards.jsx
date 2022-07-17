import React, { useEffect } from 'react'
import Title from '../../UI/title/Title'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import AOS from 'aos'

import './awards.css'

const Awards = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const laurels = [
    {
      id: 1,
      icon: <RiNumber1 />,
      title: 'Bib Gourmond',
      desc: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 2,
      icon: <RiNumber2 />,
      title: 'Rising Star',
      desc: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 3,
      icon: <RiNumber3 />,
      title: 'AA Hospitality',
      desc: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      id: 4,
      icon: <RiNumber4 />,
      title: 'Outstanding Chef',
      desc: 'Lorem ipsum dolor sit amet, consectetur.'
    },
  ]

  return (
    <section className='awards__section section-space'>
      <div className="container">
        <div className="awards__content flex space-between">
          <div 
            className="awards__left__col flex column-start"
            data-aos='fade-right'
            data-aos-duration="1000" 
          >
            <Title title='Our Laurels' subtitle='Awards & Recognition' />
            <div className="laurels flex space-between">
              {laurels.map(l => (
                <div className="laurel flex space-between" key={l.id}>
                  <div className="l_icon">
                    <div className="icon__wrapper">
                      {l.icon}
                    </div>
                  </div>
                  <div className="l_data flex column-start">
                    <h3 className='text-gold'>{l.title}</h3>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            data-aos='fade-left'
            data-aos-duration="1000" 
            className="awards__right__col"
          >
            <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Group-43.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards