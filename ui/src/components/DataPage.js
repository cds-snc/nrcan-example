import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Data from './Data'

const DataPage = ({ data: { clientData } }) => {
  return (
    <div>
      {/*}<Data clientUID={clientData.UID} clientPCODE={clientData.PCODE} />*/}
      <Data UID={clientData.UID} />
    </div>
  )
}

const clientDataQuery = gql`
  query clientDataQuery {
    clientData @client {
      UID
      PCODE
    }
  }
`
export default graphql(clientDataQuery)(DataPage)
