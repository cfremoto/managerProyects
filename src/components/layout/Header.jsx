import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Nav } from '../nav/Nav';
export const Header = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, usuario } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className='app-header'>
      {usuario ? (
        <p className='nombre-usuario'>
          Bienvenido: <span>{usuario.nombre}</span>
        </p>
      ) : null}
      <Nav />
    </header>
  );
};
