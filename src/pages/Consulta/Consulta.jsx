import React, { useState, useEffect } from "react";
import "./Consulta.css";
import Navbar from "../../components/Navbar/Navbar";

const Consulta = () => {
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
      <div className="container-Consulta">
        <div className="wrapper-Consultas">
          <div className="UsuarioC-wrapper">
            <div>
              <div className="usuario-Consultas">
                Bienvenido(a): <span>José Jiménez</span>
              </div>
              <div className="usuario-Consultas">
                Última Conexión - 17/06/2023 - 12:43:30 p.m.
              </div>
            </div>
            <div className="usuario-Consultas2">
              {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
            </div>
          </div>

          <div className="actualizar-Consultas">
            <div className="title-Consultas">Historial de Transacciones</div>
            <div className="subtitle-Consultas">Periodo de consulta</div>
            <div className="edna1">
              <input
               type="date" 
               className="item-Consultas" 
               placeholder="atras"
               disabled={false}/>
               </div>
              <div className="atras">Máximo 30 días atrás</div>
              <div className="edna2">
              <input 
              type="date" 
              className="item-Consultas2" 
              placeholder="actual"
              disabled={false}/>
              </div>
              <div className="actual">Máximo fecha actual</div>
              <div className="jejs">
                <div className="button-procesarBusqueda">
                  <button className="button-procesar">Procesar</button>
                </div>
              
            </div>
          </div>
        </div>
        <div className="infomacion-Consultas">
          La información mostrada en esta página es confidencial
        </div>
      </div>
    </>
  );
};

export default Consulta;

