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
      description: "Con tijera o máquina, a gusto del cliente",
      price: "$10.00",
      link: "/reservas",
    },
    {
      id: "producto-barba",
      image: barbaImage,
      title: "Barba",
      description: "Corte y diseño profesional de barba",
      price: "$8.00",
      link: "/reservas",
    },
    {
      id: "producto-cabello-barba",
      image: cabelloBarbaImage,
      title: "Cabello + Barba",
      description: "Paquete completo de cabello y barba",
      price: "$15.00",
      link: "/reservas",
    },
  ];

  return (
    <div className="producto-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          link={product.link}
        />
      ))}
    </div>
  );
};

export default ProductList;
