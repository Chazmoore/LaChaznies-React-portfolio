// Header.js
import React from 'react';
import './App.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About Me</a>
          </li>
          <li>
            <a href="/Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/Resume">Resume</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

