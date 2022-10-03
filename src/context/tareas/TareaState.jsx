import { useReducer } from 'react';
import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  LIMPIAR_TAREAEDITAR,
  OBTENER_TAREAS,
  TAREA_EDITAR,
} from '../../types';
import { clienteAxios } from '../../utils/Axios';
import { TareaContext } from './TareaContext';
import TareaReducer from './TareaReducer';

export const TareaState = (props) => {
  const initialState = {
    tareas: null,
    tareaEditar: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = async (proyecto) => {
    try {
      const respuesta = await clienteAxios.get(`/tareas/${proyecto}`);
      dispatch({
        type: OBTENER_TAREAS,
        payload: respuesta.data.tareas,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const agregarTareas = async (tarea) => {
    try {
      const respuesta = await clienteAxios.post('/tareas', tarea);
      dispatch({
        type: AGREGAR_TAREAS,
        payload: tarea,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const eliminarTarea = async (id) => {
    try {
      await clienteAxios.delete(`/tareas/${id}`);
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const guardarTareaEditar = (tarea) => {
    dispatch({
      type: TAREA_EDITAR,
      payload: tarea,
    });
  };

  const actualizarTarea = async (tarea) => {
    try {
      const respuesta = await clienteAxios.patch(`/tareas/${tarea._id}`, tarea);
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: respuesta.data.updateTarea,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const limpiarTareaSeleccionada = () => {
    dispatch({
      type: LIMPIAR_TAREAEDITAR,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareaEditar: state.tareaEditar,
        obtenerTareas,
        agregarTareas,
        eliminarTarea,
        actualizarTarea,
        guardarTareaEditar,
        limpiarTareaSeleccionada,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
