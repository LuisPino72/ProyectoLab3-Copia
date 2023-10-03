import { useState, useCallback } from "react";
import "./Barra.css";

const Barra = () => {

  return (
    <>
      <div className="barra-superior">
      <img className="logo-1" alt="" src="/src/images/Logo.png" />
        <div className="opciones">
          <div className="nosotros">
            Nosotros
          </div>
          <div className="servicios">
            Servicios
          </div>
          <div className="contacto">
            Contacto
          </div>
        </div>
      </div>
    </>
  );
};

export default Barra;