import { profile } from '../data/profile'

export default function Teaching() {
  const t = profile.teaching
  return (
    <section className="section" id="teaching">
      <h2 className="section-title">Teaching</h2>

      <div className="teaching-header">
        <div className="teaching-meta">
          <span className="teaching-role">{t.role}</span>
          <span className="teaching-inst">{t.institution}</span>
          <span className="teaching-since">Since {t.since}</span>
        </div>
        <div className="teaching-feedback">
          <span className="feedback-label">Student Feedback</span>
          <span className="feedback-score">{t.feedback}</span>
        </div>
      </div>

      <h3 className="teaching-sub">Courses</h3>
      <div className="courses-table">
        {t.courses.map((c, i) => (
          <div key={i} className="course-row">
            {c.code && <span className="course-code">{c.code}</span>}
            <span className="course-name">{c.name}</span>
            <span className={`course-level level-${c.level.toLowerCase().replace(' ', '-')}`}>{c.level}</span>
            {c.semester && <span className="course-sem">{c.semester}</span>}
          </div>
        ))}
      </div>

      <h3 className="teaching-sub" style={{ marginTop: '32px' }}>MS Research Supervision</h3>
      <div className="supervision-list">
        {t.research_supervision.map((s, i) => (
          <span key={i} className="supervision-tag">{s}</span>
        ))}
      </div>
    </section>
  )
}
