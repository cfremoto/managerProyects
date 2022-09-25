import { useContext, useState } from 'react';
import { ProyectoContext } from '../../context/ProyectoContext';

export const NuevoProyecto = () => {
  const context = useContext(ProyectoContext);
  const { formProyecto, mostrarFormulario } = context;

  const [proyecto, setProyecto] = useState({ nombre: '' });
  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };

  const mostrar = () => {
    mostrarFormulario();
  };

  return (
    <>
      <button className='btn btn-block btn-primario' onClick={mostrar}>
        Nuevo Proyecto
      </button>

      {formProyecto ? (
        <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre del Proyecto'
            name='nombre'
            onChange={onChangeProyecto}
            velue={nombre}
          />

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Agregar Proyecto'
          />
        </form>
      ) : null}
    </>
  );
};