import React from 'react'
import Form from './Form'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'

class Home extends React.Component {
  constructor() {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      data: false,
    }
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

  render() {
    if (!this.state.data) return <Form onSubmit={this.handleFormSubmit} />
    else
      return (
        <div>
          <strong>year built:</strong>
          {this.state.data.yearBuilt}
        </div>
      )
  }
}

export default withApollo(Home)
