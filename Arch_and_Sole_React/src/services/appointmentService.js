import { apiFetch, apiBaseUrl } from './apiClient';

export const appointmentService = {
  createAppointment: (data) => apiFetch('/api/appointments', { method: 'POST', body: JSON.stringify(data) }),
  adminList: (username, password) => apiFetch('/api/admin/appointments', {
    headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` },
  }),
  exportUrl: () => `${apiBaseUrl}/api/admin/appointments/export`,
};
