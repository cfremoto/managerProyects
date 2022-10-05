import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertaContext } from '../../context/alerta/AlertaContext';
import { AuthContext } from '../../context/auth/AuthContext';

export const OlvidePass = () => {
  const authContext = useContext(AuthContext);
  const { mensaje } = authContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  useEffect(() => {
    if (mensaje) mostrarAlerta(mensaje.categoria, mensaje.mensaje);
  }, [mensaje]);

  const [email, setEmail] = useState(null);

  const navigate = useNavigate();

  const selectEmail = (e) => {
    setEmail({
      [e.target.name]: e.target.value,
    });
  };

  const restablecer = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      mostrarAlerta('alerta-error', 'Debes introducir un email');
      return;
    }

    navigate('/');
    setEmail(null);
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
            <label htmlFor='email'>e-mail:</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email@email.com'
              value={email}
              onChange={selectEmail}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Enviar'
            />
          </div>
        </form>
      </div>
    </section>
  );
};
