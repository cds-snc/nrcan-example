import React from 'react'
import Form from './Form'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'

class Home extends React.Component {
  constructor() {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)

    this.state = {
      data: false,
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

    let { client } = this.props

    let response = await client.query({
      query: gql`
        query evaluationQuery($UID: Int!, $PCODE: String!) {
          evaluationsFor(account: $UID, postalCode: $PCODE) {
            yearBuilt
          }
        }
      `,
      variables: {
        UID: this.state.UID,
        PCODE: this.state.PCODE,
      },
    })

    this.setState({ data: response.data.evaluationsFor })
  }

  handleResetClick() {
    this.setState({
      data: false,
      UID: null,
      PCODE: null,
    })
  }

  render() {
    if (!this.state.data)
      return (
        <Form
          onSubmit={this.handleFormSubmit}
          onChange={this.handleFormChange}
        />
      )
    else
      return (
        <div>
          <br />
          <br />
          <div>
            <strong>year built:</strong>
          </div>
          <div className="yearBuilt">{this.state.data.yearBuilt}</div>
          <br />
          <br />
          <button onClick={this.handleResetClick}>Reset data</button>
        </div>
      )
  }
}

export default withApollo(Home)
