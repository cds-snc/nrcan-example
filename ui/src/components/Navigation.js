import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </div>
    )
  }
}

export default withRouter(Navigation)
