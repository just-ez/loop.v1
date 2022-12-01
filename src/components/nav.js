import React from 'react';
import '../assets/css/nav.css'
import logo from '../assets/img/logo.svg'
import north from '../assets/img/north.svg'
import menu from '../assets/img/menu.svg'
import { Link } from 'react-router-dom';
const Nav = ()=> {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="hero-menu">
                    <div className="lang">
                        <p>EN</p>
                    </div>
                    <button className='cool-link'>
                       <Link to='/contact' >
                       CONTACT US
                        <img src={north} alt="" />
                       </Link>
                    </button>
                    <div className="menu-btn">
                        <img src={menu} alt="" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default  Nav