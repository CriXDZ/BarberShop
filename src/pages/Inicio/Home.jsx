import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/SectionHome/Banner";
import Main from "../../components/SectionHome/Main";
import "./General.css";
import "./Principal.css";
import "./Mapa.css";
import "./Diferenciales.css";
import "./Video.css";
import "./Responsive.css";

function Home() {
  const homeLinks = [
    { label: "Productos", to: "/productos" },
    { label: "Contacto", to: "/contactos" },
  ];

  return (
    <div className="home-page">
      <Header links={homeLinks} title="Barbería Alura" />
      <Banner />
      <Main />
    </div>
  );
}

export default Home;
