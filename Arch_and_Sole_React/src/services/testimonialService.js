import { apiFetch } from './apiClient';
export const testimonialService = { getTestimonials: () => apiFetch('/api/testimonials') };
