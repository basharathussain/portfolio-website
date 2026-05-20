import { profile } from '../data/profile'

const GRADIENTS = [
  'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)',
  'linear-gradient(135deg,#0ea5e9 0%,#6366f1 100%)',
  'linear-gradient(135deg,#10b981 0%,#0ea5e9 100%)',
  'linear-gradient(135deg,#f59e0b 0%,#ef4444 100%)',
  'linear-gradient(135deg,#ec4899 0%,#8b5cf6 100%)',
  'linear-gradient(135deg,#14b8a6 0%,#6366f1 100%)',
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {profile.projects.map((p, i) => (
          <div key={i} className="project-card">
            <div
              className="project-thumb"
              style={{ background: p.image ? undefined : GRADIENTS[i % GRADIENTS.length] }}
            >
              {p.image
                ? <img src={p.image} alt={p.name} />
                : <span className="project-thumb-label">{p.name}</span>
              }
            </div>
            <div className="project-body">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <div className="project-actions">
                {p.github
                  ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-source">
                      <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                      </svg>
                      Source code
                    </a>
                  : <span className="btn-source btn-source--disabled">Source code</span>
                }
                {p.demo
                  ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn-demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Preview
                    </a>
                  : <span className="btn-demo btn-demo--disabled">Preview</span>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
