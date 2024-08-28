import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql2 from "mysql2";
import multer from "multer";
import fs from "fs";
//import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.json());
//mongoose.connect("mongodb://127.0.0.1/CodemapcomunityTesting");

/*const conn = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "AritraCoder@2003",
  database: "codemapcommunity",
  port: 3306, //3001
});
*/
app.get("/", (req, res) => {
  const myobj = {
    name: "Aritra",
    age: 21,
    college: "IIMT",
  };
  res.send(myobj);
});

/*
app.patch("/user/update", (req, res) => {
  const email = req.body.email;
  const college = req.body.college;
  const sql = `UPDATE user SET college='${college}' WHERE email='${email}'`;
  conn.query(sql, (err, data) => {
    if (err) console.log(err);
    else return res.status(200).send({ status: 200 });
  });
});

app.delete("/user/delete/:id", (req, res) => {
  const email = req.query.email;
  const sql = `DELETE FROM user WHERE email='${email}'`;
  conn.query(sql, (err, data) => {
    if (err) console.log(err);
    else return res.status(200).send({ status: 200 });
  });
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const college = req.body.college;

  const sql = "INSERT INTO user (name,email,college,password) VALUES(?,?,?,?);";
  conn.query(sql, [name, email, password, college], (err, data) => {
    if (err) console.log(err);
    else {
      return res.status(200).send({ status: 200 });
    }
  });
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user;";
  conn.query(sql, (err, data) => {
    if (err) console.log(err);
    return res.json(data);
  });
});

/*app.get("/user", (req, res) => {
  users
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
});*/
/*
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/fileUpload", upload.single("file"), (req, res) => {
  const filename = req.file.filename;
  const type = req.body.doc;
  const sql = "INSERT INTO document (title,image) VALUES(?,?);";
  conn.query(sql, [type, filename], (err, data) => {
    if (err) console.log(err);
    else {
      return res.status(200).send({ status: 200 });
    }
  });
});
app.get("/fileUpload", (req, res) => {
  const sql = "SELECT * FROM document;";
  conn.query(sql, (err, data) => {
    if (err) console.log(err);
    return res.json(data);
  });
});
*/

app.listen(8000, () => {
  console.log("Backend Connected");
});
