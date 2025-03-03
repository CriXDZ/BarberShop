import React from "react";
import diferenciales from "../../assets/diferenciales/diferenciales.jpg";

const SectionDiferenciales = () => {
  return (
    <section className="diferenciales">
      <h3 className="titulo-principal">Diferenciales</h3>
      <div className="contenido-diferenciales">
        <ul className="lista-diferenciales">
          <li className="items">Atención personalizada a los clientes</li>
          <li className="items">Espacio diferenciado</li>
          <li className="items">Localización</li>
          <li className="items">Profesionales calificados</li>
          <li className="items">Puntualidad</li>
          <li className="items">Limpieza</li>
        </ul>
        <img
          src={diferenciales}
          alt="Diferenciales de Barbería Alura"
          className="imagen-diferenciales"
        />
      </div>

      <div>
        <h3 className="titulo-principal">multimedia</h3>
        <p className="texto-video">
          Video que destaca la habilidad y dedicación de nuestros barberos,
          reflejando la calidad y el estilo único de nuestros servicios.
        </p>
      </div>

      <div className="video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/wcVVXUV0YUY?si=YxbvpMDE_5GGsWVz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SectionDiferenciales;
