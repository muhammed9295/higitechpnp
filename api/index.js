const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const req = require("express/lib/request");
const { sign } = require("jsonwebtoken");

// environment instance
dotenv.config({ path: "./.env" });

const port = 3001;
const app = express();

//middle ware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

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

db.connect(function (err) {
  if (err) {
    console.log("Error connecting to DB");
    console.log(err);
    return;
  }
  console.log("Connection established");
});

// add new user
app.post("/api/register", (req, res, next) => {
  const name = req.body.name;
  const position = req.body.position;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  db.query(
    "INSERT INTO user (name, position, email, password, role) VALUES (?, ?, ?, ?, ?)",
    [name, position, email, password, role],
    (err, result) => {
      console.log(err);
      res.send(result);
    }
  );
});

// login
app.post("/api/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          const accessToken = sign({ email: email }, "importantsecret");
          res.json(accessToken);
        } else {
          res.json({ error: "Wrong email / password" });
        }
      }
    }
  );
});

// create staffs
app.post("/api/staffs", (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const designation = req.body.designation;
  const department = req.body.department;
  const gender = req.body.gender;
  const nationality = req.body.nationality;
  const project = req.body.project;
  const doj = req.body.doj;
  const dob = req.body.dob;
  const shift = req.body.shift;

  db.query(
    "INSERT INTO staffs_information (id, name, designation, department, gender, nationality, project, doj, dob, shift) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      id,
      name,
      designation,
      department,
      gender,
      nationality,
      project,
      doj,
      dob,
      shift,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Staff added");
      }
    }
  );
});

// Upload bulk staff information
app.post("/api/staffs-upload", (req, res, next) => {
  let info = !req.body ? [] : req.body;
  db.query(
    "INSERT INTO staffs_information (id, name, designation, department, gender, nationality, project, doj, dob, shift) VALUES ?",
    [
      info.map((item) => [
        item.employeeid,
        item.name,
        item.designation,
        item.department,
        item.gender,
        item.nationality,
        item.projects,
        item.doj,
        item.dob,
        item.shift,
      ]),
    ],
    (err, result) => {
      //   console.log(err);
      //   console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("value inserted");
      }
    }
  );
});

// Fetch staffs information

app.get("/api/staff-details", (req, res, next) => {
  db.query("SELECT * FROM staffs_information", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Fetch morning shifts
app.get("/api/staff-morning", (req, res, next) => {
  db.query(
    "SELECT * FROM staffs_information WHERE shift='Morning'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Fetch evening shifts
app.get("/api/staff-evening", (req, res, next) => {
  db.query(
    "SELECT * FROM staffs_information WHERE shift='Evening'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Post daily attendance
app.post("/api/attendance", (req, res, next) => {
  let items = !req.body ? [] : req.body;
  // let attendanceData = null;
  // if (items && items.length && items.length > 0) {
  //   attendanceData = items[0].date;
  //   res.send("already submitted");
  // }

  // if (attendanceData) {
  // db.query(
  //   "SELECT id FROM higitech_PnP.staff_attendence where date=?",
  //   [attendanceData],
  //   (err, result) => {
  //     if (result && result.length == 0) {
  db.query(
    "INSERT INTO staff_attendence (id, name, designation, project, date, status, shift) VALUES ?",
    [
      items.map((item) => [
        item.id,
        item.name,
        item.designation,
        item.project,
        item.date,
        item.status,
        item.shift,
      ]),
    ],
    (err, result) => {
      //   console.log(err);
      //   console.log(result);
      if (err) {
        console.log(err);
      } else {
        res.send("success");
      }
    }
  );
  //     }
  //   }
  // );
  // }
});

// Post project details
app.post("/api/add-projects", (req, res, next) => {
  const projectnumber = req.body.projectnumber;
  const projectname = req.body.projectname;
  const operationsname = req.body.operationsname;
  const operationsemail = req.body.operationsemail;
  const operationsmob = req.body.operationsmob;
  const salesname = req.body.salesname;
  const authoperops = req.body.authoperops;
  const clientcontactperson = req.body.clientcontactperson;
  const clientcontactemail = req.body.clientcontactemail;
  const clientcontactmob = req.body.clientcontactmob;
  const proposalsd = req.body.proposalsd;
  const proposalcd = req.body.proposalcd;
  const projectit = req.body.projectit;
  const contractsd = req.body.contractsd;
  const contracted = req.body.contracted;
  const contractvalue = req.body.contractvalue;
  const paymentterms = req.body.paymentterms;
  const staffsrequired = req.body.staffsrequired;
  const relievers = req.body.relievers;
  const priceperperson = req.body.priceperperson;
  const ctc = req.body.ctc;
  const projectmaterials = req.body.projectmaterials;
  const monthlymat = req.body.monthlymat;

  console.log(req.body.projectname);

  db.query(
    "INSERT INTO projects_table (projectnumber, projectname, operationsname, operationsemail, operationsmob, salesname, authoperops, clientcontactperson, clientcontactemail, clientcontactmob, proposalsd, proposalcd, projectit, contractsd, contracted, contractvalue, paymentterms, staffsrequired, relievers, priceperperson, ctc, projectmaterials, monthlymat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      projectnumber,
      projectname,
      operationsname,
      operationsemail,
      operationsmob,
      salesname,
      authoperops,
      clientcontactperson,
      clientcontactemail,
      clientcontactmob,
      proposalsd,
      proposalcd,
      projectit,
      contractsd,
      contracted,
      contractvalue,
      paymentterms,
      staffsrequired,
      relievers,
      priceperperson,
      ctc,
      projectmaterials,
      monthlymat,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Project Added");
      }
    }
  );
});

// Get project details
app.get("/api/get-projects", (req, res, next) => {
  db.query("SELECT * FROM projects_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
