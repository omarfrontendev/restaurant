import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

const Chefs = () => {
  
  const chefs = [
    {
      id: 1,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01-2.jpg',
      name: 'Kevin Luo',
      job: 'Head Chef',
    },
    {
      id: 2,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/02-1.jpg',
      name: 'Patrick Choi',
      job: 'Deputy Chef',
    },
    {
      id: 3,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/03-1.jpg',
      name: 'Jack Biscoff',
      job: 'Station Chef',
    },
    {
      id: 4,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/04-1.jpg',
      name: 'Stacy Lee',
      job: 'Station Chef',
    },
    {
      id: 5,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/05-1.jpg',
      name: 'Aren Goodman',
      job: 'Junior Chef',
    },
    {
      id: 6,
      img: 'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/06-1.jpg',
      name: 'Javier Dowsing',
      job: 'Junior Chef',
    },
  ]

  return (
    <section className='chefs__section section-space'>
      <div className="container">
        <div className="chefs_container">
          {chefs.map(c => (
            <div className='single_chef' key={c.id}>
              <div className="chef_img">
                <img src={c.img} alt="" />
                <div className="chef_links flex">
                  <RiFacebookFill />                  
                  <FiTwitter />                  
                  <BsInstagram />                  
                </div>
              </div>
              <h3 className="text-gold">{c.name}</h3>
              <p>{c.job}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Chefs