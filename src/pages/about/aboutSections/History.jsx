import React, { useEffect } from 'react'
import { SPoon } from '../../../Icons'
import Title from '../../../UI/title/Title'
import AOS from 'aos'

const History = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  const data = [
    {
      id: 1,
      num: '30+',
      text: 'Breakfast Options'
    },
    {
      id: 2,
      num: '8+',
      text: 'Dinner Options'
    },
    {
      id: 3,
      num: '50+',
      text: 'New Locations'
    },
  ]

  return (
    <section className='history__section section-space'>
      <div className="container">
        <Title subtitle='Our History' title='Serving Customers For Over A Decade' />
        <div className="history_content flex">
          <div 
            className="left_col flex column-start start"
            data-aos='fade-left' 
            data-aos-duration='1000'
           >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur earum tempore eius ab quaerat in perferendis deleniti id dicta. Necessitatibus.</p>
            <div className="history_left_col_img">
              <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/2-1.png" alt="" />
            </div>
          </div>
          <div className="right_col flex column-end start">
            <div 
              data-aos='fade-right' 
              data-aos-duration='1000'
              className="history_right_col_img"
            >
              <img src="https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/1-1.png" alt="" />
              <h2 className='text-gold'>Over The Years</h2>
              <div className="history_data flex">
                {data.map(d => (
                  <div className='histry_data_col flex column' key={d.id}>
                    <h3 className='text-gold'>{d.num}</h3>
                    <SPoon classes='spoon-icon' />
                    <p>{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History