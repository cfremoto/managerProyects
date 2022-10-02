import { useReducer } from 'react';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';
import { AlertaContext } from './AlertaContext';
import AlertaReducer from './AlertaReducer';

export const AlertaState = (props) => {
  const initialState = {
    alerta: null,
  };

  const [state, dispatch] = useReducer(AlertaReducer, initialState);

  const mostrarAlerta = (categoria, msg) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: {
        categoria,
        msg,
      },
    });
    ocultarAlerta();
  };

  const ocultarAlerta = () => {
    setTimeout(() => {
      dispatch({
        type: OCULTAR_ALERTA,
      });
    }, 5000);
  };

  return (
    <AlertaContext.Provider
      value={{
        alerta: state.alerta,
        mostrarAlerta: mostrarAlerta,
      }}
    >
      {props.children}
    </AlertaContext.Provider>
  );
};
