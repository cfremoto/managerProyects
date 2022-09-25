import { useContext } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';

export const FormTareas = () => {
  const context = useContext(ProyectoContext);
  const { proyectoActual } = context;

  if (!proyectoActual) return null;

  const [proyecto] = proyectoActual;

  return (
    <section className='formulario'>
      <form>
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Ingrese Tarea'
            name='nombre'
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            value='Agregar Tarea'
            className='btn btn-primario btn-block btn-submit'
          />
        </div>
      </form>
    </section>
  );
};
