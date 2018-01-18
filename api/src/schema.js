import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'
import mocks from './mocks'

const typeDefs = `
 type Query {
      evaluations: [Evaluation]
    }
    
    type Evaluation {
      yearBuilt: String
      floorArea: String
      footprint: String
      furnaceType: String
      furnaceFuel: String
      address: String
      latitude: String
      longitude: String
    }
  `

const schema = makeExecutableSchema({ typeDefs })

addMockFunctionsToSchema({ 
  schema: schema, 
  mocks: mocks, 

})

export { schema }
