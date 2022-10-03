import {
  AGREGAR_PROYECTO,
  ELIMINAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  OBTENER_PROYECTOS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formNewProyecto: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formNewProyecto: false,
      };

    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectoActual: state.proyectos.filter(
          (proyecto) => proyecto._id === action.payload
        ),
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto._id !== action.payload
        ),
        proyectoActual: null,
      };

    default:
      return state;
  }
};
