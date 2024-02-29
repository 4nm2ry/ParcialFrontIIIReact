import React from "react";

const Card = ({ nombrePelicula , comentarios  }) => {
  return (
    <div>
      <h4>Nombre: {nombrePelicula}</h4>
      <p>comentarios: {comentarios}</p>
    </div>
  );
};

export default Card;
