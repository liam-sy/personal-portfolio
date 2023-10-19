const Pool = require("pg").Pool;
// const { Client } = require("pg")

const pool = new Pool({
    user: "postgres",
    password: "password1",
    host: "52.180.137.237",
    port: 5432,
    database: "persport_db"
});

// const client = new Client({
//     user: "postgres",
//     password: "password1",
//     host: "52.180.137.237",
//     port: 5432,
//     database: "persport_db"
// });

// client.connect();

// client.query(`SELECT * FROM test_db`, (err, res) => {
//     if(!err){
//         console.log(res.rows + "sucsess");
//     } else {
//         console.log(err.message + "failure");
//     }
//     client.end;
// })


module.exports = pool;