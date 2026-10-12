import PageHero from '../components/PageHero';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

export default function Services(){
  return <>
    <PageHero
      kicker="OUR SERVICES"
      title="Complete foot care at Arch & Sole"
      text="From foot analysis and custom insoles to diabetic foot care, nail care and gait assessment, explore the services available at Arch & Sole."
    />

    <section className="section-space pb-4">
      <div className="container">
        <img
          src="/images/services-banner.jpg"
          className="img-fluid rounded-4 shadow-sm service-banner"
          alt="Arch & Sole foot care services"
        />
      </div>
    </section>

    <section className="section-space bg-soft pt-5">
      <div className="container">
        <div className="text-center section-intro mx-auto mb-5">
          <span className="section-kicker">ARCH & SOLE SERVICES</span>
          <h2 className="section-heading">Care for comfort, mobility and healthier feet</h2>
          <p className="text-secondary">Choose a service below to learn what we can help with. You can request an appointment directly from any service.</p>
        </div>
        <div className="row g-4">
          {services.map(s=><div className="col-md-6 col-lg-4" key={s.title}>
            <div className="service-card h-100 d-flex flex-column">
              <div className="service-icon"><i className={`bi ${s.icon}`}/></div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              <Link to="/appointment" className="small fw-semibold mt-auto">Book for this service →</Link>
            </div>
          </div>)}
        </div>
      </div>
    </section>
  </>;
}
