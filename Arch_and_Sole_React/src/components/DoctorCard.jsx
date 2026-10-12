import { Link } from 'react-router-dom';
export default function DoctorCard({ doctor }) {
  const id = doctor.id ?? doctor.doctorId;
  const name = doctor.name || `${doctor.firstName || ''} ${doctor.lastName || ''}`.trim() || 'Doctor';
  return <article className="premium-card doctor-card h-100 tilt-card" data-reveal>
    <div className="doctor-photo-wrap">{doctor.profileImage ? <img src={doctor.profileImage} alt={name} loading="lazy"/> : <div className="doctor-fallback"><i className="bi bi-person-badge"/></div>}</div>
    <div className="p-4">
      <div className="d-flex justify-content-between gap-3 align-items-start"><div><span className="mini-label">{doctor.specialty || doctor.specialization || 'Specialist'}</span><h3 className="h4 mt-2 mb-1">{name}</h3><p className="text-secondary mb-2">{doctor.qualification || 'Qualification available on profile'}</p></div>{doctor.rating != null && <span className="rating-pill"><i className="bi bi-star-fill"/> {doctor.rating}</span>}</div>
      <div className="doctor-meta"><span><i className="bi bi-briefcase"/> {doctor.experience ?? '—'}{typeof doctor.experience === 'number' ? '+ yrs' : ''}</span><span><i className="bi bi-geo-alt"/> {doctor.location || doctor.clinic?.city || 'Clinic'}</span></div>
      {doctor.consultationFee != null && <p className="fee mb-3">Consultation <strong>₹{doctor.consultationFee}</strong></p>}
      {doctor.nextAvailableSlot && <p className="availability"><i className="bi bi-clock"/> Next: {doctor.nextAvailableSlot}</p>}
      <div className="d-flex gap-2 flex-wrap mt-3"><Link className="btn btn-outline-brand rounded-pill flex-grow-1" to={`/doctor/${id}`}>View Profile</Link><Link className="btn btn-brand rounded-pill flex-grow-1" to={`/book-appointment/${id}`}>Book Appointment</Link></div>
    </div>
  </article>;
}
