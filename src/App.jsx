// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header id="header" />
      <div id="projects">
        <ProjectList />
      </div>
      <div id="about">
        <section>
          <h2>Sobre Mim</h2>
          <p>Descrição sobre você...</p>
        </section>
      </div>
      <div id="contact">
        <section>
          <h2>Contato</h2>
          <p>Informações de contato...</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
