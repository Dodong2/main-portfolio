import './App.css'
import Home from './pages/Home'
import Skill from './pages/Skill'
import { HashRouter as Router } from 'react-router-dom'
import Project from './pages/Project'
function App() {



  return (
    <>
    <Router>
    <Home/>
    <Skill/>
    <Project/>
    </Router>
    </>
  )
}

export default App
