import React from "react";
import "./ExploreMenu.css";
import { menu_list, cards_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <div className="best-section">
        <h1 className="best-title">
          Why <span className="the-best">We Are </span>The Best
        </h1>
        <p className="best-description">
          <b>You will choose us because you get the best quality food from us and we deliver fast.</b>
        </p>
      </div>

      {/* Cartes utilisant cards_list de assets.js */}
      <div className="features-cards">
        {cards_list.map((card, index) => (
          <div key={index} className="feature-card">
            <div className="card-icon">
              <img src={card.icon} alt={card.title} />
            </div>
            <h3><b>{card.title}</b></h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      
      <h1 className="best-title">Explore <span className="the-best">Seven World</span> Cuisines</h1>
      <p className="explore-menu-text">
        From <b>Moroccan</b> tagines to <b>Italian</b> pastas, <b>Mexican</b> tacos to <b>Syrian</b> delights—all made fresh and delivered fast. Taste the <b>world</b>, one dish at a time.
      </p>

      <div className="explore-menu-scroller" id="explore-menu-scroller">
        <div className="explore-menu-list" id="explore-menu-list">
          {/* Première série d'éléments */}
          {menu_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
              key={`original-${index}`}
              className="explore-menu-list-item" id="explore-menu-list"
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
              <p><b>{item.menu_name}</b></p>
            </div>
          ))}
          
          {/* Deuxième série d'éléments (dupliqués pour l'effet de boucle) */}
          {menu_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
              key={`clone-${index}`}
              className="explore-menu-list-item" id="explore-menu-list"
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
              <p><b>{item.menu_name}</b></p>
            </div>
          ))}
        </div>
      </div>
      
      <hr className="hr" />
    </div>
  );
}

export default ExploreMenu;