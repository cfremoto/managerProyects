import { useReducer } from 'react';
import {
  AGREGAR_PROYECTO,
  ELIMINAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  OBTENER_PROYECTOS,
} from '../types';
import { clienteAxios } from '../utils/Axios';
import { ProyectoContext } from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

export const ProyectoState = (props) => {
  const initialState = {
    proyectos: [],
    formNewProyecto: false,
    proyectoActual: null,
  };

  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({ type: FORMULARIO_PROYECTO });
  };

  const obtenerProyectos = async () => {
    try {
      const respuesta = await clienteAxios.get('/proyectos');
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: respuesta.data.proyectos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const agregarProyecto = async (proyecto) => {
    try {
      const response = await clienteAxios.post('/proyectos', proyecto);
      console.log(response);
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: response.data.newProyecto,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const obtenerProyectoActual = (proyectoId) => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectoId,
    });
  };

  const eliminarProyecto = async (proyectoId) => {
    try {
      await clienteAxios.delete(`/proyectos/${proyectoId}`);
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formProyecto: state.formNewProyecto,
        proyectoActual: state.proyectoActual,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        obtenerProyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};
