import React from "react";
import Header from "../../components/Header/Header";
import BookingForm from "../../components/SectionBooking/BookingForm";
import "../Booking/Reservas.css";

const Reservation = () => {
  const reservationLinks = [
    { label: "Home", to: "/" },
    { label: "Productos", to: "/productos" },
  ];

  return (
    <div className="reservacion-page">
      <Header links={reservationLinks} title="Barbería Alura" />
      <main>
        <BookingForm />
      </main>
    </div>
  );
};

export default Reservation;
