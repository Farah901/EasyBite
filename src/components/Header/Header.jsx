import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="carousel-track">
        <img src="/src/assets/header_img.jpg" alt="Header 1" />
        <img src="/src/assets/header_img2.jpg" alt="Header 2" />
        <img src="/src/assets/header_img3.jpg" alt="Header 3" />
        <img src="/src/assets/header_img4.jpg" alt="Header 4" />
        <img src="/src/assets/header_img5.jpg" alt="Header 5" />
        <img src="/src/assets/header_img6.jpg" alt="Header 6" />
        {/* duplicate images for infinite loop effect */}
        <img src="/src/assets/header_img.jpg" alt="Header 1" />
        <img src="/src/assets/header_img2.jpg" alt="Header 2" />
        <img src="/src/assets/header_img3.jpg" alt="Header 3" />
        <img src="/src/assets/header_img4.jpg" alt="Header 4" />
        <img src="/src/assets/header_img5.jpg" alt="Header 5" />
        <img src="/src/assets/header_img6.jpg" alt="Header 6" />
      </div>

      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
