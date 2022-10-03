import { useContext, useEffect } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';
import { Proyecto } from './Proyecto';

export const ListadoProyectos = () => {
  const context = useContext(ProyectoContext);
  const { proyectos, obtenerProyectos } = context;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  if (proyectos.length === 0) return null;

  return (
    <ul className='listado-proyectos'>
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto._id} proyecto={proyecto} />
      ))}
    </ul>
  );
};
