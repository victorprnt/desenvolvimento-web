import axios from 'axios';

const baseURL = 'http://localhost:3001/api'; // Adjust the base URL as needed

const api = axios.create({
  baseURL,
});

export const getUsers = () => api.get('/users');
export const addUser = (data: any) => api.post('/users', data);
export const deleteUser = (id: number) => api.delete(`/users/${id}`);
export const updateUser = (id: number, data: any) => api.put(`/users/${id}`, data);

export default api;