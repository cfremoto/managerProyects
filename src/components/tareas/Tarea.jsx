import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';

export const Tarea = ({ tarea }) => {
  const { nombre, estado } = tarea;

  const context = useContext(ProyectoContext);
  const { proyectoActual } = context;
  const [proyecto] = proyectoActual;

  const contextTarea = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaEditar } =
    contextTarea;

  const onClickEditar = (tarea) => {
    guardarTareaEditar(tarea);
  };

  const onClickEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyecto.id);
  };

  const cambiarEstado = (tarea) => {
    tarea.estado = !tarea.estado;
    cambiarEstadoTarea(tarea);
  };

  return (
    <li className='tarea sombra'>
      <p>{nombre}</p>
      <div className='estado'>
        {estado ? (
          <button
            type='button'
            className='completo'
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type='button'
            className='incompleto'
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
          onClick={() => onClickEditar(tarea)}
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-secundario'
          onClick={() => onClickEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};
