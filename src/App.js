// import { Routes, Route } from 'react-router-dom'
// import { Link } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react'

// import { Link, Flex } from '@aws-amplify/ui-react'
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Header from './Components/Header'
import Projects from './Components/Projects'

// import {
//   BrowserRouter as Router,
//   // Link as ReactRouterLink,
//   // Routes,
//   // Route,
// } from 'react-router-dom'

// import './App.css'

// import Projects from './Components/Projects'

// function Home() {
//   return <Heading level={2}>Home</Heading>
// }

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
          {/* <Flex>
          <ReactRouterLink to="/Components/Projects" component={Link}>
            Projects
          </ReactRouterLink>
        </Flex> */}
          {/* <Home /> */}
          {/* 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
        </Router>
      </div>
    )
  }
}

export default App
