const Pool = require("pg").Pool;
// const { Client } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "password1",
    host: "52.180.137.237",
    port: 5432,
    database: "persport_db"
});

module.exports = pool;