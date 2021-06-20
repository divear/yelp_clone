const { Pool } = require('pg')
const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}