import React from "react";

const ContactForm = () => {
  return (
    <section className="formulario">
      <h2 className="titulo-contacto">Contáctenos</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombreapellido">Nombre y Apellido:</label>
          <input
            type="text"
            id="nombreapellido"
            className="input-padron"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correoelectronico">Correo electrónico:</label>
          <input
            type="email"
            id="correoelectronico"
            className="input-padron"
            required
            placeholder="email@dominio.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            className="input-padron"
            required
            placeholder="(XX) XXXX XXXX"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            className="input-padron"
            rows="5"
            required
          ></textarea>
        </div>
        <fieldset className="contacto-preferencia">
          <legend>¿Cómo le gustaría que lo contactemos?</legend>
          <div className="radio-group">
            <label htmlFor="radio-email">
              <input
                type="radio"
                value="email"
                id="radio-email"
                name="contacto"
              />
              Email
            </label>
            <label htmlFor="radio-telefono">
              <input
                type="radio"
                value="teléfono"
                id="radio-telefono"
                name="contacto"
              />
              Teléfono
            </label>
            <label htmlFor="radio-whatsapp">
              <input
                type="radio"
                value="WhatsApp"
                id="radio-whatsapp"
                name="contacto"
                checked
              />
              WhatsApp
            </label>
          </div>
        </fieldset>
        <fieldset className="horario-preferencia">
          <legend>¿En cuál horario prefiere ser atendido?</legend>
          <select>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
          </select>
        </fieldset>
        <label className="checkbox">
          <input type="checkbox" checked />
          ¿Le gustaría recibir novedades de la Barbería Alura?
        </label>
        <input type="submit" className="enviar" value="Enviar" />
      </form>
    </section>
  );
};

export default ContactForm;
