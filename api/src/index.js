import { MongoClient } from 'mongodb'
import Server from './server'

const url = 'mongodb://localhost:27017'

MongoClient.connect(url)
  .then(async client => {
    const db = client.db('nrcan_example')
    const collection = db.collection('buildings')
    const server = new Server({
      client: collection,
    })
    server.listen(3001)
  })
  .catch(console.log)
