import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="container">
        <h1 className="navbar-brand">Jade Hamed - Professora de Inglês</h1>
        <ul className="nav-list">
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
