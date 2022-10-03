import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertaContext } from '../../context/alerta/AlertaContext';
import { AuthContext } from '../../context/auth/AuthContext';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const authContext = useContext(AuthContext);
  const { mensaje, autenticarSesion } = authContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (mensaje) mostrarAlerta(mensaje.categoria, mensaje.mensaje);
  }, [mensaje]);

  const [user, setUser] = useState(initialState);
  const { email, password } = user;

  const navigate = useNavigate();

  const iniciarSesion = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      mostrarAlerta('alerta-error', 'Todos los campos son obligatorios');
      return;
    }

    autenticarSesion(user);
    navigate('/proyectos');
    setUser(initialState);
  };

  return (
    <section className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}

      <div className='contenedor-form sombra-drak'>
        <h1>Iniciar Sesion</h1>

        <form onSubmit={loginUser}>
          <div className='campo-form'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@example.com'
              value={user.email}
              onChange={iniciarSesion}
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
              onChange={iniciarSesion}
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
          ¿Aun no tienes una cuenta? Haz click
          <Link to='/nueva-cuenta'> Aqui!</Link>
        </p>
      </div>
    </section>
  );
};
export default Login;
