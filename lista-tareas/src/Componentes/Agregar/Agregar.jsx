import React from "react";
import { useState } from "react";
import "./Agregar.css";

function Agregar({ agregarTarea }) {
  //definir un estado que controle el input de la descripcion
  const [descripcion, setDescripcion] = useState("");
  //definir un estado que controle el input de la prioridad
  const [prioridad, setPrioridad] = useState("");
  //definir una funcion que se ejecute cuando clickeo el boton que llame a agregarTarea usando los valores de los dos estados que defini antes

  return (
    <>
      <form action="javascript:void(0);">
        <input
          id="tarea"
          type="text"
          name="tarea"
          placeholder="Descripción de la tarea"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
        <select
          name="prioridad"
          id="prioridad"
          onChange={(e) => {
            setPrioridad(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button
          onClick={() => {
            agregarTarea({ descripcion, prioridad });
          }}
        >
          Agregar!
        </button>
      </form>
    </>
  );
}

export default Agregar;
