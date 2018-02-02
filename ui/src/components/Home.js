import React from 'react'
import Form from './Form'
import gql from 'graphql-tag'

class Home extends React.Component {
  constructor() {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)

    this.state = {
      UID: null,
      PCODE: null,
    }
  }

  handleFormChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  async handleFormSubmit(event) {
    event.preventDefault()

    //fire mutation to store UID & PCODE in local state
  }

  handleResetClick() {
    //this is probably getting removed?
    this.setState({
      UID: null,
      PCODE: null,
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit} onChange={this.handleFormChange} />
    )
  }
}

export default Home
