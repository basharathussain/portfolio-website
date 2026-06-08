import { useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
import aiRecognixImg   from '../../images/AI-RecogniX.png'
import desiDhabaImg    from '../../images/desidhabawah.png'
import eztroveImg      from '../../images/EzTrove.png'
import propertyMaintImg from '../../images/AI-powered-residential-property-maintenance-system.png'

const GRADIENTS = [
  'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)',
  'linear-gradient(135deg,#0ea5e9 0%,#6366f1 100%)',
  'linear-gradient(135deg,#10b981 0%,#0ea5e9 100%)',
  'linear-gradient(135deg,#f59e0b 0%,#ef4444 100%)',
  'linear-gradient(135deg,#ec4899 0%,#8b5cf6 100%)',
  'linear-gradient(135deg,#14b8a6 0%,#6366f1 100%)',
]

const LOCAL_IMAGES = {
  'AI-powered Residential Property Maintenance System': propertyMaintImg,
  'EzTrove — Cross-Channel Dropshipping Site':          eztroveImg,
  'AI-RecogniX':                                        aiRecognixImg,
  'Desi Dhaba Restaurant':                              desiDhabaImg,
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function Projects() {
  const navigate = useNavigate()
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {profile.projects.map((p, i) => {
          const imgSrc = p.image || LOCAL_IMAGES[p.name] || null
          return (
            <div key={i} className="project-card">
              {/* Clickable thumbnail → detail page */}
              <div
                className="project-thumb project-thumb--link"
                style={{ background: imgSrc ? '#0d1117' : GRADIENTS[i % GRADIENTS.length] }}
                onClick={() => navigate(`/project/${i}`)}
              >
                {imgSrc ? <img src={imgSrc} alt={p.name} /> : null}
                <div className="project-thumb-strip">{p.name}</div>
              </div>

              <div className="project-body">
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div className="project-actions">
                  <button className="btn-details" onClick={() => navigate(`/project/${i}`)}>
                    🔍 View Details
                  </button>
                  {p.github
                    ? <a href={p.github} target="_blank" rel="noreferrer" className="btn-source">
                        <GithubIcon /> Source Code
                      </a>
                    : <span className="btn-source btn-source--disabled"><GithubIcon /> Source Code</span>
                  }
                  {p.demo
                    ? <a href={p.demo} target="_blank" rel="noreferrer" className="btn-demo">
                        🔗 Live Demo
                      </a>
                    : <span className="btn-demo btn-demo--disabled">🔗 Live Demo</span>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
