
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../img/logo-removebg-preview.png';

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={navOpen ? 'nav-open' : ''}>
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav-links-desktop">
            <li className="nav-item-desktop">
              <Link to="/">Acceuil</Link>
            </li>
            <li className="nav-item-desktop">
              <Link to="/products">Nos produits</Link>
            </li>
            <li className="nav-item-desktop">
              <Link to="/about">A propos</Link>
            </li>
            <li className="nav-item-desktop">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="menu-toggle" onClick={toggleNav}>
            <div
              className="hambox">
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
              <Link to="/">Acceuil</Link>
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