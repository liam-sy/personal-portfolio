const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//v// test insert into test_db table
app.post("/postcontact", cors(), async(req, res) => {
    try {
        
        const datetime = new Date();
        const { firstName, email, type, comment } = req.body;
        console.log(req.body)
        const newTest = await pool.query(
            "INSERT INTO contact_submissions (name, email, enquiry_type, comment, datetime) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
            [firstName, email, type, comment, datetime]
        );

        res.json(newTest.rows[0]);

    } catch (error) {
        console.error(error.message)
    }
})
//^//

//v// get all from test_db
app.get("/getcontactinfo", async(req, res) => {
    try {
        const allTest = await pool.query("SELECT * FROM contact_submissions");
        res.json(allTest.rows);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(port, () => {
    console.log("server is listening at port 5000")
});