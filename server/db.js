const Pool = require("pg").Pool;
// const { Client } = require("pg")

const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_database = process.env.DB_DATABASE;

const pool = new Pool({
    user: "postgres",
    password: db_password,
    host: db_host,
    port: 5432,
    database: db_database
});

module.exports = pool;
