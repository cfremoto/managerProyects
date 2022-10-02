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
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };

    case REGISTRO_ERROR:
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };

    case OBTENER_USUARIO:
      return;

    case CERRAR_SESION:
      return;

    case LOGIN_EXITOSO:
      return;

    case LOGIN_ERROR:
      return;

    default:
      return state;
  }
};
