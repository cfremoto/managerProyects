import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertaContext } from '../../context/alerta/AlertaContext';
import { AuthContext } from '../../context/auth/AuthContext';

const initialState = {
  nombre: '',
  telefono: '',
  email: '',
  password: '',
  confirmar: '',
};

const NuevaCuenta = () => {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { autenticado, mensaje, registrarUser } = authContext;

  const [user, setUser] = useState(initialState);
  const { nombre, telefono, email, password, confirmar } = user;

  const navigate = useNavigate();

  useEffect(() => {
    if (mensaje) mostrarAlerta(mensaje.categoria, mensaje.mensaje);
  }, [mensaje, navigate]);

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmar.trim() === ''
    ) {
      mostrarAlerta('alerta-error', 'Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      mostrarAlerta('alerta-error', 'El password debe de ser min 6 caracteres');
      return;
    }

    if (password !== confirmar) {
      mostrarAlerta('alerta-error', 'El password no es correcto');
      return;
    }

    registrarUser({
      nombre,
      telefono,
      email,
      password,
    });

    setUser(initialState);
    navigate('/');
  };

  return (
    <section className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}

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
              value='Registrar'
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
