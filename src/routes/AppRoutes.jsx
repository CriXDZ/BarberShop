import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Inicio/Home";
import Nosotros from "../pages/Footer/Nosotros";
import Servicios from "../pages/Footer/Servicios";
import Productos from "../pages/Tienda/Productos";
import Contactos from "../pages/Contactos/Contactos";
import Reservas from "../pages/Booking/Reservas";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/productos" element={<Productos />} />
    <Route path="/contactos" element={<Contactos />} />
    <Route path="/servicios" element={<Servicios />} />
    <Route path="/nosotros" element={<Nosotros />} />
    <Route path="/reservas" element={<Reservas />} />
  </Routes>
);

export default AppRoutes;
