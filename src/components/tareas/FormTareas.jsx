import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ProyectoContext } from '../../context/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';

export const FormTareas = () => {
  const context = useContext(ProyectoContext);
  const { proyectoActual } = context;

  const contextTareas = useContext(TareaContext);
  const {
    tareaEditar,
    agregarTareas,
    obtenerTareas,
    tareas,
    actualizarTarea,
    limpiarTareaSeleccionada,
  } = contextTareas;

  useEffect(() => {
    if (tareaEditar) {
      setTarea(tareaEditar);
    } else {
      setTarea({
        nombre: '',
      });
    }
  }, [tareaEditar]);

  const [tarea, setTarea] = useState({
    nombre: '',
  });
  const { nombre } = tarea;

  if (!proyectoActual) return null;

  const [proyecto] = proyectoActual;

  const onChangeTarea = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitTarea = (e) => {
    e.preventDefault();

    if (nombre === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El campo nombre no puede estar vacio!',
      });
    }

    if (tareaEditar) {
      actualizarTarea(tarea);
      limpiarTareaSeleccionada();
    } else {
      tarea.proyecto = proyecto._id;
      agregarTareas(tarea);
    }

    obtenerTareas(proyecto._id);

    setTarea({
      nombre: '',
    });
  };

  return (
    <section className='formulario'>
      <form onSubmit={onSubmitTarea}>
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Ingrese Tarea'
            name='nombre'
            value={nombre}
            onChange={onChangeTarea}
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            value={tareaEditar ? 'Editar Tarea' : 'Agregar Tarea'}
            className='btn btn-primario btn-block btn-submit'
          />
        </div>
      </form>
    </section>
  );
};
