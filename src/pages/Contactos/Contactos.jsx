import React from "react";
import Header from "../../components/Header/Header";
import MsgForm from "../../components/SectionContactos/MsgForm";
import Horario from "../../components/SectionContactos/Horario";
import "./Contactos.css";

const Contact = () => {
  const contactLinks = [
    { label: "Home", to: "/" },
    { label: "Productos", to: "/productos" },
  ];

  return (
    <div className="contacto-page">
      <Header links={contactLinks} title="Barbería Alura" />
      <main>
        <MsgForm />
        <Horario />
      </main>
    </div>
  );
};

export default Contact;
