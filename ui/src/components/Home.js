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
      value: '',
    }
  }

  handleFormChange(event) {
    console.log(event.target.value)
  }

  async handleFormSubmit(event) {
    event.preventDefault()

    let { client } = this.props

    let response = await client.query({
      query: gql`
        query evaluationQuery($UID: Int!, $PCode: String!) {
          evaluationsFor(account: $UID, postalCode: $PCode) {
            yearBuilt
          }
        }
      `,
      variables: {
        UID: event.target.elements.UID.value,
        PCode: event.target.elements.PCode.value,
      },
    })

    this.setState({ data: response.data.evaluationsFor })
  }

  handleResetClick() {
    this.state = {
      data: false,
      UID_value: '',
      PCode_value: '',
    }
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
