const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const JWT_SECRET = "Confidanto123";
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/login", (req, res) => {
  const sql = "select * from register where email = ? and password = ?";
  con.query(sql, [req.body.userName, req.body.password], (err, data) => {
    if (err) {
      return res.json("Login Failed");
    } else {
      if (data.length > 0) {
        const sql2 = "select * from additional_details where username = ?";
        con.query(sql2, [req.body.userName], (err, result) => {
          if (result.length > 0) {
            console.log(result);
            return res.json(result);
          }
        });
      } else {
        return res.json("Please Try again");
      }
    }
  });
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO register (username, email, region, usertype, password, verify_status) values (?)";
  const values = [
    req.body.userName,
    req.body.email,
    req.body.region,
    req.body.userType,
    req.body.password,
    0,
  ];
  console.log(values);
  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
});

app.post("/forecasting", (req, res) => {
  const sql = "SELECT * FROM mastersheet where`category`=? and `subcategory`=?";
  con.query(sql, [req.body.category, req.body.subcategory], (err, data) => {
    console.log(req.body);
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/additional_details", (req, res) => {
  const sql =
    "INSERT INTO  additional_details (username, category, sucategory, exp_budget, avg_budget, start_date, end_date, goal) values (?)";
  const values = [
    req.body.email,
    req.body.category,
    req.body.subcategories,
    req.body.expBudget,
    req.body.avgBudget,
    req.body.startDate,
    req.body.endDate,
    req.body.goal,
  ];

  //const userEmail = values[0];
  //console.log(userEmail);
  con.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      //console.log(data.affectedRows);
      if (data.affectedRows > 0) {
        const sql =
          "SELECT * FROM register WHERE email = ?";
        con.query(
          sql,
          [values[0]],
          (err, data) => {
            //console.log(req.body);
            if (err) return res.json(err);
            //return res.json(data);
            let userEmail = data[0].email;
            const token = jwt.sign({ email: userEmail }, "jwt_secret_key", {
              expiresIn: "120s",
            });
            let config = {
              service: "gmail",
              auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
              },
            };
            let transporter = nodemailer.createTransport(config);
            let MailGenerator = new Mailgen({
              theme: "default",
              product: {
                name: "Confidanto",
                link: "https://www.confidanto.com/",
              },
            });
    
            let response = {
              body: {
                name: data[0].username,
                intro: "Welcome to Confidanto",
                action: {
                  instructions: "To confirm your account click on the link below.",
                  button: {
                    color: "green",
                    text: "Confrim Your Account",
                    link: `http://localhost:3000/confirm_account/${userEmail}/${token}`,
                  },
                },
                outro: "Link will be valid for only 15 minutes.",
              },
            };
    
            let mail = MailGenerator.generate(response);
            let message = {
              from: process.env.EMAIL,
              to: userEmail,
              subject: "Confirm Your Confidanto Account",
              html: mail,
            };
            console.log(userEmail);
            transporter
              .sendMail(message)
              .then(() => {
                console.log("email sent...");
                return res.status(201).json({
                  msg: "you should receive an email",
                });
              }).catch((error) => {
                return res.status(500).json({ error });
              });
          }
        );
        //console.log(data.affectedRows);
      }
      return res.json(data);
    }
    //console.log(res.json(data))
    //return res.json(data);
  });
});

app.post("/forgot-password", (req, res) => {
  const sql = "select * from register where email = ? ";
  con.query(sql, [req.body.email], (err, data) => {
    //console.log(req.body);
    const userEmail = req.body.email;
    console.log(data);
    if (err) {
      return res.json("Email Does not Exists");
    } else {
      if (data.length > 0) {
        const token = jwt.sign({ email: userEmail }, "jwt_secret_key", {
          expiresIn: "120s",
        });
        let config = {
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        };
        let transporter = nodemailer.createTransport(config);
        let MailGenerator = new Mailgen({
          theme: "default",
          product: {
            name: "Confidanto",
            link: "https://www.confidanto.com/",
          },
        });

        let response = {
          body: {
            name: data[0].username,
            intro: "Reset your password",
            action: {
              instructions: "To reset your password click on the link below.",
              button: {
                color: "green",
                text: "Reset Password",
                link: `http://localhost:3000/reset_password/${userEmail}/${token}`,
              },
            },
            outro: "Link will be valid for only 15 minutes.",
          },
        };

        let mail = MailGenerator.generate(response);
        let message = {
          from: process.env.EMAIL,
          to: userEmail,
          subject: "Reset your password",
          html: mail,
        };
        console.log(userEmail);
        transporter
          .sendMail(message)
          .then(() => {
            console.log("email sent...");
            return res.status(201).json({
              msg: "you should receive an email",
            });
          })
          .catch((error) => {
            return res.status(500).json({ error });
          });
      } else {
        return res.json("Email does not exist");
      }
    }
  });
});

app.post("/reset-password/:email/:token", (req, res) => {
  const { email, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      const sql = "UPDATE register SET password = ? WHERE email = ?";
      con.query(sql, [req.body.password, email], (err, data) => {
        console.log(req.body);
        if (err) {
          return res.json(err);
        } else {
          if (data.affectedRows > 0) {
            return res.json("Password Updated Successfully...!");
          } else {
            return res.json("Failed to update your password !");
          }
        }
      });
    }
  });
});

app.post("/confirm-account/:email/:token", (req, res) => {
  const { email, token } = req.params;
  const { password } = req.body;

  console.log(req.params);
  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      const isVerified = true;
      const sql = "UPDATE register SET verify_status = ? WHERE email = ?";
      con.query(sql, [isVerified, email], (err, data) => {
        console.log(req.body);
        if (err) {
          return res.json(err);
        } else {
          if (data.affectedRows > 0) {
            return res.json("Account Verified...!");
          } else {
            return res.json("Failed to verify account !");
          }
        }
      });
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
