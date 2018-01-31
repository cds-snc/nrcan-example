export const defaults = {
  clientData: {
    __typename: 'clientData',
    UID: 761266,
    PCODE: 'M8H 1N1',
  },
}

export const resolvers = {
  Mutation: {
    setClientData: (_, { uid, pcode }, { cache }) => {
      cache.writeData({ clientData: { UID: uid, PCODE: pcode } })
    },
  },
}
