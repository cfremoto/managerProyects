import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { ProyectoContext } from '../../context/ProyectoContext';

export const NuevoProyecto = () => {
  const context = useContext(ProyectoContext);
  const { formProyecto, mostrarFormulario, agregarProyecto } = context;

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
    if (nombre === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo nombre no puede estar vacio!',
      });
    }
    agregarProyecto(proyecto);
    setProyecto({ nombre: '' });
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
            value={nombre}
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
