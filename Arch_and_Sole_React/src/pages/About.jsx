import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

export default function About() {
  return <>
    <PageHero kicker="ABOUT US" title="Welcome to Arch & Sole" text="Professional podiatry, precision foot analysis and personalized care designed around every step you take." />

    <section className="section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6"><img src="/images/hero.jpeg" className="img-fluid rounded-4 shadow-sm" alt="Arch & Sole clinic" /></div>
          <div className="col-lg-6">
            <span className="section-kicker">WHO WE ARE</span>
            <h2 className="section-heading">Helping you move with comfort and confidence</h2>
            <p>Arch & Sole is a dedicated foot-health and podiatry clinic focused on understanding how your feet affect your comfort, posture, movement and everyday life.</p>
            <p>Our approach begins with careful assessment. We listen to your symptoms, understand your lifestyle and identify the possible cause of discomfort before recommending an appropriate care plan.</p>
            <p>From routine foot care and diabetic foot support to gait analysis, custom insoles, ingrown toenail care and corn or callus management, our aim is to provide practical, personalized and understandable care.</p>
            <Link to="/appointment" className="btn btn-brand rounded-pill px-4 mt-3">Book an Appointment</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space bg-soft">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-kicker">OUR APPROACH</span>
          <h2 className="section-heading">Care built around the patient</h2>
          <p className="section-copy mx-auto">We want every patient to understand their foot health, their treatment options and the steps they can take to protect their mobility.</p>
        </div>
        <div className="row g-4">
          {[
            ['bi-search-heart','Detailed Assessment','We begin by understanding symptoms, movement, footwear and daily activities.'],
            ['bi-person-heart','Personalized Care','Recommendations are based on the individual rather than a one-size-fits-all approach.'],
            ['bi-shield-check','Prevention Focus','We focus not only on current discomfort but also on reducing future foot-health problems.'],
            ['bi-chat-square-heart','Clear Guidance','Patients receive simple, practical guidance they can follow beyond the clinic visit.'],
          ].map(([icon,title,text]) => <div className="col-md-6 col-lg-3" key={title}><article className="premium-card h-100 p-4 text-center"><div className="service-icon mx-auto"><i className={`bi ${icon}`} /></div><h3 className="h5 mt-4">{title}</h3><p className="mb-0 text-secondary">{text}</p></article></div>)}
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <span className="section-kicker">WHY ARCH & SOLE</span>
            <h2 className="section-heading">Foot care that supports better mobility</h2>
            <p>Healthy feet play an important role in staying active and independent. Our clinic combines professional assessment, modern foot-care solutions and patient education to support comfortable movement at every age.</p>
            <div className="row g-3 mt-2">
              {['Precision foot analysis','Custom insole support','Podiatry and preventive care','Diabetic foot support','Gait and footwear guidance','Patient-first communication'].map(x => <div className="col-sm-6" key={x}><div className="feature-check"><i className="bi bi-check-circle-fill"/><span>{x}</span></div></div>)}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="premium-card p-4 p-lg-5">
              <h3 className="h4">Clinic Hours</h3>
              <p className="mb-1"><strong>Monday to Saturday</strong></p>
              <p>10:00 AM – 8:00 PM</p>
              <p className="mb-4"><strong>Sunday:</strong> Closed</p>
              <h3 className="h4">Visit Us</h3>
              <p className="mb-0">Basement, Unity Scans, Ambrosia Towers, Opp. Sky City Mall, Devipada, Borivali East, Mumbai – 400066</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
