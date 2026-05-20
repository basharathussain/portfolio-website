import { profile } from '../data/profile'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {profile.experience.map((e, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-header">
                <span className="timeline-role">{e.role}</span>
                <span className="timeline-period">{e.period}</span>
              </div>
              <div className="timeline-company">{e.company}</div>
              <ul className="timeline-points">
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
