import "./Desarrolladores.css";

const Desarrolladores = () => {
  const developerData = [
    {
      name: "Andrés Jiménez",
      role: "Desarrollador Frontend",
      image: "/src/images/andres.jpg",
    },
    {
      name: "Emili Navas",
      role: "Desarrolladora Frontend",
      image: "/src/images/emili.jpg",
      isEmili: true,
    }, // Agregar una propiedad para identificar a Emili
    {
      name: "José Jiménez",
      role: "Diseñador UI / Desarrollador Frontend",
      image: "/src/images/jose.jpg",
    },
    {
      name: "Luis Pino",
      role: "Desarrollador Frontend",
      image: "/src/images/luis.jpg",
    },
  ];

  return (
    <div className="desarrolladores">
      <div
        className="desarrollado-por-codesoft"
        data-scroll-to="desarrolladoPorCodeSoft"
      >
        Desarrollado por CodeSoft
      </div>
      <div className="personajes">
        {developerData.map((developer, index) => (
          <div
            className={`developer-container ${
              developer.isEmili ? "emili" : ""
            }`}
            key={index}
          >
            <div className="icon-container">
              <img className="developer-image" alt="" src={developer.image} />
            </div>
            <div className="nombre">{developer.name}</div>
            <div className="rol">{developer.role}</div>
          </div>
        ))}
      </div>
      <img
        className="imagen-debajo"
        src="/src/images/code.png"
        alt="Imagen debajo"
      />
    </div>
  );
};

export default Desarrolladores;
