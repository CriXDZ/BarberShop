import React from "react";
import diferenciales from "../../assets/diferenciales/diferenciales.jpg";

const SectionDiferenciales = () => {
  return (
    <section className="diferenciales">
      <h3 className="titulo-principal">Diferenciales</h3>
      <div className="contenido-diferenciales">
        <ul className="lista-diferenciales">
          <li>Atención personalizada a los clientes</li>
          <li>Espacio diferenciado</li>
          <li>Localización</li>
          <li>Profesionales calificados</li>
          <li>Puntualidad</li>
          <li>Limpieza</li>
        </ul>
        <img
          src={diferenciales}
          alt="Diferenciales de Barbería Alura"
          className="imagen-diferenciales"
        />
      </div>
    </section>
  );
};

export default SectionDiferenciales;
