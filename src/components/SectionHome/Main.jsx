import React from "react";
import SectionPrincipal from "./SectionPrincipal";
import SectionMapa from "./SectionMapa";
import SectionDiferenciales from "./SectionDiferenciales";
import SectionVideo from "./SectionVideo";

const Main = () => {
  return (
    <main>
      <SectionPrincipal />
      <SectionMapa />
      <SectionDiferenciales />
      <SectionVideo />
    </main>
  );
};

export default Main;
