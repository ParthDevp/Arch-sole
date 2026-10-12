/**
 * WhatsApp appointment-request utility for Arch & Sole.
 * Change WHATSAPP_NUMBER here to update the destination globally.
 */

export const WHATSAPP_NUMBER = '919185033020'; // India +91 91850 33020

/**
 * Build the pre-filled appointment-request message.
 * @param {object} fields – form values
 * @returns {string} URL-encoded WhatsApp message
 */
export function buildWhatsAppMessage({ fullName, phone, email, service, preferredDate, preferredTime, message }) {
  const dateLabel = preferredDate
    ? new Date(`${preferredDate}T00:00:00`).toLocaleDateString('en-IN', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })
    : '—';

  const timeLabel = preferredTime || '—';

  const lines = [
    'Hello Arch & Sole,',
    '',
    'I would like to request an appointment.',
    '',
    `Customer Name   : ${fullName || '—'}`,
    `Phone Number    : ${phone || '—'}`,
    email ? `Email           : ${email}` : null,
    `Service Required: ${service || '—'}`,
    `Preferred Date  : ${dateLabel}`,
    `Preferred Time  : ${timeLabel}`,
    message ? `Additional Info : ${message}` : null,
    '',
    'Please let me know if this slot is available.',
    '',
    'Thank you.',
  ].filter((l) => l !== null);

  return encodeURIComponent(lines.join('\n'));
}

/**
 * Open WhatsApp with the pre-filled message.
 * Works on desktop (WhatsApp Web) and mobile (WhatsApp app).
 * @param {object} formValues – same shape as buildWhatsAppMessage argument
 */
export function openWhatsApp(formValues) {
  const encoded = buildWhatsAppMessage(formValues);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
}
