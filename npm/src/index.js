const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
host = 'localhost';
const {GetAll, SetConf} = require('../src/db');

const typeDefs = gql`
type Tablets{
  id: Int
  name: String
  type: String
}
type Configuration{
  key: String
  value: Int
}
type Query{
  get(id: Int): [Tablets]
  take(value: Int): [Configuration]
}
`;

const resolvers = {
  Query: {
    get: async (_,{id}) => {
        const result = await GetAll(id);
        console.log(result);
        return result;

    },
    take: async (_,{value}) => {
      const result = await SetConf(value);
      console.log(result);
      return result;
}}}
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/api'  });
  //server.applyMiddleware({ app});
  app.listen(5000, host, () => console.log('Server started on port 5500'));
}

startServer();





