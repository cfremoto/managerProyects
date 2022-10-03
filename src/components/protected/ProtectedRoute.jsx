import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

export const ProtectedRoute = ({ children, redirectTo = '/' }) => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  if (!autenticado) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
