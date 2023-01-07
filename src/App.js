
import { Button } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';


import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
// import Contact from './Contact'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Footer from './Components/Footer'



import './App.css'
import APIpage from './Components/APipage';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      <div>
        <div className='Header'>
        <Header />
        </div>
        
        <Router>
        <div className="Nav">
          <Link to={'/'} className="nav-link">
            <Button variation="menu">Home </Button>
          </Link>

          <Link to={'/about'} className="nav-link">
            <Button variation="menu">About</Button>
          </Link>

          <Link to={'.../Components/Projects'} className="nav-link">
            <Button variation="menu">Projects</Button>
          </Link>

          <Link to={'.../Components/APIpage'} className="nav-link">
            <Button variation="menu">API's</Button>
          </Link>
          </div>
          
          


        <div className='Body'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path=".../Components/Projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path=".../Components/APIpage" element={<APIpage />} />
          </Routes>
        </div>
        </Router> 
        
        </div>
 
      <div className="html"></div>
      <div className='Footer'>
        <Footer />
      </div>
      </div>
      
    )
  }
}

export default App
