import './App.css'
import Home from './pages/Home'
import Skill from './pages/Skill'
import { HashRouter as Router } from 'react-router-dom'
function App() {



  return (
    <>
    <Router>
    <Home/>
    <Skill/>
    </Router>
    </>
  )
}

export default App
