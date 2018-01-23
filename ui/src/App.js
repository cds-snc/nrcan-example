import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'
import Test2 from './components/Test2'
import Navigation from './components/Navigation'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/test2" component={Test2} />
    </div>
  </Router>
)

export default App
