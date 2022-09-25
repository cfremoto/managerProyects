import { Tarea } from './Tarea';

export const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: 'Elegir Tarea', estado: true },
    { nombre: 'Elegir Tarea1', estado: false },
    { nombre: 'Elegir Tarea2', estado: false },
  ];

  return (
    <>
      <h2>Proyecto: Portfolio</h2>

      <ul className='listado-tareas'>
        {tareasProyecto.length === 0 ? (
          <li className='tera'>No hay Tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type='button' className='btn btn-eliminar'>
        Eliminar Proyecto &times;
      </button>
    </>
  );
};
