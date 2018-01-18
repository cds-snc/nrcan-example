import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import cors from 'cors'
import { schema } from './schema'

const PORT = 3001

const server = express()

server.use('*', cors({ origin: 'http://localhost:3000' }))

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
  }),
)

server.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
)

server.listen(PORT)
