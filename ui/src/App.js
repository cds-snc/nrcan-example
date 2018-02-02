import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataPage from './components/DataPage'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={DataPage} />
      </Switch>
    </div>
  </Router>
)

export default App
