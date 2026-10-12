import { apiFetch } from './apiClient';
export const availabilityService = {
  getAvailability: (doctorId) => apiFetch(`/api/doctors/${encodeURIComponent(doctorId)}/availability`),
  getSlots: (doctorId, date) => apiFetch(`/api/doctors/${encodeURIComponent(doctorId)}/slots?date=${encodeURIComponent(date)}`),
};
