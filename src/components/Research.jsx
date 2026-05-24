import { profile } from '../data/profile'

export default function Research() {
  return (
    <section className="section" id="research">
      <h2 className="section-title">Research &amp; Publications</h2>
      <div className="pubs-list">
        {profile.publications.map((p, i) => (
          <div key={i} className="pub-card">
            <div className="pub-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="pub-body">
              <div className="pub-title">
                {p.url
                  ? <a href={p.url} target="_blank" rel="noreferrer">{p.title}</a>
                  : p.title
                }
              </div>
              <div className="pub-meta">
                <span className="pub-journal">{p.journal}</span>
                <span className="pub-sep">·</span>
                <span className="pub-details">{p.details}</span>
                {p.if_ && (
                  <>
                    <span className="pub-sep">·</span>
                    <span className="pub-if">IF: {p.if_}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
