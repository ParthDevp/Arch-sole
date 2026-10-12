import { Link } from 'react-router-dom';

export default function Home(){
  return <>
    {/* Desktop Hero: Full width background banner */}
    <section className="hero premium-hero hero-image-banner d-none d-md-flex" aria-label="Arch & Sole clinic hero banner">
      <div className="hero-image-shade" aria-hidden="true" />
      <div className="container hero-image-content">
        <div className="hero-image-actions">
          <Link className="btn btn-brand btn-lg rounded-pill px-4" to="/services">
            Explore Services <i className="bi bi-arrow-right ms-2"/>
          </Link>
          <Link className="btn btn-glass btn-lg rounded-pill px-4" to="/team">Meet Our Team</Link>
        </div>
        <div className="hero-trust hero-image-trust">
          <span><i className="bi bi-shield-check"/> Patient-first care</span>
          <span><i className="bi bi-clock"/> Monday to Saturday · 10 AM–8 PM</span>
        </div>
      </div>
    </section>

    {/* Mobile Hero: Dedicated layout with 100% UN-CROPPED banner image */}
    <section className="mobile-hero-section d-md-none" aria-label="Arch & Sole clinic banner">
      <div className="container pt-3 pb-2">
        <div className="mobile-hero-card shadow-sm rounded-4 overflow-hidden mb-3">
          <img
            src="/images/hero.jpeg"
            alt="Arch & Sole Clinic — Foot Analytics & Customized Orthotics"
            className="img-fluid w-100 d-block"
          />
        </div>
        <div className="d-flex flex-column gap-2 mb-3">
          <Link className="btn btn-brand btn-lg rounded-pill w-100 text-center" to="/services">
            Explore Services <i className="bi bi-arrow-right ms-2"/>
          </Link>
          <Link className="btn btn-outline-brand btn-lg rounded-pill w-100 text-center" to="/team">
            Meet Our Team
          </Link>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="mobile-trust-chip">
            <i className="bi bi-shield-check text-brand me-2"/>
            <span>Patient-first care</span>
          </div>
          <div className="mobile-trust-chip">
            <i className="bi bi-clock text-brand me-2"/>
            <span>Monday to Saturday · 10 AM–8 PM</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-kicker">ABOUT ARCH & SOLE</span>
            <h2 className="section-heading">Specialized care for every step</h2>
            <p className="lead text-secondary">Arch & Sole provides focused podiatry care for everyday foot problems, mobility concerns, preventive care and long-term foot health.</p>
            <p>Our approach combines careful assessment, practical treatment and patient education so you understand your foot health and feel confident about the next step in your care.</p>
            <Link className="btn btn-outline-brand rounded-pill px-4 w-100-mobile" to="/about">About Us</Link>
          </div>
          <div className="col-lg-6">
            <div className="premium-card p-4 p-lg-5" data-reveal>
              <div className="icon-3d mb-4"><i className="bi bi-heart-pulse"/></div>
              <h3>Why patients choose Arch & Sole</h3>
              <div className="row g-3 mt-2">
                {[['bi-person-check','Personalized care'],['bi-shield-check','Professional approach'],['bi-person-walking','Mobility focused'],['bi-clock-history','Convenient clinic hours']].map(([icon,text])=><div className="col-sm-6" key={text}><div className="d-flex gap-3 align-items-center"><i className={`bi ${icon} fs-4`}/><span>{text}</span></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7"><span className="section-kicker">DOCTORS & STAFF</span><h2 className="section-heading">Meet the Arch & Sole team</h2><p className="lead text-secondary">View our doctors and support staff together in one dedicated team section.</p></div>
          <div className="col-lg-5 text-lg-end"><Link className="btn btn-brand btn-lg rounded-pill px-4 w-100-mobile" to="/team">Doctors & Staff</Link></div>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container"><div className="cta-premium"><div><span className="section-kicker kicker-light">NEED FOOT-CARE SUPPORT?</span><h2>Take the next step toward healthier feet.</h2><p>Contact Arch & Sole or meet our clinical team to discuss your foot-health needs.</p></div><div className="d-flex gap-2 flex-wrap"><Link className="btn btn-light btn-lg rounded-pill px-4" to="/appointment">Book Appointment</Link><Link className="btn btn-outline-light btn-lg rounded-pill px-4" to="/contact">Contact Us</Link></div></div></div>
    </section>
  </>;
}
