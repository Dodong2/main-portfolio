import { lazy, Suspense } from 'react'
import './App.css'
import { HashRouter as Router } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home.jsx'))
const Project = lazy(() => import('./pages/Project.jsx'))
const Skill = lazy(() => import('./pages/Skill.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        })
        .catch((error) => {
          console.error('ServiceWorker registration failed: ', error);
        });
    });
  }

  return (
    <>
      <Router>
        <Suspense fallback={
          <div className='pulse-container'>
          <div className="pulse">
          <span style={{ '--i': 0 }}></span>
          <span style={{ '--i': 1 }}></span>
          <span style={{ '--i': 2 }}></span>
          <span style={{ '--i': 3 }}></span>
          </div></div>}>
          <Home />
          <Skill />
          <Project />
          <Contact />
        </Suspense>
      </Router>
    </>
  )
}

export default App
