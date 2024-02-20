const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

async function GetRoom() {
  return new Promise((resolve, reject) => {
    const os = require('os');
    const ip = require('ip');

    const networkInterfaces = os.networkInterfaces();
    const ethernetInterface = networkInterfaces['Ethernet'];
    const withoutEthernet = networkInterfaces['Беспроводная сеть'];

    if (ethernetInterface) {
      const ipv4Address = ethernetInterface.find(interfaceInfo => interfaceInfo.family === 'IPv4').address;

      if (ipv4Address) {
        console.log('Ethernet IPv4 Address:', ipv4Address);
        const ip = ipv4Address;
        const lastOctet = ip.split('.').pop();
        console.log('Last Octet:', lastOctet);
        
        resolve([{ net: ip, country: 'gem' }]); 
      } else {
        reject('IPv4 address not found for Ethernet interface.');
      }
    }

    if (withoutEthernet) {
      const ipv4Address = withoutEthernet.find(interfaceInfo => interfaceInfo.family === 'IPv4').address;

      if (ipv4Address) {
        console.log('Wireless IPv4 Address:', ipv4Address);
        const ip = ipv4Address;
        const lastOctet = ip.split('.').pop();
        console.log('Last Octet:', lastOctet);
        resolve({ net: ip, country: 'gem' });
      } else {
        reject('IPv4 address not found for wireless interface.');
      }
    }
    
    
  });
}

//const selectQuery = `SELECT * FROM conf WHERE key='key';`;
   /* db.all(selectQuery, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      db.close((err) => {
        if (err) {
          console.error('Error closing the database connection:', err.message);
        }
      });
      resolve(rows);});*/
    /*  const typeDefs = gql`type Query{}`;
const resolvers = { Query: {} };

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(5500, () => console.log('Server started on port 500'));
}
startServer();  */ 
async function GetAll() {
  return new Promise((resolve, reject) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('test.db'); 
    const selectQuery = `SELECT * FROM conf WHERE key='key';`;

    db.all(selectQuery, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      db.close((err) => {
        if (err) {
          console.error('Error closing the database connection:', err.message);
        }
      });
      resolve(rows);
    });
  });
}
async function SetConf(generic,local) {
  return new Promise((resolve, reject) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('test.db'); 
    const query = `UPDATE conf SET generic = '${generic}', local = '${local}' WHERE key = 'key';`;
    

    db.run(query, (err) => {
      if (err) {
        reject(err);
        return;
      }
    const selectQuery = `SELECT * FROM conf WHERE key='key';`;

    db.all(selectQuery, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

     

      db.close((err) => {
        if (err) {
          console.error('Error closing the database connection:', err.message);
        }
      });

      
      resolve(rows);
    });
  });
})}


module.exports = { GetAll, SetConf, GetRoom};  