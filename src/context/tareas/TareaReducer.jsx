import { OBTENER_TAREAS } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_TAREAS:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };

    default:
      return state;
  }
};
