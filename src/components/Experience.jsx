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

              {e.concurrent && e.concurrent.length > 0 && (
                <div className="concurrent-roles">
                  <div className="concurrent-label">Concurrent roles</div>
                  {e.concurrent.map((c, k) => (
                    <div key={k} className="concurrent-card">
                      <div className="concurrent-header">
                        <span className="concurrent-role">{c.role}</span>
                        <span className="timeline-period">{c.period}</span>
                      </div>
                      <div className="timeline-company">{c.company}</div>
                      <p className="concurrent-desc">{c.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
