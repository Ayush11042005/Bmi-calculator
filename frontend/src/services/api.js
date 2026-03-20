import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
});

export const saveBmi = (data) => API.post('/bmi/save', data);

export const getBmiHistory = (clientId) => API.get(`/bmi/history?clientId=${clientId}`);

export const getLatestBmi = (clientId) => API.get(`/bmi/latest?clientId=${clientId}`);

export const deleteBmiRecord = (id, clientId) => API.delete(`/bmi/${id}?clientId=${clientId}`);
