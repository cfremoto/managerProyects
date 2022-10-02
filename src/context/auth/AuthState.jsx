import { useReducer } from 'react';
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from '../../types';
import { clienteAxios } from '../../utils/Axios';
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
      console.log(response);

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

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        usuario: state.usuario,
        autenticado: state.autenticado,
        mensaje: state.mensaje,
        registrarUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
