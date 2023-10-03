import React, { useState } from "react";
import "./Registro.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Registro = () => {
  const navigate = useNavigate();
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [document_number, setDocument] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/v1/public/client/user/register",
        {
          first_name,
          last_name,
          document_number,
          birth_date,
          phone_number,
          email,
          password,
        }
      );
    
      console.log("Respuesta exitosa:", response.data);
    
      navigate("/Login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (

    
    <div className="Registro-Container">
      <div className="header-Registro"><img className="logo-1" alt="" src="/src/images/Logo.png" /></div>
      <form className="registro-form" onSubmit={handleSubmit}>
      <h2 className="title-Registro">Registrate en</h2>
      <h2 className="title-Registro1">Banco Universitario en Linea</h2>
          <img className="registro-item" alt="" src="/src/icon/vector-252.svg" />
          <h2 className="subtitle-Registro">Introduzca los datos para completar su registro.</h2>
          <div className="first">
            <img className="icon-user " src="/src/images/user.png" />
            <input
              className="first-cuadro"
              type="text"
              id="first"
              value={first_name}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Nombre"
              required
            />
             </div>
            <div className="last">
            <img className="icon-user " src="/src/images/user.png" />
            <input
              className="last-cuadro"
              type="text"
              id="last"
              value={last_name}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Apellido"
              required
            />
          </div>
          <div className="document">
            <img className="icon-user " src="/src/images/id.png" />
            <input
              className="document-cuadro"
              type="text"
              id="last"
              value={document_number}
              onChange={(e) => setDocument(e.target.value)}
              placeholder="Cedula"
              required
            />
          </div>
          <div className="birth_date">
            <img className="icon-user " src="/src/images/date.png" />
            <input
              className="birth-cuadro"
              type="text"
              id="birth"
              value={birth_date}
              onChange={(e) => setBirth_date(e.target.value)}
              placeholder="Fecha de nacimiento"
              disabled={false}
            />
          </div>
          <div className="phone">
            <img className="icon-user " src="/src/images/phone.png" />
            <input
              className="phone-cuadro"
              type="tel"
              id="phone"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telefono"
              required
            />
          </div>
          <div className="email">
            <img
              className="icon-password alt=" src="/src/images/mail.png"/>
            <input
              className="email-cuadro"
              type="email"
              id="email"
              placeholder="Correo"
              disabled={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              multiple
            />
          </div>
          <div className="pass">
            <img
              className="icon-password alt=" src="/src/images/password.png"/>
            <input
              className="pass-cuadro"
              type="password"
              id="password"
              placeholder="Contraseña"
              requiered
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
              <button type="submit">Continuar</button>
            <Link to="/login">Regresar</Link>
      </form>
    </div>
  );
};

export default Registro;
