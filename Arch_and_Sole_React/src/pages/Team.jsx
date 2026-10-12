import PageHero from '../components/PageHero';
import { doctors, staff } from '../data/team';

function PersonCard({ person }) {
  return (
    <article className="staff-card h-100 text-center" data-reveal>
      {person.profileImage ? (
        <img
          className="doctor-team-photo"
          src={person.profileImage}
          alt={person.name}
          loading="lazy"
        />
      ) : (
        <div className="staff-avatar mx-auto"><i className="bi bi-person" /></div>
      )}

      <h4 className="mt-4 mb-2">{person.name}</h4>
      {person.qualification && <p className="mb-1 text-secondary">{person.qualification}</p>}
      {person.role && <p className="team-role mb-0">{person.role}</p>}
    </article>
  );
}

export default function Team() {
  const hasStaffDetails = staff.some(member =>
    member.name && member.name !== 'Staff Name' && (member.profileImage || member.role || member.qualification)
  );

  return (
    <>
      <PageHero
        kicker="OUR TEAM"
        title="Doctors & Staff"
        text="Meet the clinical team behind Arch & Sole."
      />

      <section className="section-space">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {doctors.map((doctor) => (
              <div className="col-md-6 col-lg-4" key={doctor.id}>
                <PersonCard person={doctor} />
              </div>
            ))}
          </div>

          {hasStaffDetails && (
            <div className="row g-4 justify-content-center mt-5">
              {staff.map((member) => (
                <div className="col-md-6 col-lg-4" key={member.id}>
                  <PersonCard person={member} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
