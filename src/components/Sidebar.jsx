import { profile } from '../data/profile'
import bashPhoto from '../../images/bash.png'

const ICONS = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  scholar: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/>
    </svg>
  ),
  orcid: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z"/>
    </svg>
  ),
  ieee: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.958 0h.087C18.63.028 24 5.433 24 12.024c0 6.627-5.415 12.02-12.042 12.02C5.372 24.044 0 18.627 0 12S5.373 0 11.958 0zm.066 4.157c-4.384 0-7.95 3.566-7.95 7.95s3.566 7.95 7.95 7.95 7.95-3.566 7.95-7.95-3.566-7.95-7.95-7.95zm-2.75 3.547h1.564v8.707H9.274V7.704zm3.282 0h1.564v8.707h-1.564V7.704z"/>
    </svg>
  ),
  stackoverflow: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852 10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056 9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785 8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z"/>
    </svg>
  ),
}

export default function Sidebar() {
  const { name, title, tagline, location, email, photo, links, resume } = profile

  return (
    <aside className="sidebar">
      <div className="sidebar-avatar">
        <img src={photo || bashPhoto} alt={name} className="avatar-img" />
      </div>

      <h1 className="sidebar-name">{name}</h1>
      <p className="sidebar-title">{title}</p>
      <div className="sidebar-divider" />
      <p className="sidebar-tagline">{tagline}</p>

      <div className="sidebar-contact">
        <div className="contact-row">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{location}</span>
        </div>
        <div className="contact-row">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>

      <div className="sidebar-links">
        {links.map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" title={l.label} className="link-icon">
            {ICONS[l.icon]}
          </a>
        ))}
      </div>

      {resume && (
        <a href={resume} target="_blank" rel="noreferrer" className="btn-resume">
          Download CV
        </a>
      )}
    </aside>
  )
}
