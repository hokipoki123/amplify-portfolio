// import { Routes, Route } from 'react-router-dom'
// import { Link } from '@aws-amplify/ui-react';

// import { Link, Flex } from '@aws-amplify/ui-react'

import {
  BrowserRouter as Router,
  // Link as ReactRouterLink,
  // Routes,
  // Route,
} from 'react-router-dom'

// import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import Nav from './Components/Nav'
// import Projects from './Components/Projects'

// function Home() {
//   return <Heading level={2}>Home</Heading>
// }

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
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

export default App
