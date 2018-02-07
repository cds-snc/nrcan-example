import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Data from './Data'

const DataPage = props => {
  return (
    <div>
      <Data clientUID={props.UID} clientPCODE={props.PCODE} />
    </div>
  )
}

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
export default graphql(clientDataQuery, {
  props: ({ data: { clientUID, clientPCODE } }) => ({
    UID: clientUID.UID,
    PCODE: clientPCODE.PCODE,
  }),
})(DataPage)
