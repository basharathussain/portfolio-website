import Sidebar    from './components/Sidebar'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}
