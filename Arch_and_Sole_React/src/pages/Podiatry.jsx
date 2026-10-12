import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

const commonConcerns = [
  'Heel, arch and general foot pain',
  'Corns, calluses and pressure areas',
  'Ingrown or painful toenails',
  'Diabetic foot-health concerns',
  'Flat feet and alignment concerns',
  'Walking or gait difficulties',
  'Footwear-related discomfort',
  'Sports and overuse-related foot concerns'
];

export default function Podiatry(){
  return <>
    <PageHero
      kicker="PODIATRY"
      title="What is podiatry?"
      text="Podiatry is the branch of healthcare focused on the assessment, prevention and management of conditions affecting the feet, ankles and the way we walk."
    />

    <section className="section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-kicker">UNDERSTANDING PODIATRY</span>
            <h2 className="section-heading">Your feet affect how your whole body moves</h2>
            <p>Podiatrists focus on foot and ankle health, including skin and nail concerns, pain, pressure problems, biomechanics and gait. A podiatry assessment can help identify what may be causing discomfort and what type of care or support may be appropriate.</p>
            <p>Podiatry is not only for people who already have pain. Preventive care can also be useful for people with diabetes, recurring nail or skin problems, active lifestyles, footwear concerns or changes in the way they walk.</p>
            <Link to="/services" className="btn btn-brand rounded-pill px-4 mt-2">View Our Services</Link>
          </div>
          <div className="col-lg-6">
            <div className="info-panel">
              <div className="info-icon"><i className="bi bi-person-walking"/></div>
              <h3>What does a podiatrist look at?</h3>
              <p className="mb-0">Your symptoms, foot shape, skin and nails, footwear, pressure areas, movement, walking pattern and relevant medical history may all be considered during an assessment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space bg-soft">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <span className="section-kicker">COMMON REASONS TO VISIT</span>
            <h2 className="section-heading">When podiatry may help</h2>
            <p className="text-secondary">You may consider a podiatry appointment when a foot problem is painful, keeps returning, changes the way you walk, or makes everyday activity difficult.</p>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              {commonConcerns.map(x=><div className="col-md-6" key={x}><div className="podiatry-list-item"><i className="bi bi-check-circle-fill"/><span>{x}</span></div></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="container">
        <div className="text-center section-intro mx-auto mb-5">
          <span className="section-kicker">YOUR VISIT</span>
          <h2 className="section-heading">What to expect at a podiatry appointment</h2>
        </div>
        <div className="row g-4">
          {[
            ['1','Discussion','We start by understanding your symptoms, daily activities, footwear, health history and what you would like help with.'],
            ['2','Assessment','Your feet, pressure areas, movement and walking pattern may be assessed depending on your concern.'],
            ['3','Care Plan','We explain the findings and discuss suitable treatment, footwear advice, exercises, orthotic support or follow-up care when appropriate.']
          ].map(([n,t,d])=><div className="col-lg-4" key={n}><div className="step-card h-100"><span className="step-number">{n}</span><h4>{t}</h4><p className="mb-0">{d}</p></div></div>)}
        </div>
        <div className="text-center mt-5"><Link to="/appointment" className="btn btn-brand rounded-pill px-4">Book a Podiatry Consultation</Link></div>
      </div>
    </section>
  </>;
}
