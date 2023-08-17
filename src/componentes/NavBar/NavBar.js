// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidgets/CartWidget';

const NavBar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Cloud Store
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
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
