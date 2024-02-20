const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
host = 'localhost';
const {SetConf, GetAll, GetRoom} = require('../src/db');

const cors = require('cors');


const corsOptions = {
  origin: 'http://192.168.103.47:8100', // ІР додатку
  credentials: true,
  optionSuccessStatus: 200
}

const typeDefs = gql`

type Configuration{
  key: String
  generic: String
  local: String
}
type Room{
  net: String
  country: String
}
type Query{
  take(generic: String, local: String): [Configuration]
  get: [Configuration]!
  room: [Room]!
}
`;
const resolvers = {
  Query: {
    take: async (_, { generic, local }) => {
    const result = await SetConf(generic, local);
    console.log(result);
    return result;
  },
  get: async ()=>{
    const result = GetAll();
    console.log(result);
    return result;
  },
  room: async () =>{
    const result =await GetRoom();
    console.log(result);
    return result;
  }
}}

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http:/192.168.103.47:8100"); // IP додатку
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
  app.listen(5000,'192.168.103.47', () => console.log('Server started on port 5000'));
}

startServer();





