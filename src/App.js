// import { Routes, Route } from 'react-router-dom'
// import { Link } from '@aws-amplify/ui-react';

// import { Link, Flex } from '@aws-amplify/ui-react'
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Components/Header'
import Nav from './Components/Nav'

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
        <Nav />

        <Router>
          <ul>
            <li>
              <Link to={'/'} className="nav-link">
                {' '}
                Home{' '}
              </Link>
            </li>
            <li>
              <Link to={'/contact'} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={'/about'} className="nav-link">
                About
              </Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
          {/* <Flex>
          <ReactRouterLink to="/Components/Projects" component={Link}>
            Projects
          </ReactRouterLink>
        </Flex> */}
          <Home />
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
