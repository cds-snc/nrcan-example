import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/data">
          Data
        </NavLink>
        <NavLink activeClassName="active" to="/test2">
          Test 2
        </NavLink>
        <NavLink to="/test3">Test 3</NavLink>
      </nav>
    )
  }
}

export default withRouter(Navigation)
