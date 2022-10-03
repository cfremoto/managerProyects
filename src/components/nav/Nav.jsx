import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const Nav = () => {
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  const navigate = useNavigate();

  const logout = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
    <nav className='nav-principal' onClick={logout}>
      <button className='btn btn-black btn-primario'>Cerrar Sesion</button>
    </nav>
  );
};
