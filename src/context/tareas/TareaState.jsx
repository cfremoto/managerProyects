import { useReducer } from 'react';
import { OBTENER_TAREAS } from '../../types';
import { TareaContext } from './TareaContext';
import TareaReducer from './TareaReducer';

export const TareaState = (props) => {
  const initialState = {
    tareas: [],
    tareasProyecto: null,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: OBTENER_TAREAS,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
