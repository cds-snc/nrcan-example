import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'
import Navigation from './components/Navigation'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
)

export default App
