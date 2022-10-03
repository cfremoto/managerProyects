import { useReducer } from 'react';
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from '../../types';
import { OBTENER_USUARIO } from '../../types/index';
import { clienteAxios } from '../../utils/Axios';
import { tokenAuth } from '../../utils/tokenAuth';
import { AuthContext } from './AuthContext';
import AuthReducer from './AuthReducer';

export const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    usuario: null,
    autenticado: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUser = async (datos) => {
    try {
      const response = await clienteAxios.post('/user', datos);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: datos,
      });
    } catch (err) {
      console.log(err);
      const alerta = {
        categoria: 'alerta-error',
        mensaje: err.response.data.info,
      };

      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  const autenticarSesion = async (datos) => {
    try {
      const response = await clienteAxios.post('/login', datos);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: response.data,
      });
    } catch (err) {
      const alerta = {
        categoria: 'alerta-error',
        mensaje: err.response.data.info,
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token');
    if (token) tokenAuth(token);

    try {
      const respuesta = await clienteAxios.get('/login');
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.userValidado,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        autenticado: state.autenticado,
        mensaje: state.mensaje,
        registrarUser,
        autenticarSesion,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
