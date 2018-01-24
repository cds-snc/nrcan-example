import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Data from './components/Data'
import Test2 from './components/Test2'
import Navigation from './components/Navigation'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/data" component={Data} />
        <Route path="/test2" component={Test2} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </div>
  </Router>
)

export default App
