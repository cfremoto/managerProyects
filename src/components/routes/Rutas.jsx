import { Route, Routes } from 'react-router-dom';
import Login from '../auth/Login';
import NuevaCuenta from '../auth/NuevaCuenta';
import { OlvidePass } from '../auth/OlvidePass';
import { RestablecerPass } from '../auth/RestablecerPass';
import { ProtectedRoute } from '../protected/ProtectedRoute';
import Proyectos from '../proyectos/Proyectos';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/nueva-cuenta' element={<NuevaCuenta />} />
      <Route path='/restablecer/:token' element={<RestablecerPass />} />
      <Route path='/restablecer' element={<OlvidePass />} />
      <Route
        path='/proyectos'
        element={
          <ProtectedRoute>
            <Proyectos />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default Rutas;
