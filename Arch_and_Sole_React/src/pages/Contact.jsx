import PageHero from '../components/PageHero';

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="CONTACT"
        title="Contact Arch &amp; Sole"
        text="Call, email or visit our Borivali East clinic. Our clinic is open Monday to Saturday, 10:00 AM to 8:00 PM."
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <i className="bi bi-telephone" />
                <h4>Call Us</h4>
                <a href="tel:+919185033020">+91 91850 33020</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <i className="bi bi-envelope" />
                <h4>Email</h4>
                <a className="contact-email" href="mailto:archandsoleclinic@gmail.com">
                  archandsoleclinic@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <i className="bi bi-clock" />
                <h4>Clinic Hours</h4>
                <p className="mb-0">
                  Monday to Saturday<br />
                  10:00 AM – 8:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <i className="bi bi-geo-alt" />
                <h4>Clinic</h4>
                <p className="mb-0">
                  Basement, Unity Scans, Ambrosia Towers, Opp. Sky City Mall, Devipada, Borivali East, Mumbai – 400066
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="map-embed-wrap mt-5">
            <iframe
              title="Arch &amp; Sole Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5456789012346!2d72.85772!3d19.22514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1440f23afc1%3A0xfb3b6f7b3f3f3f3f!2sAmbrosia%20Towers%2C%20Borivali%20East%2C%20Mumbai%2C%20Maharashtra%20400066!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: '20px', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-actions mt-3 d-flex gap-3 align-items-center">
              <a
                href="https://maps.app.goo.gl/FoaFmFpebqRWgdUWA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand rounded-pill px-4"
              >
                <i className="bi bi-map me-2" />
                Open in Google Maps
              </a>
              <a
                href="https://maps.app.goo.gl/FoaFmFpebqRWgdUWA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-brand rounded-pill px-4"
              >
                <i className="bi bi-signpost-2 me-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
