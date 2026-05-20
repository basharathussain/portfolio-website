import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Core Skills</h2>
      <div className="skills-groups">
        {profile.skills.map(({ group, tags }) => (
          <div key={group} className="skill-group">
            <span className="skill-group-label">{group}</span>
            <div className="skill-tags">
              {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
