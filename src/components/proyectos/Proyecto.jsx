import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';

export const Proyecto = ({ proyecto }) => {
  const { nombre, id } = proyecto;

  const context = useContext(ProyectoContext);
  const { obtenerProyectoActual } = context;

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => obtenerProyectoActual(id)}
      >
        {nombre}
      </button>
    </li>
  );
};
