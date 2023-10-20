const Pool = require("pg").Pool;
// const { Client } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "*****",
    host: "*****",
    port: 5432,
    database: "*****"
});

module.exports = pool;
