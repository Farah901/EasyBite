import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        <button>View menu</button>
      </div>
    </div>
  )
}

export default Header