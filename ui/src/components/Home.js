import React from 'react'
import Form from './Form'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    console.log(props)
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
    console.log('UID: ', this.props.UID)
    console.log('PCODE: ', this.props.PCODE)
  }

  render() {
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        onChange={this.handleFormChange}
        uidValue={this.props.UID}
        pcodeValue={this.props.PCODE}
      />
    )
  }
}

Home.propTypes = {
  PCODE: PropTypes.string,
  UID: PropTypes.string,
  submitClientUID: PropTypes.func,
  submitClientPCODE: PropTypes.func,
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
  graphql(clientDataQuery, {
    props: ({ data: { clientUID, clientPCODE } }) => ({
      UID: clientUID.UID,
      PCODE: clientPCODE.PCODE,
    }),
  }),
)(Home)
