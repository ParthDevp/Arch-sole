import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

export default function MobileStickyBar() {
  const location = useLocation();

  // Hide on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const isAppointmentPage = location.pathname === '/appointment';

  return (
    <aside className="mobile-sticky-action-bar d-md-none" aria-label="Mobile quick actions">
      <div className="container px-2">
        <div className="mobile-action-bar-inner d-flex gap-2 align-items-center">
          <a
            href="tel:+919185033020"
            className="btn btn-outline-brand mobile-action-btn flex-fill d-flex align-items-center justify-content-center gap-2"
            aria-label="Call clinic directly"
          >
            <i className="bi bi-telephone-fill" />
            <span>Call Clinic</span>
          </a>

          {isAppointmentPage ? (
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Arch & Sole Podiatry Clinic, I would like to inquire about an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-action-btn flex-fill d-flex align-items-center justify-content-center gap-2"
              aria-label="Chat on WhatsApp"
            >
              <i className="bi bi-whatsapp" />
              <span>WhatsApp Us</span>
            </a>
          ) : (
            <Link
              to="/appointment"
              className="btn btn-whatsapp mobile-action-btn flex-fill d-flex align-items-center justify-content-center gap-2"
              aria-label="Book appointment via WhatsApp"
            >
              <i className="bi bi-calendar2-check-fill" />
              <span>Book Appointment</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
