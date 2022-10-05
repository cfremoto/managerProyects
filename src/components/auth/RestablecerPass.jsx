import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertaContext } from '../../context/alerta/AlertaContext';
import { AuthContext } from '../../context/auth/AuthContext';

const initialState = {
  password: '',
  confirmar: '',
};

export const RestablecerPass = () => {
  const authContext = useContext(AuthContext);
  const { mensaje, autenticarSesion } = authContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (mensaje) mostrarAlerta(mensaje.categoria, mensaje.mensaje);
  }, [mensaje]);

  const [pass, setPass] = useState(initialState);
  const { password, confirmar } = pass;

  const navigate = useNavigate();

  const iniciarSesion = (e) => {
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };

  const restablecer = (e) => {
    e.preventDefault();

    if (password.trim() === '' || confirmar.trim() === '') {
      mostrarAlerta('alerta-error', 'Los campos son necesarios');
      return;
    }

    navigate('/');
    setPass(initialState);
  };

  return (
    <section className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}

      <div className='contenedor-form sombra-drak'>
        <h1>Restablecer Contraseña</h1>

        <form onSubmit={restablecer}>
          <div className='campo-form'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='********'
              value={password}
              onChange={iniciarSesion}
            />
          </div>

          <div className='campo-form'>
            <label htmlFor='confirmar'>Password:</label>
            <input
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='********'
              value={confirmar}
              onChange={iniciarSesion}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Restablecer'
            />
          </div>
        </form>
      </div>
    </section>
  );
};
