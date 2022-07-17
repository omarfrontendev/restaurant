import React, { useState } from 'react'
import './imges.css'

const Images = () => {

  const [img, setImg] = useState(0);

  const imgs = [
    'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/09/01-1.jpg',
    'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/food.png',
    'https://wordpress.iqonic.design/product/wp-free/geritcht/wp-content/uploads/2021/08/Dessert.png'
  ]

  return (
    <section className='images-section section-space flex start' style={{
      backgroundImage: `url(${imgs[img]})`
    }}>
      <div className="flex column-start container">
        <button
          className={`${img === 0 ? 'active' : ''}`}
          onMouseEnter={() => setImg(0)}
          onClick={() => setImg(0)}
        >Bar Menu</button>
        <button 
          className={`${img === 1 ? 'active' : ''}`}
          onMouseEnter={() => setImg(1)}
          onClick={() => setImg(1)}
        >Food Menu</button>
        <button  
          className={`${img === 2 ? 'active' : ''}`}
          onMouseEnter={() => setImg(2)}
          onClick={() => setImg(2)}
        >Desserts Menu</button>
      </div>
    </section>
  )
}

export default Images