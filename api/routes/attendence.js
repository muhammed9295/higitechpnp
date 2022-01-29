const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

//mysql connection

const db = mysql.createConnection({
  // user: "root",
  // host: "localhost",
  // password: "password",
  // database: "hybrid2",

  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//middle ware
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.use(cors());

// attendence-overview

router.get("/present", (req, res) => {
  db.query("SELECT * FROM staff_attendence", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let name = result.map(function (i) {
        return i.name;
      });
      res.send(name);
    }
  });
});

module.exports = router;
