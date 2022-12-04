import React from 'react';
import '../assets/css/nav.css'
import logo from '../assets/img/logo.svg'
import north from '../assets/img/north.svg'
import menu from '../assets/img/menu.svg'
import { Link } from 'react-router-dom';
const Nav = ()=> {

   function openNav() {
    // document.querySelector('.menu-bar').style.height = '100vh'
    console.log('hi');
    }

    return (
        <header>
            <nav>
                <div className="logo">
                    L.Studio.
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
                    <div className="menu-btn" onClick={openNav}>
                        <img src={menu} alt=""  />
                    </div>
                </div>
            </nav>
            <div className="menu-bar">
            <div class="background-one">
  <div class="link-container">
    <a class="link-one" href="https://jhancock532.github.io/link-hover-effects/">WORK</a>
  </div>
</div>
<div class="background-two link-container">
  <a class="link-two" href="https://jhancock532.github.io/link-hover-effects/">ABOUT</a>
</div>
<div class="background-three link-container">
  <a class="link-three" href="https://jhancock532.github.io/link-hover-effects/">CONTACT</a>
</div>
            </div>
        </header>
    )
}

export default  Nav