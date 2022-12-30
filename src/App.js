
import { Button } from '@aws-amplify/ui-react'

import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Header from './Components/Header'
import Projects from './Components/Projects'



import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <Link to={'/'} className="nav-link">
            {' '}
            <Button>Home </Button>
          </Link>

          <Link to={'/about'} className="nav-link">
            <Button>About</Button>
          </Link>

          <Link to={'.../Components/Projects'} className="nav-link">
            <Button>Projects</Button>
          </Link>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path=".../Components/Projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <div className="Body">
        body
      </div>
      </div>
      
    )
  }
}

export default App
