import React from "react";
import Product from "./ItemPage";

import cabelloImage from "../../assets/imagenes/cabello.jpg";
import barbaImage from "../../assets/imagenes/barba.jpg";
import cabelloBarbaImage from "../../assets/imagenes/cabello+barba.jpg";

const ProductList = () => {
  const products = [
    {
      id: "producto-cabello",
      image: cabelloImage,
      title: "Cabello",
      description: "Corte a tu medida: tijera o máquina",
      price: 10.0,
      rating: 4,
      isNew: true,
      discount: null,
      link: "/reservas",
    },
    {
      id: "producto-barba",
      image: barbaImage,
      title: "Barba",
      description: "Corte y diseño profesional de barba",
      price: 8.0,
      rating: 5,
      isNew: false,
      discount: null,
      link: "/reservas",
    },
    {
      id: "producto-cabello-barba",
      image: cabelloBarbaImage,
      title: "Cabello + Barba",
      description: "Paquete completo de cabello y barba",
      price: 15.0,
      rating: 3,
      isNew: false,
      discount: 20.0,
      link: "/reservas",
    },
  ];

  return (
    <div className="featured-grid">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
