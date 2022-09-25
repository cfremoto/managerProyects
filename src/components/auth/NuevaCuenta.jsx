import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  nombre: '',
  telefono: '',
  email: '',
  password: '',
};

const NuevaCuenta = () => {
  const [user, setUser] = useState(initialState);

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = () => {};

  return (
    <section className='form-usuario'>
      <div className='contenedor-form sombra-drak'>
        <h1>Registrar Usuario</h1>

        <form onSubmit={register}>
          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu Nombre...'
              value={user.nombre}
              onChange={handleInput}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='telefono'>telefono:</label>
            <input
              type='text'
              id='telefono'
              name='telefono'
              placeholder='+00 000 000 0000'
              value={user.telefono}
              onChange={handleInput}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@example.com'
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='********'
              value={user.password}
              onChange={handleInput}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='confirmar'>Password:</label>
            <input
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='Repetir Password'
              value={user.confirmar}
              onChange={handleInput}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesion'
            />
          </div>
        </form>
        <p>
          Para regresar haz click
          <Link to='/'> Aqui!</Link>
        </p>
      </div>
    </section>
  );
};
export default NuevaCuenta;
