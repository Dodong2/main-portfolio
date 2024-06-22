import { lazy, Suspense } from 'react'
import './App.css'
import { HashRouter as Router } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home.jsx'))
const Project = lazy(() => import('./pages/Project.jsx'))
const Skill = lazy(() => import('./pages/Skill.jsx'))
const Contact = lazy (() => import('./pages/Contact.jsx'))

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Home />
          <Skill />
          <Project />
          <Contact/>
        </Suspense>
      </Router>
    </>
  )
}

export default App
