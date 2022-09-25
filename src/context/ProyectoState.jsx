import { useReducer } from 'react';
import { AGREGAR_PROYECTO, FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../types';
import { ProyectoContext } from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

export const ProyectoState = (props) => {
  const proyectos = [
    { nombre: 'portfolio', id: 111111 },
    { nombre: 'backend ecommerce', id: 222222 },
    { nombre: 'front ecommerce', id: 333333 },
  ];

  const initialState = {
    proyectos: [],
    formNewProyecto: false,
  };

  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = proyectos.length + 1;
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formProyecto: state.formNewProyecto,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};
