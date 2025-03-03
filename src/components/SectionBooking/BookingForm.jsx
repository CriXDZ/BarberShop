import React from "react";

const ReservationForm = () => {
  return (
    <section className="reservacion">
      <h2 className="titulo-reservacion">Reserva tu Cita</h2>
      <form id="form-reservacion">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" required />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input type="time" id="hora" name="hora" required />
        </div>
        <button type="submit" className="enviar">
          Reservar Cita
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
