export const defaults = {
  clientUID: {
    __typename: 'ClientUID',
    UID: '',
  },
  clientPCODE: {
    __typename: 'ClientPCODE',
    PCODE: '',
  },
}

export const resolvers = {
  Mutation: {
    setClientUID: (_, { UID }, { cache }) => {
      cache.writeData({
        data: {
          clientUID: {
            __typename: 'ClientUID',
            UID: UID,
          },
        },
      })
      return null
    },
    setClientPCODE: (_, { PCODE }, { cache }) => {
      cache.writeData({
        data: {
          clientPCODE: {
            __typename: 'ClientPCODE',
            PCODE: PCODE,
          },
        },
      })
      return null
    },
  },
}
