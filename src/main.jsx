import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProyectoState } from './context/ProyectoState';
import { TareaState } from './context/tareas/TareaState';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProyectoState>
    <TareaState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TareaState>
  </ProyectoState>
);
