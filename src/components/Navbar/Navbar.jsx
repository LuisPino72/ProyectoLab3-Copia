import React, { useState, useCallback, useEffect } from "react";
import logo from "../../assets/Logo.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

import MaterialIcon, { colorPalette } from "material-icons-react";
const Navbar = () => {
  const navigate = useNavigate();

  const onAquiClick = useCallback(() => {
    navigate("/Login");
  }, [navigate]);
  return (
    <div className="container-Navbar">
      <div className="wrapper-Navabar">
        <div className="barra-logo-Navbar">
          <img src={logo} alt="Logo" />
        </div>

        <section class="navigation">
          <div class="nav-container">
            <nav class="navbar js-navbar">
              <ul class="menu">
                <li>
                  <a class="hasDropdown" href="#">
                    Consultas <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="container">
                    <div class="container__list">
                      <div class="container__listItem">
                        <a href="Inicio">Posición Consolidada</a>
                      </div>
                      <div class="container__listItem">
                        <a href="Consulta">Historial de Transacciones</a>
                      </div>
                    </div>
                  </ul>
                </li>

                <li className="transferencia">
                  <a class="hasDropdown" href="#">
                    Transferencias <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="container">
                    <div class="container__list3">
                      <div class="container__listItem">
                        <a href="Terceros">Transferecias a Terceros</a>
                      </div>
                    </div>
                  </ul>
                </li>
                <li>
                  <a class="hasDropdown" href="#">
                    Servicios <i class="fa fa-angle-down"></i>
                  </a>
                  <ul class="container">
                    <div class="container__list2">
                      <div class="container__listItem">
                        <a href = "Contactos">Gestionar Contactos</a>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="salir" onClick={onAquiClick}>
                  <a href="#">Salir</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
