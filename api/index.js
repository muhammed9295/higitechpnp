const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const req = require("express/lib/request");

const port = 3001;
const app = express();

//middle ware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//mysql connection

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "hybrid2",

  // user:'root',
  // host:'localhost',
  // password:'password',
  // database:"higitech_PnP"
});

// create staffs
app.post("/staffs", (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const designation = req.body.designation;
  const department = req.body.department;
  const gender = req.body.gender;
  const nationality = req.body.nationality;
  const project = req.body.project;
  const doj = req.body.doj;
  const dob = req.body.dob;

  db.query(
    "INSERT INTO staffs_information (id, name, designation, department, gender, nationality, project, doj, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [id, name, designation, department, gender, nationality, project, doj, dob],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("value inserted");
      }
    }
  );
});

// Upload bulk staff information
app.post("/staffs-upload", (req, res, next) => {
  let info = !req.body ? [] : req.body;
  db.query(
    "INSERT INTO staffs_information (id, name, designation, department, gender, nationality, project, doj, dob) VALUES ?",
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

app.get("/staff-details", (req, res, next) => {
  db.query("SELECT * FROM staffs_information", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Post daily attendance
app.post("/staff-attendance", (req, res, next) => {
  //   console.log("req", req);
  //   console.log("reqbody", req.body);
  //   console.log("res", res);

  // const id = req.body.id;
  // const name = req.body.name;
  // const designation = req.body.designation;
  // const project = req.body.project;
  // const date = req.body.date;
  // const status = req.body.status;

  // console.log(req.body.id);
  let items = !req.body ? [] : req.body;
  let attendanceData = null;
  if (items && items.length && items.length > 0) {
    attendanceData = items[0].date;
  }

  if (attendanceData) {
    db.query(
      "SELECT id FROM hybrid2.staff_attendence where date=?",
      [attendanceData],
      (err, result) => {
        // console.log(err);
        // console.log("result", result);
        if (result && result.length == 0) {
          db.query(
            "INSERT INTO staff_attendence (id, name, designation, project, date, status) VALUES ?",
            [
              items.map((item) => [
                item.id,
                item.name,
                item.designation,
                item.project,
                item.date,
                item.status,
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
        }
        // if (err) {
        //   console.log(err);
        // } else {
        //   res.send("value inserted");
        // }
      }
    );
  }
});

// Post project details
app.post("/add-projects", (req, res, next) => {
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
        res.send("value inserted");
      }
    }
  );
});

// Get project details
app.get("/get-projects", (req, res, next) => {
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
