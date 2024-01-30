const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

app.get('/', (req, res) => {
    return res.json("From backend side");
})

app.post('/forecasting', (req, res) => {
    const sql = "SELECT * FROM mastersheet where`category`=? and `subcategory`=?";
    db.query(sql, [req.body.category, req.body.subcategory], (err, data) => {
        console.log(req.body)
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/dataall', (req, res) => {
    const sql = "SELECT * FROM mastersheet";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

/*app.post('/signup', (req, res) => {
    const sql = "INSERT INTO user_data (user_name, email, password) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err)
        {
            return res.json("Error");
        }
        return res.json(data);
    })
})*/

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM mastersheet WHERE 'category' = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(5000, ()=>{
    console.log("listening");
})