import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems, token, setToken } = useContext(StoreContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-md bg-white-sm px-3 ">
      <Link to="/" className="navbar-brand" onClick={() => setMenu("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Toggle button for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${menu === "home" ? "active" : ""}`}
              onClick={() => setMenu("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="#explore-menu-list"
              className={`nav-link ${menu === "menu" ? "active" : ""}`}
              onClick={() => setMenu("menu")}
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/delivery"
              className={`nav-link ${menu === "delivery" ? "active" : ""}`}
              onClick={() => setMenu("delivery")}
            >
              Delivery space
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="#footer"
              className={`nav-link ${menu === "about" ? "active" : ""}`}
              onClick={() => setMenu("about")}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#footer"
              className={`nav-link ${menu === "contact" ? "active" : ""}`}
              onClick={() => setMenu("contact")}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-3 navbar-right">
          <div className="icons d-flex gap-3">
            <img src={assets.search_icon} alt="Search" />
            <Link to="/cart">
              <div className="navbar-search-icon position-relative">
                <img src={assets.basket_icon} alt="Cart" />
                <div className="dot">{getTotalCartItems()}</div>
              </div>
            </Link>
          </div>

          {!token ? (
            <button className="btn-sign-up" onClick={() => setShowLogin(true)}>
              Sign in
            </button>
          ) : (
            <div
              className="navbar-profile position-relative"
              onClick={() => setDropdownOpen((prev) => !prev)}
              ref={dropdownRef}
            >
              <img src={assets.profile_icon} className="profil-icon" alt="Profile" />
              {isDropdownOpen && (
                <ul className="nav-profile-dropdown">
                  <li onClick={() => navigate("/myorders")}>
                    <img src={assets.bag_icon} alt="" />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
