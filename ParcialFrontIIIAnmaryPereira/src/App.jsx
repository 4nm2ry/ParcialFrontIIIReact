import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [nombrePelicula, setNombrePelicula] = React.useState("");
  const [comentarios, setComentarios] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombrePeliculaSinEspacio = nombrePelicula.trim();
    if (nombrePeliculaSinEspacio.length >= 3 && comentarios.length >= 6) {
      setShow(true)
    } else {
      alert("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div>
      <h1>Mis películas favoritas</h1>

      {!show && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Película favorita: </label>
            <input
              type="text"
              id="nombrePelicula"
              name="nombrePelicula"
              value={nombrePelicula}
              onChange={(e) => setNombrePelicula(e.target.value)}
            ></input>

            <label>Comentarios: </label>
            <input
              type="text"
              id="comentarios"
              name="comentarios"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
            ></input>

            <button type="submit">Enviar</button>
          </form>
        </div>
      )}

      {show && (
        <Card nombrePelicula={nombrePelicula} comentarios={comentarios} />
      )}
    </div>
  );
}

export default App;
