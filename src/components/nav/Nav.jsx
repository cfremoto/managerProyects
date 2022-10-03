import { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';

export const Nav = () => {
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  return (
    <nav className='nav-principal' onClick={() => cerrarSesion()}>
      <button className='btn btn-black btn-block'>Cerrar Sesion</button>
    </nav>
  );
};
