import React from "react";

const ContactHours = () => {
  return (
    <section className="horarios">
      <h2>Horarios de Atención</h2>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunes</td>
            <td>8h ~ 20h</td>
          </tr>
          <tr>
            <td>Miércoles</td>
            <td>8h ~ 20h</td>
          </tr>
          <tr>
            <td>Viernes</td>
            <td>8h ~ 20h</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ContactHours;
