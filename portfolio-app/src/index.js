// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

const contactLink = '#contact';

ReactDOM.render(
  <React.StrictMode>
    <Header contactLink={contactLink} />
    <App />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


