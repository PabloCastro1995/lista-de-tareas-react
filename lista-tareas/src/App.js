import { useState } from "react";
import "./App.css";
import Agregar from "./Componentes/Agregar/Agregar.jsx";
import Mostrar from "./Componentes/Mostrar/Mostrar.jsx";

function App() {
  const [listaDeTareas, setlistaDeTareas] = useState([]);
  const ordenarLista = (listaActual) => {
    return listaActual.sort((a, b) => {
      if (a.prioridad === b.prioridad) {
        return a.fecha - b.fecha;
      }

      if (a.prioridad === "prioridad-alta") {
        return -1;
      }
      if (a.prioridad === "prioridad-baja") {
        return 1;
      }

      if (b.prioridad === "prioridad-alta") {
        return 1;
      }
      if (b.prioridad === "prioridad-baja") {
        return -1;
      }
      return 0;
    });
  };

  const agregarTarea = (nuevaTarea) => {
    setlistaDeTareas([...listaDeTareas, nuevaTarea]);
    // const nuevaLista = [...listaActual, nuevaTarea];
    // return ordenarLista(nuevaLista);
    // });
    // ordenarLista();
  };
  const eliminarTarea = (idTareaAEliminar) => {
    setlistaDeTareas((listaActual) =>
      listaActual.filter((t) => t.id !== idTareaAEliminar)
    );
  };

  const completarTarea = (idTarea) => {
    setlistaDeTareas((listaActual) => {
      let nuevaLista = [...listaActual];
      const tareaSeleccionada = {
        ...listaDeTareas.find((t) => t.id === idTarea),
      };
      tareaSeleccionada.completada = !tareaSeleccionada.completada;
      nuevaLista = nuevaLista.filter((t) => t.id !== idTarea);
      nuevaLista.push(tareaSeleccionada);
      return ordenarLista(nuevaLista);
    });
  };

  return (
    <div className="App">
      {console.log(listaDeTareas)}
      <main>
        <h1>Lista de tareas!</h1>

        <Agregar agregarTarea={agregarTarea} />
        <Mostrar
          listaDeTareas={listaDeTareas}
          eliminarTarea={eliminarTarea}
          completadoDeTarea={completarTarea}
        />
      </main>
    </div>
  );
}

export default App;
