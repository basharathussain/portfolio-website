import { profile } from '../data/profile'

export default function Education() {
  return (
    <>
      <section className="section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {profile.education.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-year">{e.year}</div>
              <div className="edu-body">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                {e.thesis && <div className="edu-thesis">Thesis: {e.thesis}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list">
          {profile.certifications.map((c, i) => (
            <div key={i} className="cert-row">
              <div className="cert-name">{c.name}</div>
              <div className="cert-meta">
                <span className="cert-issuer">{c.issuer}</span>
                {c.year && <span className="cert-year">{c.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
