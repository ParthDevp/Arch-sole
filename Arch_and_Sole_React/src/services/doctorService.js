import { apiFetch } from './apiClient';

function toQuery(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') query.set(key, value);
  });
  const value = query.toString();
  return value ? `?${value}` : '';
}

export const doctorService = {
  getDoctors: (params) => apiFetch(`/api/doctors${toQuery(params)}`),
  getFeaturedDoctors: () => apiFetch('/api/doctors?featured=true'),
  getDoctorById: (id) => apiFetch(`/api/doctors/${encodeURIComponent(id)}`),
  getSpecialties: () => apiFetch('/api/specialties'),
  getLocations: () => apiFetch('/api/locations'),
  getReviews: (doctorId) => apiFetch(`/api/doctors/${encodeURIComponent(doctorId)}/reviews`),
};
