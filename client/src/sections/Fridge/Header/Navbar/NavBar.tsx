import React from 'react';
import "./NavBar.css"
import logo from './images/logo.jpg';
export default function NavBar() {
  return (
      <div className='navbar'>
        <nav className="horizontal-nav">
            <img src={logo}></img>
            <a>Memofy</a>
          <a href="Your Fridge.html">Your Fridge</a>
          <a href="about.html">About</a>
          <a href="home.html">Home</a>
        </nav>
      </div>
  );
}
