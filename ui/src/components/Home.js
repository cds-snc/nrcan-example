import React from 'react'
import Form from './Form'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    name === 'UID'
      ? this.props.submitClientUID(value)
      : this.props.submitClientPCODE(value)
  }

  //this is going to redirect to the data DataPage
  //Validation for form input can also go here before redirect
  async handleFormSubmit(event) {
    event.preventDefault()
    console.log('UID: ', this.props.data.clientUID.UID)
    console.log('PCODE: ', this.props.data.clientPCODE.PCODE)
  }

  render() {
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        onChange={this.handleFormChange}
        uidValue={this.props.data.clientUID.UID}
        pcodeValue={this.props.data.clientPCODE.PCODE}
      />
    )
  }
}

const setClientUID = gql`
  mutation setClientUID($UID: Int!) {
    setClientUID(UID: $UID) @client
  }
`

const setClientPCODE = gql`
  mutation setClientPCODE($PCODE: String!) {
    setClientPCODE(PCODE: $PCODE) @client
  }
`

const clientDataQuery = gql`
  query clientDataQuery {
    clientUID @client {
      UID
    }
    clientPCODE @client {
      PCODE
    }
  }
`

export default compose(
  graphql(setClientPCODE, {
    props: ({ mutate }) => ({
      submitClientPCODE: PCODE => mutate({ variables: { PCODE } }),
    }),
  }),
  graphql(setClientUID, {
    props: ({ mutate }) => ({
      submitClientUID: UID => mutate({ variables: { UID } }),
    }),
  }),
  graphql(clientDataQuery),
)(Home)
