import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const authConext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado } = authConext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  const navigate = useNavigate();

  if (!autenticado) {
    return navigate('/');
  }

  return children ? children : <Outlet />;
};
