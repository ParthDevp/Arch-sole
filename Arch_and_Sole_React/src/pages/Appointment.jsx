import { useState } from 'react';
import PageHero from '../components/PageHero';
import { openWhatsApp } from '../utils/whatsapp';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

// ─── Clinic time slots (10 AM – 8 PM, one-hour ranges) ───────────────────────
const TIME_SLOTS = [
  '10 – 11 AM',
  '11 AM – 12 PM',
  '12 – 1 PM',
  '1 – 2 PM',
  '2 – 3 PM',
  '3 – 4 PM',
  '4 – 5 PM',
  '5 – 6 PM',
  '6 – 7 PM',
  '7 – 8 PM',
];

// ─── Services list (mirrors the data/services.js titles) ─────────────────────
const SERVICE_OPTIONS = [
  'General Consultation',
  'Foot Analysis',
  'Gait Analysis',
  'Custom Insoles',
  'Ingrown Toenail Care',
  'Corn & Callus Removal',
  'Diabetic Foot Care',
  'Footwear & Orthotics Solutions',
  'Heel & Foot Pain',
  'General Podiatry',
];

const initial = {
  fullName: '',
  phone: '',
  email: '',
  service: SERVICE_OPTIONS[0],
  preferredDate: '',
  preferredTime: '',
  message: '',
};

function validate(form) {
  if (!form.fullName.trim())       return 'Please enter your full name.';
  if (!form.phone.trim())          return 'Please enter your phone number.';
  if (!/^[0-9+() -]{8,20}$/.test(form.phone.trim()))
                                   return 'Please enter a valid phone number.';
  if (!form.service)               return 'Please select a service.';
  if (!form.preferredDate)         return 'Please choose a preferred date.';
  if (!form.preferredTime)         return 'Please choose a preferred time.';
  return null;
}

