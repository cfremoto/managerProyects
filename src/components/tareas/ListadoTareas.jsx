import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';
import { Tarea } from './Tarea';

export const ListadoTareas = () => {
  const context = useContext(ProyectoContext);
  const { proyectoActual, eliminarProyecto } = context;

  const contextTarea = useContext(TareaContext);
  const { tareas } = contextTarea;

  if (!proyectoActual) return <h2>Selecciona un Proyecto</h2>;
  const [proyecto] = proyectoActual;

  return (
    <>
      <h2>{proyecto.nombre}</h2>

      <ul className='listado-tareas'>
        {!tareas ? (
          <li className='tarea'>No hay Tareas</li>
        ) : (
          tareas.map((tarea) => <Tarea key={tarea._id} tarea={tarea} />)
        )}
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
        onClick={() => eliminarProyecto(proyecto._id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};
