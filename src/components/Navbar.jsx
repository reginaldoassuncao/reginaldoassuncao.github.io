// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#header">Início</a></li>
        <li className="navbar-item"><a href="#projects">Projetos</a></li>
        <li className="navbar-item"><a href="#about">Sobre Mim</a></li>
        <li className="navbar-item"><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
