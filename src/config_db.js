
const config = {
   user: 'chuck-norris-admin',
   password: 'P@ssW0rd!',
   server: 'chuck-norris-facts-srv.database.windows.net',
   database: 'chuck-norris-facts-db',

   options: {
       encrypt: true
   }
}
               
const sql = require('mssql')
const sqlConn = sql.ConnectionPool(config).connect();

async const messageHandler = () => {
   await sqlConn; 
   try {
      const request = sqlConn.request();
      const result = request.query('select 1 from facts')
      console.dir(result)
      return result;
   } catch (err) {
       console.error('SQL error', err);
   }
}
