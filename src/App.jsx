import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar       from './components/Sidebar'
import About         from './components/About'
import Experience    from './components/Experience'
import Research      from './components/Research'
import Teaching      from './components/Teaching'
import Projects      from './components/Projects'
import Education     from './components/Education'
import ProjectDetail from './components/ProjectDetail'

const TABS = ['Projects', 'About', 'Experience', 'Research', 'Teaching', 'Education']

const TAB_COMPONENTS = {
  About:      <About />,
  Projects:   <Projects />,
  Experience: <Experience />,
  Research:   <Research />,
  Teaching:   <Teaching />,
  Education:  <Education />,
}

function Portfolio() {
  const [active, setActive] = useState('Projects')

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-wrapper">
        <nav className="tab-nav">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`tab-btn${active === tab ? ' tab-btn--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
        <main className="main-content">
          {TAB_COMPONENTS[active]}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:index" element={<ProjectDetail />} />
    </Routes>
  )
}
