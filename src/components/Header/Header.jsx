import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Satisfy your appetite with just one order</h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        <button><a href="#explore-menu-list"> View menu</a></button>
      </div>
    </div>
  )
}

export default Header