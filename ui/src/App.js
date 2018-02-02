import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import DataPage from './components/DataPage'
import Home from './components/Home'
import './App.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)

export default App
