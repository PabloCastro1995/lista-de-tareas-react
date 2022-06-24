import React from "react";
import "./Mostrar.css";

export default function Mostrar({ listaDeTareas }) {
  return (
    <>
      <h3>Tareas</h3>
      {listaDeTareas ? (
        listaDeTareas.map((t) => <span>{t.descripcion}</span>)
      ) : (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      )}

      <ul id="lista-tareas"></ul>

      <p class="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
}
