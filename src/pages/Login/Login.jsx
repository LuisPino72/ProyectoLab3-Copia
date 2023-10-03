import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/v1/public/client/user/login",
        {
          email,
          password,
        }
      );

      console.log("Respuesta exitosa:", response.data);

      navigate("/Inicio");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data);
      setErrorMessage("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="header-login">
        <img className="logo-1" alt="" src="/src/images/Logo.png" /></div>
      <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="title-Login">Banco Universitario en Linea</h2>
      <img className="login-item" alt="" src="/src/icon/vector-252.svg" />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <h2 className="subtitle-Login">Introduzca Usuario y Clave de Internet.</h2>
        <div className="barra1">
        <img className="icon-user" src="/src/images/user.png" />
          <input
            className="cuadrito1"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder = "Correo"
            required
          />
        </div>
        <div className="barra2">
        <img className="icon-password" src="/src/images/password.png"/>
          <input
            className="cuadrito2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder = "Contraseña"
            required
          />
        </div>
        <button type="submit">Ingresar</button>
        <h2 className="olvido-Login">¿Olvidaste tu Usuario o Clave?</h2>
        <h2 className="primera-Login">¿Quieres ingresar por primera vez?</h2>
        <div className="link"><Link to="/registro" className="aqui-Login">Regístrate Aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
