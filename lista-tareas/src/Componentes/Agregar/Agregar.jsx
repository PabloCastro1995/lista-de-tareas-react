import React from "react";
import "./Agregar.css";

function Agregar({ agregarTarea }) {
  //definir un estado que controle el input de la descripcion
  //definir un estado que controle el input de la prioridad
  //definir una funcion que se ejecute cuando clickeo el boton que llame a agregarTarea usando los valores de los dos estados que defini antes
  return (
    <form> 
      <input
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
      />
      <select name="prioridad" id="prioridad">
        <option value="" disabled selected>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button id="agregar" onClick={agregarTarea}>Agregar!</button>
    </form>
  );
}

export default Agregar;
