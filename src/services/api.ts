import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // bakseURL: 'http://192.168.0.77:3333',
});

export default api;
