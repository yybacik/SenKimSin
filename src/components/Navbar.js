import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Kişilik Testi</h1>
      <ul className="nav-links">
        <li><Link to="/">Anasayfa</Link></li>
        <li><Link to="/tests">Testler</Link></li>
        <li><Link to="/about">Hakkında</Link></li>
        <li><Link to="/contact">İletişim</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
