import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREAS,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  LIMPIAR_TAREAEDITAR,
  OBTENER_TAREAS,
  TAREA_EDITAR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREAS:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    case AGREGAR_TAREAS:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };

    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };

    case ACTUALIZAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareasProyecto.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };

    case TAREA_EDITAR:
      return {
        ...state,
        tareaEditar: action.payload,
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
