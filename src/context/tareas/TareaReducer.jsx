import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  LIMPIAR_TAREAEDITAR,
  OBTENER_TAREAS,
  TAREA_EDITAR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREAS:
      return {
        ...state,
        tareas: action.payload,
      };

    case AGREGAR_TAREAS:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea._id !== action.payload),
      };

    case TAREA_EDITAR:
      return {
        ...state,
        tareaEditar: action.payload,
      };

    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea._id === action.payload._id ? action.payload : tarea
        ),
      };

    case LIMPIAR_TAREAEDITAR:
      return {
        ...state,
        tareaEditar: null,
      };

    default:
      return state;
  }
};
