import React from "react";
import "@justinribeiro/lite-youtube";

const SectionVideo = () => {
  return (
    <section className="multimedia">
      <h3 className="titulo-principal">Multimedia</h3>
      <p className="texto-video">
        Video que destaca la habilidad y dedicación de nuestros barberos,
        reflejando la calidad y el estilo único de nuestros servicios.
      </p>
      <div className="video-container">
        <lite-youtube
          videoid="wcVVXUV0YUY"
          title="Video de YouTube"
          className="video"
        ></lite-youtube>
      </div>
    </section>
  );
};

export default SectionVideo;
