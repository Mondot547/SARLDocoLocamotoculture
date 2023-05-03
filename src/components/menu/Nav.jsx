import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.js';
import './Nav.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';




const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={navOpen ? 'nav-open' : ''}>
      <div className="nav-container">
        <div className="navbar">
          {!navOpen && (
            <div className="nav-logo">
              <p>DOCO Locamotoculture</p>
            </div>
          )}
          
          <div className="menu-toggle" onClick={toggleNav}>
            <div
              className={navOpen ? 'hambox open' : 'hambox'}
              aria-hidden="true"
            >
              <span className={navOpen ? 'lineTop spin' : 'lineTop'}></span>
              <span
                className={navOpen ? 'lineMiddle spin' : 'lineMiddle'}
              ></span>
              <span
                className={navOpen ? 'lineBottom spin' : 'lineBottom'}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          onClick={toggleNav}
          style={{
            top: navOpen ? '0' : '-100%',
            height: navOpen ? '50vh' : '0',
          }}
        >
          <ul className="nav-links-mobile">
            <li className="nav-item">
              <Link to="/home">Acceuil</Link>
            </li>
            <li className="nav-item">
              <Link to="/products">Nos produits</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">A propos</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;