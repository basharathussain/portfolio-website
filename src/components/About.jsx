import { profile } from '../data/profile'
import Skills from './Skills'

export default function About() {
  return (
    <>
      <section className="section" id="summary">
        <h2 className="section-title">About</h2>
        <p className="about-summary">{profile.summary}</p>
      </section>

      <section className="section" id="achievements">
        <h2 className="section-title">Key Achievements</h2>
        <div className="achievements-grid">
          {profile.achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <span className="achievement-icon">{a.icon}</span>
              <div>
                <div className="achievement-title">{a.title}</div>
                <div className="achievement-desc">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Skills />
    </>
  )
}
