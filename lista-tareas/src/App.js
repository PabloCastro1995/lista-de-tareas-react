import { useState } from "react";
import "./App.css";
import Agregar from "./Componentes/Agregar/Agregar.jsx";
import Mostrar from "./Componentes/Mostrar/Mostrar.jsx";

function App() {
  const [listaDeTareas, setlistaDeTareas] = useState([
    { id: "asdas", descripcion: "tarea 1", prioridad: "priodidad-baja" },
  ]);

  const agregarTarea = (nuevaTarea) => {
    setlistaDeTareas([...listaDeTareas, nuevaTarea]);
    console.log("hola");
  };

  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>

        <Agregar agregarTarea={agregarTarea} />
        <Mostrar listaDeTareas={listaDeTareas} />
      </main>
    </div>
  );
}

export default App;
