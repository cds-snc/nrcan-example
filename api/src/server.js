import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { schema } from './schema'

function Server(context = {}) {
  const server = express()

  server.use('*', cors({ origin: 'http://localhost:3000' }))

  server.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema,
      context,
    }),
  )

  server.get(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    }),
  )

  return server
}

export default Server
