// Header.js
import './App.css';
import Contact from './Contact';

const Header = ({ contactLink }) => {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href={contactLink}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;




