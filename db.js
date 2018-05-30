const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db'
})

module.exports = connection
