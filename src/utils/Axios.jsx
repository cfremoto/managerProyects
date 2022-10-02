import axios from 'axios';

export const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});
