import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, image, title, description, price, link }) => {
  return (
    <Link to={link} className="producto-card" id={id}>
      <img src={image} alt={title} className="producto-imagen" />
      <h2 className="producto-titulo">{title}</h2>
      <p className="producto-descripción">{description}</p>
      <p className="producto-precio">{price}</p>
    </Link>
  );
};

export default Product;
