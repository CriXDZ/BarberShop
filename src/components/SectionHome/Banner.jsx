import React from "react";
import banner from "../../assets/banner/banner-desktop.webp";

const Banner = () => {
  return (
    <picture>
      <source srcSet={banner} type="image/jpeg" />
      <img
        className="banner"
        src={banner}
        alt="Banner de la barbería con un diseño elegante"
        loading="lazy"
      />
    </picture>
  );
};

export default Banner;
