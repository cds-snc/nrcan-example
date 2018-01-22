import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React from 'react'

function DataTable({ data: evaluationsFor }) {
  console.log(evaluationsFor)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Year Built</strong>
            </td>
            <td>
              <strong>Floor Area</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default graphql(gql`
  query {
    evaluationsFor(account: 127937, postalCode: "E1C 5R6") {
      yearBuilt
      floorArea
    }
  }
`)(DataTable)
