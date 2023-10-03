import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../../components/Info/Info";
import Servicios from "../../components/Servicios/Servicios";
import Contacto from "../../components/Contacto/Contacto";
import Desarrolladores from "../../components/Desarrolladores/Desarrolladores";
import "./Institucional.css"

const Institucional = () => {
  const navigate = useNavigate();

  const onB1Click = useCallback(() => {
    window.open("/Login",'_blank', 'width=1920,height=41080');
  }, [navigate]);

  return (
    <div className="sitio-web-institucional">
      <div className="header-insti">
        <div className="cont-logo">
        <img className="logo-1" alt="" src="/src/images/Logo.png" /></div>
        <div className="cont-op">
          <h2>Conócenos</h2>
          <h2>Servicios</h2>
          <h2>Contacto</h2></div>
        </div>
      <div className="frame">
        <div className="scroll">
          <img className="s1-icon" alt="" src="/src/images/s1@2x.jpg" />
          <button className="b1" onClick={onB1Click}>Banco en Linea</button>
        </div>
        <Info/>
        <Servicios/>
       <Contacto/>
       <Desarrolladores/>
      </div>
    </div>
  );
};

export default Institucional;
