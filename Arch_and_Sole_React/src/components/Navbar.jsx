import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/podiatry', 'Podiatry'],
  ['/services', 'Services'],
  ['/team', 'Doctors & Staff'],
  ['/about', 'About Us'],
  ['/contact', 'Contact']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <>
    <div className="topbar d-none d-lg-block">
      <div className="container py-2 d-flex justify-content-between">
        <span>Specialized foot & ankle care for every step.</span>
        <div className="d-flex gap-4">
          <span><i className="bi bi-clock me-1"/>Monday–Saturday · 10:00 AM–8:00 PM</span>
          <a href="tel:+919185033020">+91 91850 33020</a>
        </div>
      </div>
    </div>

    <nav className={`navbar navbar-expand-xl sticky-top premium-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" className="site-logo" alt="Arch & Sole"/>
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-xl-center gap-xl-1">
            {links.map(([to, label]) => <li className="nav-item" key={to}>
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to={to}>{label}</NavLink>
            </li>)}
            <li className="nav-item ms-xl-2">
              <Link className="btn btn-brand rounded-pill px-4" to="/appointment">Book Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>;
}
