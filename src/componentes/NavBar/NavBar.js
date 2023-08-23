import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidgets/CartWidget';
import './NavBar.css';

const NavBar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="logo.png" alt="Cloud Store Logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">
                Prendas
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget cartItems={cartItems} />
      </div>
    </nav>
  );
};

export default NavBar;