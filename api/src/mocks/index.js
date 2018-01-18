import casual from 'casual'
import { MockList } from 'graphql-tools'

export default {
  Query: () => ({
    evaluations: () => new MockList([1, 7]),
  }),

  Evaluation: () => ({
    yearBuilt: () => casual.integer(1900, 2010),
    floorArea: () => {
      return casual.integer(700, 3000) + ' sq ft'
    },
    footprint: () => {
      return casual.integer(0, 300) + ' GJ/Year'
    },
    furnaceType: () => casual.word,
    furnaceFuel: () => casual.word,
    address: () => casual.address1,
    latitude: () => casual.latitude,
    longitude: () => casual.longitude,
  }),
}
