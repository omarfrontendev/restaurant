import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BiMenu } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {

  const [showPagesMenu, setShowPagesMenu] = useState(false);
  const [showBlosgMenu, setShowBlogsMenu] = useState(false);
  const [openMainMenu, setOpenMainMen] = useState(false);


  const closePagesMenu = e => {
    if(e.target.id !== 'pages-menu' && showPagesMenu) {
      setShowPagesMenu(false)
    }
  };

  const closeManiMenu = e => {
    if(openMainMenu && e.target.id !== 'menu' && e.target.id !== 'pages-menu') {
      setOpenMainMen(false)
      console.log(e.target.id)
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', closePagesMenu);
    document.body.addEventListener('click', closeManiMenu);
    return () => {
      document.body.removeEventListener('click', closePagesMenu);
      document.body.removeEventListener('click', closeManiMenu);
    }
  }, [showPagesMenu, openMainMenu]);

  return (
    <nav className='navbar container relative flex space-between'>
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="./assets/logo.svg" alt="LOGO" />
        </NavLink>
      </div>
      <ul 
        className={`navbar-links flex ${openMainMenu ? 'open-menu' : 'close-menu'}`}
      >
        <button
          className='close-menu flex center md-screen'
        >
          <GrClose className='close-icon' />
        </button>
        <li>
          <NavLink className='main-link' to='/'>Home</NavLink>
        </li>
        <li>
          <button 
            id='pages-menu'
            onClick={() => setShowPagesMenu(prev => !prev)}
            className='main-link'
          >
            Pages
            <RiArrowDropDownLine className={`dropdown-icon ${showPagesMenu ? 'open' : ''}`} />
          </button>
          {showPagesMenu && <ul className="flex column">
            <li id='skadk'>
              <NavLink onClick={() => setOpenMainMen(false)} to='/about-us'>About Us</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpenMainMen(false)} to='/services'>Services</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpenMainMen(false)} to='/blogs'>Blogs</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpenMainMen(false)} to='/team'>Team</NavLink>
            </li>
          </ul>}
        </li>
        <li>
          <NavLink className='main-link' to='/contact-us'>Contact Us</NavLink>
        </li>
      </ul>
      <div className='flex end'>
        <button className='book-btn'>Book Tabels</button>
        <button 
          className='menu-btn md-screen flex' 
          id='menu'
          onClick={() => setOpenMainMen(true)}
        >
          <BiMenu className='menu-icon'/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar