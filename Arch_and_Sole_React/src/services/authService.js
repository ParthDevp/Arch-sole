import { apiFetch } from './apiClient';
export const authService = {
  me: () => apiFetch('/api/auth/me'),
  login: (credentials) => apiFetch('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (data) => apiFetch('/api/auth/register', { method: 'POST', body: JSON.stringify(data) }),
  logout: () => apiFetch('/api/auth/logout', { method: 'POST' }),
  getProfile: () => apiFetch('/api/profile'),
  updateProfile: (data) => apiFetch('/api/profile', { method: 'PUT', body: JSON.stringify(data) }),
};
