import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {
        ...state,
        mensaje: null,
      };

    case LOGIN_ERROR:
    case REGISTRO_ERROR:
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };

    case CERRAR_SESION:
      return;

    case LOGIN_EXITOSO:
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        usuario: action.payload,
        token: localStorage.setItem('token', action.payload.token),
      };

    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };

    default:
      return state;
  }
};
