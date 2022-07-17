import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../UI/button/Button'
import AboutHero from '../about/aboutSections/AboutHero'
import AOS from 'aos'

import './blogs.css'
import '../../components/blogs-s/blogs-s.css'

const Blogs = ({ blogs, setCategory, category }) => {

  useEffect(() => {
    AOS.init()
  }, []);

  const navigate = useNavigate()
  const [blogsShown, setBlogsShown] = useState([]);
  
  useEffect(() => {
    if(category === 'all') {
      setBlogsShown(blogs)
    }else {
      setBlogsShown(blogs.filter(b => b.category === category))
    }
  }, [category]);

  console.log(category)


  return (
    <>
      <AboutHero title='Blogs' pages={[{id: 1, text: 'Home', path: '/'}]} />
      <section className='blogs__page__sectoin section-space'>
        <div className="container">
          <div className="blogs_filter">
            <div className="blogs_filter_btns flex">
              <button 
              onClick={() => setCategory('all')} 
              className={`${category === 'all' ? 'active' : ''}`}
              >
                All
              </button>
              <button 
              onClick={() => setCategory('food')} 
              className={`${category === 'food' ? 'active' : ''}`}
              >
                Food
              </button>
              <button 
              onClick={() => setCategory('chef')} 
              className={`${category === 'chef' ? 'active' : ''}`}
              >
                Chef
              </button>
              <button 
              onClick={() => setCategory('restaurant')} 
              className={`${category === 'restaurant' ? 'active' : ''}`}
              >
                Restaurant
              </button>
              <button 
              onClick={() => setCategory('trending')} 
              className={`${category === 'trending' ? 'active' : ''}`}
              >
                Trending
              </button>
              <button 
              onClick={() => setCategory('politician')} 
              className={`${category === 'politician' ? 'active' : ''}`}
              >
                Politician
              </button>
              <button 
              onClick={() => setCategory('world')} 
              className={`${category === 'world' ? 'active' : ''}`}
              >
                World</button>
            </div>
          </div>
          <div className="blogs__container">
            {blogsShown.map(blog => (
              <div 
                data-aos='fade-up'
                className="single__blog relative flex column"
                key={blog.id}>
                <div className="single__blog-date absolute">{blog.date}</div>
                <div onClick={() => navigate(`/blogs/${blog.id}`)} className="single__blog-img">
                  <img src={blog.img} alt="" />
                </div>
                <div className="single__blog-data">
                  <span className='single__blog-subtitle'>{blog.category}</span>
                  <h3 onClick={() => navigate(`/blogs/${blog.id}`)} className='text-gold'>{blog.title}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex eius quaerat molestias delectus cum magni ducimus, voluptatum voluptas rerum, iure nisi.</p>
                  <Button onClic={() => navigate(`/blogs/${blog.id}`)}>Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs