import { Route, Routes } from 'react-router-dom';
import Login from '../auth/Login';
import NuevaCuenta from '../auth/NuevaCuenta';
import { ProtectedRoute } from '../protected/ProtectedRoute';
import Proyectos from '../proyectos/Proyectos';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/nueva-cuenta' element={<NuevaCuenta />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/proyectos' element={<Proyectos />} />
      </Route>
    </Routes>
  );
};
export default Rutas;
