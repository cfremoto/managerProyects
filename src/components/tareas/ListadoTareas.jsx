import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';

export const ListadoTareas = () => {
  const context = useContext(ProyectoContext);
  const { proyectoActual, eliminarProyecto } = context;

  const contextTarea = useContext(TareaContext);
  const { tareasProyecto } = contextTarea;

  if (!proyectoActual) return <h2>Selecciona un Proyecto</h2>;
  const [proyecto] = proyectoActual;

  return (
    <>
      <h2>{proyecto.nombre}</h2>

      <ul className='listado-tareas'>
        {tareasProyecto.length === 0 ? (
          <li className='tera'>No hay Tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
        onClick={() => eliminarProyecto(proyecto.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};
