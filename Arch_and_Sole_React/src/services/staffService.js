import { apiFetch } from './apiClient';
export const staffService = { getStaff: () => apiFetch('/api/staff') };
