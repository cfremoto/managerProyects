import { useReducer } from 'react';
import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  LIMPIAR_TAREAEDITAR,
  OBTENER_TAREAS,
  TAREA_EDITAR,
} from '../../types';
import { TareaContext } from './TareaContext';
import TareaReducer from './TareaReducer';

export const TareaState = (props) => {
  const initialState = {
    tareas: [],
    tareasProyecto: null,
    tareaEditar: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: OBTENER_TAREAS,
      payload: proyectoId,
    });
  };

  const agregarTareas = (tarea) => {
    dispatch({
      type: AGREGAR_TAREAS,
      payload: tarea,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  const guardarTareaEditar = (tarea) => {
    dispatch({
      type: TAREA_EDITAR,
      payload: tarea,
    });
  };

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
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
        tareasProyecto: state.tareasProyecto,
        tareaEditar: state.tareaEditar,
        obtenerTareas,
        agregarTareas,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaEditar,
        actualizarTarea,
        limpiarTareaSeleccionada,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
