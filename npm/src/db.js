
async function GetAll(id) {
  return new Promise((resolve, reject) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('test.db'); 
    const query = `SELECT * FROM tab WHERE id=${id};`

    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
        return;
      }

      rows.forEach((row) => {
        console.log(`${row.id}: ${row.name} - ${row.type}`);
      });

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


module.exports = { GetAll, SetConf };  