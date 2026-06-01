import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar(){
    return(
        <>
    <nav className="navbar navbar-expand-lg luxury-navbar">
      <div className="container">

        {/* Brand */}
        <Link className="luxury-brand me-auto" to="/">
          CHANEL
        </Link>

        {/* Left Links */}
        <ul className="navbar-nav align-items-center">

          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li className="nav-item dropdown">
           <button
            className="nav-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            >
              PRODUCTS
            </button>

            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/fashion">Fashion</Link></li>
              <li><Link className="dropdown-item" to="/high-jew">High Jewellery</Link></li>
              <li><Link className="dropdown-item" to="/fine-jew">Fine Jewellery</Link></li>
              <li><Link className="dropdown-item" to="/watches">Watches</Link></li>
              <li><Link className="dropdown-item" to="/eyewear">Eyewear</Link></li>
              <li><Link className="dropdown-item" to="/fragrance">Fragrance</Link></li>
              <li><Link className="dropdown-item" to="/makeup">Makeup</Link></li>
              <li><Link className="dropdown-item" to="/skincare">Skincare</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </li>

          <li className="nav-item">
            <Link to="/help" className="nav-link">HELP</Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav d-flex align-items-center gap-4">

            {/* USER DROPDOWN */}
            <li className="nav-item dropdown">
              <button
              className="nav-link dropdown-toggle luxury-icon"
              type="button"
              data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-user fa-lg"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
              </ul>
            </li>

            {/* CART */}
            <li className="nav-item">
              <Link to="/view-products" className="nav-link luxury-icon">
                <i className="fa-solid fa-cart-arrow-down fa-lg"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
        </>
    )
}
export default Navbar;