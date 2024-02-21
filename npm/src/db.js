const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const portscanner = require('portscanner');



 

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
        const ip = ipv4Address;
        const lastOctet = ip.split('.').pop();
        console.log('Last Octet:', lastOctet);
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('test.db'); 
        const selectQuery = `SELECT generic FROM conf WHERE key='key';`;
        db.all(selectQuery, (err, rows) => {
        db.close((err) => {
          if (err) {
          console.error('Error closing the database connection:', err.message);
          reject(err);
          } else {
            console.log(rows[0].generic);
            const typeDefs = gql`
            type Message{
              country: String
              message: String  
            }
            type Query{
              test: String
                message: [Message]!
                save: String
              }
              type Mutation {
                save(sender: String!, content: String): String!
              }
              `;
              const sqlite3 = require('sqlite3').verbose();
              const db = new sqlite3.Database('test.db'); 
              const selectQuery = `DROP TABLE IF EXISTS chat`;
              db.all(selectQuery, (err, rows) => {}); 
              const selectQuer = ` CREATE TABLE chat (country String, message String);`;
              db.all(selectQuer, (err, rows) => {
              db.close((err) => {
              if (err) {console.error('Error closing the database connection:', err.message);
                        reject(err);
              };})}); 
              const resolvers = { Query: { 
                  test: () => "hello",
                  message: ()=>{
                    const db = new sqlite3.Database('test.db'); 
                    const selectQuery = `SELECT country, message FROM chat;`;
                    db.all(selectQuery, (err, rows) => {
                      console.log(rows);
                      return rows
                    }); 
                },
              },
                Mutation:{
                  save:async (_, {sender, content})=>{
                  const db = new sqlite3.Database('test.db'); 
                  const insertQuery = `INSERT INTO chat (country, message) VALUES (?, ?)`;
                  db.run(insertQuery, [sender, content], function(err) {
                    if (err) {
                      return console.error(err.message);
                    }
                    return "Hello";
                  });
                  db.close(); 
              }} 
              };

              const server = new ApolloServer({ typeDefs, resolvers });
              const app = express();

              async function startServer() {
                await server.start();
                server.applyMiddleware({ app });

                app.listen(5007, () => {
                  console.log(`Server started on port 500 IP: ${ip}`);
                  resolve([{ net: lastOctet, country: rows[0].generic }]);
                });
              }
              portscanner.checkPortStatus(5007, ip, (error, status) => {
                if (status === 'closed') {
                startServer();
                }else {
                  reject('Port 5007 is already in use.');
                }
              });
            }
          });
        });
      } else {
        reject('IPv4 address not found for Ethernet interface.');
      }
    }

    if (withoutEthernet) {
      const ipv4Address = withoutEthernet.find(interfaceInfo => interfaceInfo.family === 'IPv4').address;

      if (ipv4Address) {
        const ip = ipv4Address;
        const lastOctet = ip.split('.').pop();
        console.log('Last Octet:', lastOctet);
        const sqlite3 = require('sqlite3').verbose();
        const db = new sqlite3.Database('test.db'); 
        const selectQuery = `SELECT generic FROM conf WHERE key='key';`;
        db.all(selectQuery, (err, rows) => {
        db.close((err) => {
          if (err) {
          console.error('Error closing the database connection:', err.message);
          reject(err);
          } else {
            console.log(rows[0].generic);
            const typeDefs = gql`
            type Message{
              sender: String
              content: String  
            }
            type Query{
              test: String
                message: [Message]!
                save: String
              }
              type Mutation {
                save(sender: String!, content: String): String!
              }
              `;
              
              const resolvers = { Query: { 
                  test: () => "hello",
                  message: ()=>{
                    const db = new sqlite3.Database('test.db'); 
                    const selectQuery = `SELECT country, message FROM chat;`;
                    db.all(selectQuery, (err, rows) => {
                      console.log(rows);
                      return rows
                    }); 
                },
              },
                Mutation:{
                  save:async (_, {sender, content})=>{
                  const db = new sqlite3.Database('test.db'); 
                  const insertQuery = `INSERT INTO chat (country, message) VALUES (?, ?)`;
                  
                 db.run(insertQuery, [sender, content], function(err) {
                    if (err) {
                      reject(err.message);
                    }
                    resolve("Hello");
                  });
                  db.close(); 
              }} 
              };

              const server = new ApolloServer({ typeDefs, resolvers });
              const app = express();

              async function startServer() {
                await server.start();
                server.applyMiddleware({ app });

                app.listen(5007, () => {
                  console.log(`Server started on port 500 IP: ${ip}`);
                  resolve([{ net: lastOctet, country: rows[0].generic }]);
                });
              }
              portscanner.checkPortStatus(5007, ip, (error, status) => {
                if (status === 'closed') {
                startServer();
                }else {
                  reject('Port 5007 is already in use.');
                }
              });
            }
          });
        });
      } else {
        reject('IPv4 address not found for Ethernet interface.');
      }
    }
  });
}



    
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

async function GetIp(){
  return new Promise((resolve, reject) => {
    const os = require('os');
    const ip = require('ip');
   
    
    const networkInterfaces = os.networkInterfaces();
    const ethernetInterface = networkInterfaces['Ethernet'];
    const withoutEthernet = networkInterfaces['Беспроводная сеть'];

    if (ethernetInterface) {
      const ipv4Address = ethernetInterface.find(interfaceInfo => interfaceInfo.family === 'IPv4').address;

      if (ipv4Address) {
        const ip = ipv4Address;
        const firstThreeOctets = ip.split('.').slice(0, 3).join('.');
        console.log('First Three Octets:', firstThreeOctets);
        resolve(firstThreeOctets);
        } else {
        reject('IPv4 address not found for Ethernet interface.');
      }
    }

    if (withoutEthernet) {
      const ipv4Address = withoutEthernet.find(interfaceInfo => interfaceInfo.family === 'IPv4').address;

      if (ipv4Address) {
        
        const ip = ipv4Address;
        const firstThreeOctets = ip.split('.').slice(0, 3).join('.');
        console.log('First Three Octets:', firstThreeOctets);
        
        resolve(firstThreeOctets);
        }
        
       else {
        reject('IPv4 address not found for Ethernet interface.');
      }
    }
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


module.exports = { GetAll, SetConf, GetRoom, GetIp};  