export default function Appointment() {
  const [form, setForm]           = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent]           = useState(false);      // WhatsApp opened
  const [error, setError]         = useState('');

  const today = new Date().toISOString().slice(0, 10);
  const update = (e) => setForm((v) => ({ ...v, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    setError('');

    const validationError = validate(form);
    if (validationError) { setError(validationError); return; }

    setSubmitting(true);

    try {
      openWhatsApp(form);
      setSent(true);
      setForm(initial);
    } catch {
      setError('Could not open WhatsApp. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  // WhatsApp display number for UI
  const displayNumber = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`;

  return (
    <>
      <PageHero
        kicker="APPOINTMENT"
        title="Book an Arch &amp; Sole appointment"
        text="Fill in the form below. We will open WhatsApp with your details pre-filled — just tap Send to complete your request."
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
              <div className="premium-card p-4 p-lg-5">

                {/* ── Success / sent panel ─────────────────────────────── */}
                {sent ? (
                  <div className="text-center py-4" id="whatsapp-success-panel">
                    <div className="whatsapp-success-orb mx-auto mb-4">
                      <i className="bi bi-whatsapp" />
                    </div>
                    <h2 className="h3 mb-2">WhatsApp is opening…</h2>
                    <p className="text-secondary mb-4">
                      Your appointment details have been pre-filled in WhatsApp.
                      <strong> Tap&nbsp;"Send"</strong> in WhatsApp to submit your request.
                      Our team will confirm your slot as soon as possible.
                    </p>
                    <div className="alert whatsapp-info-alert d-flex align-items-start gap-3 text-start mb-4">
                      <i className="bi bi-info-circle-fill fs-5 flex-shrink-0 mt-1" />
                      <div>
                        <strong>This is a request, not a confirmation.</strong><br />
                        Sending the WhatsApp message does not automatically book your appointment.
                        The clinic will reply to confirm your slot.
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp rounded-pill px-4"
                        id="whatsapp-open-btn"
                      >
                        <i className="bi bi-whatsapp me-2" />
                        Open WhatsApp
                      </a>
                      <button
                        className="btn btn-outline-brand rounded-pill px-4"
                        onClick={() => setSent(false)}
                        id="new-request-btn"
                      >
                        Submit Another Request
                      </button>
                    </div>
                    <p className="small text-secondary mt-4 mb-0">
                      You can also call us directly:&nbsp;
                      <a href={`tel:+${WHATSAPP_NUMBER}`}>{displayNumber}</a>
                    </p>
                  </div>
                ) : (
                  /* ── Appointment form ──────────────────────────────── */
                  <>
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <div className="whatsapp-badge">
                        <i className="bi bi-whatsapp" />
                      </div>
                      <div>
                        <h2 className="h3 mb-1">Request an appointment</h2>
                        <p className="text-secondary mb-0 small">
                          We'll open WhatsApp with your details pre-filled. Simply tap&nbsp;<strong>Send</strong>.
                        </p>
                      </div>
                    </div>

                    {error && (
                      <div className="alert alert-danger d-flex align-items-center gap-2" role="alert" id="form-error-msg">
                        <i className="bi bi-exclamation-triangle-fill" />
                        {error}
                      </div>
                    )}

                    <form onSubmit={submit} className="row g-3" noValidate id="appointment-whatsapp-form">
                      {/* Full Name */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="fullName">Full Name *</label>
                        <input
                          id="fullName" name="fullName" className="form-control"
                          value={form.fullName} onChange={update}
                          required maxLength="100" placeholder="Your full name"
                        />
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="phone">Phone Number *</label>
                        <input
                          id="phone" name="phone" type="tel" className="form-control"
                          value={form.phone} onChange={update}
                          required pattern="[0-9+() -]{8,20}" placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="email">Email <span className="text-secondary">(optional)</span></label>
                        <input
                          id="email" name="email" type="email" className="form-control"
                          value={form.email} onChange={update} placeholder="you@email.com"
                        />
                      </div>

                      {/* Service */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="service">Service Required *</label>
                        <select
                          id="service" name="service" className="form-select"
                          value={form.service} onChange={update} required
                        >
                          {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Date */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="preferredDate">Preferred Date *</label>
                        <input
                          id="preferredDate" name="preferredDate" type="date"
                          min={today} className="form-control"
                          value={form.preferredDate} onChange={update} required
                        />
                      </div>

                      {/* Time */}
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="preferredTime">Preferred Time *</label>
                        <select
                          id="preferredTime" name="preferredTime" className="form-select"
                          value={form.preferredTime} onChange={update} required
                        >
                          <option value="">Select a time slot</option>
                          {TIME_SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <div className="form-text">Clinic hours: 10 AM – 8 PM · Monday–Saturday</div>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label className="form-label" htmlFor="message">Additional Message <span className="text-secondary">(optional)</span></label>
                        <textarea
                          id="message" name="message" rows="4" className="form-control"
                          value={form.message} onChange={update}
                          maxLength="1000" placeholder="Any specific concern, referral details, etc."
                        />
                      </div>

                      {/* Submit */}
                      <div className="col-12 d-flex flex-wrap gap-3 align-items-center mt-2">
                        <button
                          type="submit"
                          className="btn btn-whatsapp btn-lg rounded-pill px-5"
                          disabled={submitting}
                          id="submit-whatsapp-btn"
                        >
                          {submitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                              Opening WhatsApp…
                            </>
                          ) : (
                            <>
                              <i className="bi bi-whatsapp me-2" />
                              Send via WhatsApp
                            </>
                          )}
                        </button>
                        <span className="small text-secondary">Monday–Saturday · 10:00 AM–8:00 PM</span>
                      </div>

                      <p className="col-12 small text-secondary mb-0">
                        <i className="bi bi-shield-check me-1 text-success" />
                        Submitting opens WhatsApp with your details pre-filled. You must tap&nbsp;
                        <strong>Send</strong> to complete the request. This is not an automatic confirmation.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* ── Side info card ───────────────────────────────────────── */}
            <div className="col-lg-4">
              <div className="info-panel h-100" data-reveal>
                <div className="info-icon mb-4">
                  <i className="bi bi-whatsapp" />
                </div>
                <h3 className="h5 fw-800 mb-3">How it works</h3>
                <ol className="ps-3 text-secondary" style={{ lineHeight: 2 }}>
                  <li>Fill in your appointment details above.</li>
                  <li>Click <strong>Send via WhatsApp</strong>.</li>
                  <li>WhatsApp will open with your details pre-filled.</li>
                  <li>Tap <strong>Send</strong> in WhatsApp.</li>
                  <li>Our team will confirm your slot by reply.</li>
                </ol>
                <hr className="my-4" />
                <h3 className="h5 fw-800 mb-3">Contact us directly</h3>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="d-flex align-items-center gap-2 mb-3 text-dark fw-700">
                  <i className="bi bi-telephone text-brand" /> {displayNumber}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank" rel="noopener noreferrer"
                  className="d-flex align-items-center gap-2 text-dark fw-700"
                >
                  <i className="bi bi-whatsapp text-success" /> Chat on WhatsApp
                </a>
                <hr className="my-4" />
                <p className="small text-secondary mb-0">
                  <strong>Clinic Hours</strong><br />
                  Monday – Saturday<br />
                  10:00 AM – 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
