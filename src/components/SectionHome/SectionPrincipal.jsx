import React from "react";
import utensilios from "../../assets/imagenes/utensilios.jpg";

const SectionPrincipal = () => {
  return (
    <section className="principal">
      <h2 className="titulo-principal">Sobre la Barbería Alura</h2>
      <img
        className="utensilios"
        src={utensilios}
        alt="Utensilios de un barbero"
      />
      <p>
        Ubicada en el corazón de la ciudad, la Barbería Alura trae al mercado lo
        mejor para el cuidado de su cabello y barba. Fundada en 2020, se ha
        convertido en un referente local y conquista nuevos clientes cada día.
      </p>
      <p>
        Nuestra misión es:{" "}
        <em>
          <strong className="mision">
            "Proporcionar autoestima y calidad de vida a nuestros clientes".
          </strong>
        </em>
      </p>
      <p>
        Contamos con profesionales experimentados que observan constantemente
        los cambios y movimientos en el mundo de la moda para ofrecer las
        últimas tendencias. Nuestro servicio se basa en un alto estándar de
        excelencia y agilidad, garantizando la calidad y satisfacción de todos
        nuestros clientes.
      </p>
    </section>
  );
};

export default SectionPrincipal;
