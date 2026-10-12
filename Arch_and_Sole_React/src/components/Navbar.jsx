import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Home', 'bi-house-door'],
  ['/podiatry', 'Podiatry', 'bi-shield-plus'],
  ['/services', 'Services', 'bi-grid-fill'],
  ['/team', 'Doctors & Staff', 'bi-people-fill'],
  ['/about', 'About Us', 'bi-info-circle-fill'],
  ['/contact', 'Contact', 'bi-geo-alt-fill']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Automatically close mobile menu when navigating to another route
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return <>
    <div className="topbar d-none d-lg-block">
      <div className="container py-2 d-flex justify-content-between">
        <span>Specialized foot & ankle care for every step.</span>
        <div className="d-flex gap-4">
          <span><i className="bi bi-clock me-1"/>Monday–Saturday · 10:00 AM–8:00 PM</span>
          <a href="tel:+919185033020"><i className="bi bi-telephone me-1"/>+91 91850 33020</a>
        </div>
      </div>
    </div>

    <nav className={`navbar navbar-expand-xl sticky-top premium-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand py-0" to="/" onClick={() => setIsOpen(false)}>
          <img src="/images/logo.jpg" className="site-logo" alt="Arch & Sole"/>
        </Link>

        {/* Quick mobile call button right in header */}
        <div className="d-flex align-items-center gap-2 d-xl-none ms-auto me-2">
          <a
            href="tel:+919185033020"
            className="btn btn-outline-brand rounded-pill btn-sm d-flex align-items-center gap-1 px-3 py-1 mobile-nav-call"
            aria-label="Call clinic directly"
          >
            <i className="bi bi-telephone-fill"/>
            <span className="d-none d-sm-inline">Call</span>
          </a>
        </div>

        <button
          className={`navbar-toggler custom-toggler border-0 ${isOpen ? 'active' : ''}`}
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon-bar"/>
          <span className="toggler-icon-bar"/>
          <span className="toggler-icon-bar"/>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show custom-mobile-open' : ''}`} id="nav">
          <ul className="navbar-nav ms-auto align-items-xl-center gap-xl-1">
            {links.map(([to, label, icon]) => <li className="nav-item" key={to}>
              <NavLink
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to={to}
                onClick={() => setIsOpen(false)}
              >
                <i className={`bi ${icon} me-2 d-xl-none text-brand`}/>
                {label}
              </NavLink>
            </li>)}
            <li className="nav-item ms-xl-2 mobile-cta-li">
              <Link
                className="btn btn-brand rounded-pill px-4 w-100-mobile"
                to="/appointment"
                onClick={() => setIsOpen(false)}
              >
                <i className="bi bi-whatsapp me-2 d-xl-none"/>
                Book Appointment
              </Link>
            </li>
          </ul>

          {/* Quick info in mobile drawer */}
          <div className="mobile-nav-drawer-footer d-xl-none pt-3 mt-3 border-top">
            <div className="d-flex align-items-center justify-content-between text-muted small">
              <span><i className="bi bi-clock me-1"/>Mon–Sat: 10 AM – 8 PM</span>
              <a href="tel:+919185033020" className="text-brand fw-bold">
                +91 91850 33020
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>;
}
