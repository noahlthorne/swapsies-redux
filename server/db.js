const Pool = require("pg").Pool

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "swapsies"
})

module.exports = pool