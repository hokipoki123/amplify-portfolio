// import { Routes, Route } from 'react-router-dom'
// import { Link } from '@aws-amplify/ui-react';

import { Link, Flex, Heading } from '@aws-amplify/ui-react'

import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
} from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
// import home from './home'

function Home() {
  return <Heading level={2}>Home</Heading>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reeeeeeeload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Flex>
            <ReactRouterLink to="/" component={Link}>
              Home
            </ReactRouterLink>
          </Flex>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
