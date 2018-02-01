import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Data = props => {
  const { evaluationData: { evaluationsFor } } = props

  if (!evaluationsFor) {
    return null
  }

  return (
    <div>
      <h2>Data</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Year Built</h3>
            </td>
            <td>
              <h3>Energuide rating</h3>
            </td>
          </tr>
          <tr>
            <td>{evaluationsFor.yearBuilt}</td>
            <td>{evaluationsFor.eghrating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const EvaluationQuery = gql`
  query EvaluationQuery($clientUID: Int!, $clientPCODE: PostalCode!) {
    evaluationsFor(account: $clientUID, postalCode: $clientPCODE) {
      yearBuilt
      eghrating
    }
  }
`

export default graphql(EvaluationQuery, { name: 'evaluationData' })(Data)
