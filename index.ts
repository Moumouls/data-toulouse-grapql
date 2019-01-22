import { GraphQLServer } from 'graphql-yoga'
import { default as typeDefs } from './src/typeDefs'
import { default as resolvers } from './src/resolvers'

const options = { port: 4004 }

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server
  .start(options, () =>
    console.log(`Server is running ⚡ on localhost:${options.port}`),
  )
  .catch(err => console.error('connection Error', err))
