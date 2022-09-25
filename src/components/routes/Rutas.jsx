import { Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import NuevaCuenta from '../auth/NuevaCuenta'
import Proyectos from '../proyectos/Proyectos'

const Rutas = () => {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/nueva-cuenta' element={<NuevaCuenta />} />
      <Route path='/proyectos' element={ <Proyectos /> }  />
    </Routes>
  )
}
export default Rutas
