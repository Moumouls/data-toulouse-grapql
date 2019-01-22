import GraphQLServer from 'graphql-yoga';
import typeDefs from './typesMerger';
import resolvers from './resolversMerger';

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on localhost:4000'));