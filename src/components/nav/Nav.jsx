import React from 'react';
import './Nav.scss';


const Nav = () => {

    return (
        <nav className='nav'>
            <div className="nav-logo">
                <img src="#" alt="Logo du magasin" />
            </div>
            <ul className='nav-group-link'>
                <li>
                    <a href="/NosProduits" className="nav-link">Nos produits</a>
                </li>
                <li>
                    <a href="/Apropos" className="nav-link">A propos</a>
                </li>
                <li>
                    <a href="/Contacts" className="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;