import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';

export const Proyecto = ({ proyecto }) => {
  const { nombre, id } = proyecto;

  const context = useContext(ProyectoContext);
  const { obtenerProyectoActual } = context;

  const contextTareas = useContext(TareaContext);
  const { obtenerTareas } = contextTareas;

  const obtenerId = (id) => {
    obtenerProyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <li>
      <button type='button' className='btn btn-blank' onClick={() => obtenerId(id)}>
        {nombre}
      </button>
    </li>
  );
};
