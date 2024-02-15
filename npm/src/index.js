const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
host = 'localhost';
const {SetConf} = require('../src/db');
const cors = require('cors');

const corsOptions = {
  origin: 'http://192.168.0.100:8100', // ІР додатку
  credentials: true,
  optionSuccessStatus: 200
}

const typeDefs = gql`
type Tablets{
  id: Int
  name: String
  type: String
}
type Configuration{
  key: String
  value: String
}
type Query{
  get(id: Int): [Tablets]
  take(value: String): [Configuration]
}
`;

const resolvers = {
  Query: {
    
    take: async (_, { value }) => {
    const result = await SetConf(value);
    console.log(result);
    return result;
},}}
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://192.168.0.100:8100"); // IP додатку
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.json());

async function startServer() {
  await server.start();
  //server.applyMiddleware({ app, path: '/api'  });
  server.applyMiddleware({ app});
  app.listen(5000,'0.0.0.0', () => console.log('Server started on port ip5500'));
}

startServer();





