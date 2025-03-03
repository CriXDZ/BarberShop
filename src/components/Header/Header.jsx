import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imagenes/logo.png";
import "../../components/Header/Header.css";

const Header = ({ links, title = "Barbería Alura" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo + Título */}
        <div className="header__brand">
          <img
            src={logo}
            alt="Logo de Barbería Alura"
            className="header__logo"
          />
          <h1 className="header__title">{title}</h1>
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="header__toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Navegación en escritorio y móvil */}
        <nav className="header__nav" aria-label="Menú principal">
          <ul className={`header__links ${menuOpen ? "active" : ""}`}>
            {links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
