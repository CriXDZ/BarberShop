import React from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/SectionProductos/ItemList";
import "./Productos.css";

const ProductsPage = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "Contacto", to: "/contactos" },
  ];

  return (
    <div className="productos-page">
      <Header links={links} />
      <main>
        <h1 className="titulo-productos">Nuestros Productos</h1>
        <ItemList />
      </main>
    </div>
  );
};

export default ProductsPage;
