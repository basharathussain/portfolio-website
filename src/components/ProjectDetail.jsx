import { useParams, useNavigate } from 'react-router-dom'
import { profile } from '../data/profile'
import aiRecognixImg from '../../images/AI-RecogniX.png'
import desiDhabaImg  from '../../images/desidhabawah.png'
import eztroveImg    from '../../images/EzTrove.png'

const LOCAL_IMAGES = {
  'EzTrove — Cross-Channel Dropshipping Site': eztroveImg,
  'AI-RecogniX':                               aiRecognixImg,
  'Desi Dhaba Restaurant':                     desiDhabaImg,
}

const GRADIENTS = [
  'linear-gradient(135deg,#7c3aed 0%,#4f46e5 100%)',
  'linear-gradient(135deg,#0ea5e9 0%,#6366f1 100%)',
  'linear-gradient(135deg,#10b981 0%,#0ea5e9 100%)',
  'linear-gradient(135deg,#f59e0b 0%,#ef4444 100%)',
  'linear-gradient(135deg,#ec4899 0%,#8b5cf6 100%)',
  'linear-gradient(135deg,#14b8a6 0%,#6366f1 100%)',
]

export default function ProjectDetail() {
  const { index } = useParams()
  const navigate  = useNavigate()
  const p         = profile.projects[Number(index)]

  if (!p) return (
    <div className="pd-wrap">
      <p style={{ color: 'var(--muted)' }}>Project not found.</p>
      <button className="pd-back" onClick={() => navigate(-1)}>← Back</button>
    </div>
  )

  const imgSrc   = p.image || LOCAL_IMAGES[p.name] || null
  const gradient = GRADIENTS[Number(index) % GRADIENTS.length]

  return (
    <div className="pd-wrap">
      {/* Back */}
      <button className="pd-back" onClick={() => navigate(-1)}>← Back to Projects</button>

      {/* Hero */}
      <div className="pd-hero" style={{ background: imgSrc ? '#0d1117' : gradient }}>
        {imgSrc
          ? <img src={imgSrc} alt={p.name} className="pd-hero-img" />
          : <span className="pd-hero-title">{p.name}</span>
        }
      </div>

      {/* Header row */}
      <div className="pd-header">
        <div>
          <h1 className="pd-name">{p.name}</h1>
          <p className="pd-desc">{p.desc}</p>
        </div>
        <div className="pd-header-links">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="pd-btn-source">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Source Code
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="pd-btn-demo">
              🔗 Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="pd-tags">
        {p.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
      </div>

      <div className="pd-body">
        {/* Features */}
        {p.features && p.features.length > 0 && (
          <div className="pd-section">
            <h2 className="pd-section-title">✦ Key Features</h2>
            <ul className="pd-features">
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {/* Architecture */}
        {p.architecture && p.architecture.length > 0 && (
          <div className="pd-section">
            <h2 className="pd-section-title">⬡ Architecture</h2>
            <div className="pd-arch">
              {p.architecture.map((a, i) => (
                <div key={i} className="pd-arch-row">
                  <span className="pd-arch-layer">{a.layer}</span>
                  <span className="pd-arch-detail">{a.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {p.screenshots && p.screenshots.length > 0 && (
          <div className="pd-section">
            <h2 className="pd-section-title">◻ Screenshots</h2>
            <div className="pd-screenshots">
              {p.screenshots.map((s, i) => (
                <img key={i} src={s} alt={`${p.name} screenshot ${i + 1}`} className="pd-screenshot" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
