import "./Servicios.css";

const Servicios = () => {
  return (
    <div className="servicio" data-scroll-to="servicioContainer">
      <div className="texto-servicio">
        <div className="frame-group">
          <div className="rectangle-parent6">
            <div className="frame-child" />
            <div className="frame-item" />
          </div>
          <div className="rectangle-parent7">
            <div className="frame-child" />
            <div className="frame-item" />
          </div>
          <div className="servicios7"> Servicios</div>
        </div>
      </div>
      <div className="lista">
        <div className="transacciones">
          <img
            className="transaccion-icon"
            alt=""
            src="/src/images/transaccion@2x.png"
          />
          <div className="texto">
            <div className="transacciones-en-linea">Transacciones en Linea</div>
          </div>
        </div>
        <div className="conversion">
          <img
            className="transaccion-icon"
            alt=""
            src="/src/images/beca@2x.png"
          />
          <div className="texto">
            <div className="transacciones-en-linea">Conversión de Monedas</div>
          </div>
        </div>
        <div className="conversion">
          <img
            className="transaccion-icon"
            alt=""
            src="/src/images/retiro@2x.png"
          />
          <div className="texto">
            <div className="almacenar-monedas-internaciona">
              Almacenar Monedas Internacionales
            </div>
          </div>
        </div>
        <div className="seguridad">
          <img
            className="transaccion-icon"
            alt=""
            src="/src/images/matricula@2x.png"
          />
          <div className="texto">
            <div className="transacciones-en-linea">Máxima seguridad</div>
          </div>
        </div>
        <div className="seguridad">
          <img
            className="transaccion-icon"
            alt=""
            src="/src/images/deposito@2x.png"
          />
          <div className="texto">
            <div className="transferencias-de-saldo">
              Transferencias de Saldo a Terceros
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
