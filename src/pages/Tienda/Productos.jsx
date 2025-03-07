import React from "react";
import Header from "../../components/Header/Header";
import ItemList from "../../components/SectionProductos/ItemList";
import "./Productos.css";

const ProductsPage = () => {
  const links = [
    { label: "Inicio", to: "/" },
    { label: "Contacto", to: "/contactos" },
  ];

  return (
    <div className="productos-page">
      <Header links={links} />
      <main>
        <section>
          <div className="featured-container">
            <div className="featured-heading">
              <h2 className="featured-title">Nuestros productos destacados</h2>
              <p className="featured-subtitle">
                Descubre los mejores cortes y cuidados para tu estilo. Confía en
                nuestros expertos para lucir siempre impecable.
              </p>
            </div>
            <ItemList />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
