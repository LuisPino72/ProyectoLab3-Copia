import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import SobreNosotros from "./pages/Nosotros/SobreNosotros"
import Terceros from "./pages/Terceros/Terceros";
import Inicio from "./pages/Inicio/Inicio";
import Consulta from "./pages/Consulta/Consulta";
import Login from "./pages/Login/Login";
import Registro from "./pages/Login/Registro";
import Institucional from "./pages/Institucional/Institucional";
import Contactos from "./pages/Contactos/Contactos";

function Ruta() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/terceros" element={<Terceros />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Contactos" element={<Contactos />} />
        <Route path="/" element={<Institucional />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Ruta;
