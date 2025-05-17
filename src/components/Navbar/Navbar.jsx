import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setMenu("home");
        }}
      >
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu == "menu" ? "active" : ""}
        >
          Menu
        </a>
        <Link
          to="/delivery"
          onClick={() => {
            setMenu("delivery");
          }}
          className={menu === "delivery" ? "active" : ""}
        >
          Delivery space
        </Link>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("about");
          }}
          className={menu == "about" ? "active" : ""}
        >
          About Us
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu == "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="icons">
          <img src={assets.search_icon} alt="" />
          <Link to="/cart">
            <div className="navbar-search-icon">
              <img src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
          </Link>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
