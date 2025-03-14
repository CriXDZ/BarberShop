import React from "react";

const SectionMapa = () => {
  return (
    <section className="mapa">
      <h3 className="titulo-principal">Nuestra Ubicación</h3>
      <div className="mapa-contenedor">
        <iframe
          title="Mapa de ubicación de la barbería"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34784.869470159!2d-46.65499870427411!3d-23.593248407555798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Education%20and%20Innovation!5e0!3m2!1ses-419!2sbr!4v1602972945026!5m2!1ses-419!2sbr"
          className="mapa-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default SectionMapa;
