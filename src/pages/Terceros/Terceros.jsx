import React, { useState, useEffect } from "react";
import "./tercero.css";
import Navbar from "../../components/Navbar/Navbar";
import { apiHttp } from "../../api/apiBanco";

const Terceros = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loginAPI, setLoginAPI] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiHttp("GET", `/ping`);
        setLoginAPI(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Actualizar la fecha cada minuto
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-Terceros">
        <div className="wrapper-Terceros">
          <div className="UsuarioT-wrapper">
            <div>
              <div className="usuario-Terceros">
                Bienvenido(a): <span>{loginAPI ? loginAPI.message : "Cargando..."}</span>{" "}
              </div>
              <div className="usuario-Terceros2">
                Ultima Conexión - 17/06/2023 - 12:43:30 p.m.
              </div>
            </div>
            <div className="usuario-Terceros3">
              {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
            </div>
          </div>
          <div className="actualizar-Terceros">
            <div className="title-Terceros">Transferencias a Terceros</div>
            <div className="datos-Transferencias-Terceros">
              <input className="item-Terceros" type="text" placeholder="Cuenta a Debitar" disabled={false} />
              <input className="item-Terceros" type="text" placeholder="Cuenta Destino" />
              <input className="item-Terceros" type="text" placeholder="Monto en Bs." />
              <input className="item-Terceros" type="text" placeholder="Concepto" />
              <div className="item-Terceros cuenta-no-registrada-Terceros">
                <input
                  className="checkbox-terceros"
                  type="checkbox"
                  value="second_checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="cbox2">Cuenta no Registrada</label>
                <div className="elemento-oculto">
                  {isChecked && (
                    <>
                      <input className="item-Terceros item-oculto" type="text" placeholder="Cedula" />
                      <input className="item-Terceros item-oculto" type="text" placeholder="Usuario" />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="button-transferir-Terceros">
              <button className="button-terceros">Transferir</button>
            </div>
          </div>
          <div className="infomacion-Terceros">
            La información mostrada en esta página es confidencial
          </div>
        </div>
      </div>
    </>
  );
};

export default Terceros;
