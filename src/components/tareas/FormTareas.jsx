export const FormTareas = () => {
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
