import React, {useState} from 'react';
import './Nav.scss';


const Nav = () => {

    const [ navOpen, setNavOpen ] = useState(false);

    return (
        <nav>
            <div className="nav-container">
                <div className='navbar'>
                    <div className="nav-logo">
                        <p>DOCO Locamotoculture</p>
                    </div>
                    <div className="menu-toggle">
                        <div className="hambox">
                            <span className="lineTop"></span>
                            <span className="lineBottom"></span>
                        </div>
                    </div>
                </div>
                <div className="nav-overlay"></div>
            </div>
        </nav>
    );
};

export default Nav;