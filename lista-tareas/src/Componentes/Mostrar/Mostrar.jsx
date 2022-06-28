import React from "react";
import "./Mostrar.css";

export default function Mostrar({ listaDeTareas }) {
  return (
    <>
      <h3>Tareas</h3>
      {listaDeTareas.lenght === 0 ? (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
        
      ) : (
 
        <ul id="lista-tareas">
        {listaDeTareas.map((t) => 
        <li
          key={t.id}
          className={t.prioridad}>
          {t.descripcion}
        </li>)
          
          }
        </ul>

      )}
        
      

      <p class="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
}
