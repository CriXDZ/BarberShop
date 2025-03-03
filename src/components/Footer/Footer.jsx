import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import logoBlanco from "../../assets/imagenes/logo-blanco.png";
import bgImage from "../../assets/imagenes/bg.jpg";
import "../../components/Footer/Footer.css";

const Footer = () => {
  const overlayColor = "rgba(15, 23, 42, 0.5)";
  const footerStyle = {
    background: `linear-gradient(${overlayColor}, ${overlayColor}),
                 url(${bgImage}) repeat center center`,
  };

  return (
    <footer className="footer" style={footerStyle}>
      {/* Bloque Superior */}
      <div className="footer__top">
        {/* Logo + Marca */}
        <div className="footer__brand">
          <img
            src={logoBlanco}
            alt="Logo de Barbería Alura"
            className="footer__logo"
          />
          <span className="footer__brandName">Barbería Alura</span>
        </div>

        {/* Enlaces principales */}
        <ul className="footer__links">
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contactos">Contacto</Link>
          </li>
        </ul>

        {/* Redes Sociales */}
        <div className="footer__social">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/CriXDZ/BarberShop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Línea divisoria */}
      <hr className="footer__divider" />
      {/* Bloque Inferior */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Barbería Alura | Estilo y tradición para
          caballeros. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
