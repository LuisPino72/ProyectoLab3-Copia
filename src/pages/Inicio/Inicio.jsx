import React, { useState, useEffect } from "react";
import "./Inicio.css";
import Navbar from "../../components/Navbar/Navbar";

const Inicio = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la fecha actual cada segundo
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-Inicio">
        <div className="wrapper-Inicio">
          <div className="Usuario-wrapper">
            <div>
              <div className="usuario-Inicio">
                Bienvenido(a): <span>José Jiménez</span>
              </div>
              <div className="usuario-Inicio">
                Última Conexión - 17/06/2023 - 12:43:30 p.m.
              </div>
            </div>
            <div className="usuario-Inicio2">
              {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
            </div>
          </div>

          <div className="actualizar-Inicio">
            <div className="title-Inicio">Posición Consolidada</div>
            <div className="edna">
              <div className="item-Inicio">Activos</div>
              <div className="item-Inicio">Beca</div>
            </div>
          </div>
          <div className="informacion-Inicio">
            La información mostrada en esta página es confidencial
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
