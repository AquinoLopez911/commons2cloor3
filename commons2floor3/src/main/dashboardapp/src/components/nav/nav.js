import React from 'react';
import "./nav.css";



function Nav() {
    return (
        <header className="container-fluid clearfix" >
        <h1>Commons 2 Floor 3</h1>
        <nav>
            <ul className="m-3">
                  <li className="nav-li"><a href="/">Home</a></li>
                <li className="nav-li"><a href="/team">Meet the Team</a></li>
                <li className="nav-li"><a href="/photo-gallery">Photo Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
                {/* <li><a href="/register-page">Register</a></li> */}
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Nav;