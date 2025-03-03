import React from "react";
import utensilios from "../../assets/imagenes/utensilios.jpg";

const SectionPrincipal = () => {
  return (
    <section className="principal">
      <h2 className="titulo-principal">Sobre la Barbería Alura</h2>
      <img
        className="utensilios"
        src={utensilios}
        alt="utensilios de un barbero"
      />
      <p>
        Ubicada en el corazón de la ciudad, la Barbería Alura trae para el
        mercado lo que hay de mejor para su cabello y barba. Fundada en 2020, la
        Barbería Alura ya es destaque en la ciudad y conquista nuevos clientes
        diariamente.
      </p>
      <p>
        Nuestra misión es:
        <em>
          <strong className="misión">
            "Proporcionar autoestima y calidad de vida a nuestros clientes".
          </strong>
        </em>
      </p>
      <p>
        Profesionales experimentados que están constantemente observando los
        cambios y movimiento en el mundo de la moda, para así ofrecer a nuestros
        clientes las últimas tendencias. El atendimiento posee un padrón de
        excelencia y agilidad, garantizando calidad y satisfacción de nuestros
        clientes.
      </p>
    </section>
  );
};

export default SectionPrincipal;
