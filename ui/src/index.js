import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import { defaults, resolvers } from './resolvers'

const cache = new InMemoryCache()

const stateLink = withClientState({ resolvers, cache, defaults })

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    //new HttpLink({ uri: 'http://localhost:3001/graphql' }),
    new HttpLink({ uri: 'http://energuide.cds-snc.ca/graphql' }),
  ]),
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)

registerServiceWorker()
