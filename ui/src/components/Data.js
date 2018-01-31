import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

const Data = props => {
  console.log(props)
  //add some loading stuff here because otherwise no bueno
  //going to try and see if I can grab UID & PCODE from local state
  return (
    <div>
      <h2>Data</h2>
    </div>
  )
}

const EvaluationQuery = gql`
  query EvaluationQuery($UID: Int!) {
    evaluationsFor(account: $UID, postalCode: "M8H 1N1") {
      yearBuilt
    }
  }
`

const clientDataQuery = gql`
  query clientDataQuery {
    clientData @client {
      UID
      PCODE
    }
  }
`

//export default compose(graphql(EvaluationQuery), graphql(clientDataQuery))(Data)
//export default graphql(clientDataQuery)(Data)

//export default graphql(EvaluationQuery, { name: 'EvaluationQuery' })(Data)
export default graphql(EvaluationQuery, {
  options: ({ UID }) => ({ variables: { UID } }),
})(Data)

/*const EvaluationQuery = gql`
  query EvaluationQuery($UID: Int!, $PCODE: PostalCode!) {
    evaluationsFor(account: $UID, postalCode: $PCODE) {
      yearBuilt
    }
  }
`
export default graphql(EvaluationQuery, {
  options: { variables: { UID: 761266, PCODE: 'M8H 1N1' } },
})(Data)*/

//export default graphql(EvaluationQuery, { name: 'EvaluationQuery' })(Data)
