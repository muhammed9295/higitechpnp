const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const req = require("express/lib/request");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

// Bird Eye View routes
// Attendence Overview - Today
app.get("/api/attendence-overview", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM staff_attendence WHERE DATE(time_stamp)= CURDATE()",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Morning - Today
app.get("/api/attendence-overview-morning", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM morning_attendence WHERE DATE(time_stamp)= CURDATE()",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Evening - Today
app.get("/api/attendence-overview-evening", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM evening_attendence WHERE DATE(time_stamp)= CURDATE()",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Morning - Yesterday
app.get("/api/attendence-morning-yesterday", (req, res, next) => {
  db.query(
    "SELECT * FROM morning_attendence WHERE DATE(time_stamp)= CURDATE() - 1",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Evening - Yesterday
app.get("/api/attendence-evening-yesterday", (req, res, next) => {
  db.query(
    "SELECT * FROM evening_attendence WHERE DATE(time_stamp)= CURDATE() - 1",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Morning - This month
app.get("/api/attendence-morning-thismonth", (req, res, next) => {
  db.query(
    "SELECT * FROM morning_attendence WHERE YEAR(time_stamp)= YEAR(CURRENT_DATE()) AND MONTH(time_stamp) = MONTH(CURRENT_DATE())",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Evening - This month
app.get("/api/attendence-evening-thismonth", (req, res, next) => {
  db.query(
    "SELECT * FROM evening_attendence WHERE YEAR(time_stamp)= YEAR(CURRENT_DATE()) AND MONTH(time_stamp) = MONTH(CURRENT_DATE())",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Morning - Last month
app.get("/api/attendence-morning-lastmonth", (req, res, next) => {
  db.query(
    "SELECT * FROM morning_attendence WHERE YEAR(time_stamp)= YEAR(CURRENT_DATE() - INTERVAL 1 MONTH) AND MONTH(time_stamp) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH)",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Evening- Last month
app.get("/api/attendence-evening-lastmonth", (req, res, next) => {
  db.query(
    "SELECT * FROM evening_attendence WHERE YEAR(time_stamp)= YEAR(CURRENT_DATE() - INTERVAL 1 MONTH) AND MONTH(time_stamp) = MONTH(CURRENT_DATE() - INTERVAL 1 MONTH)",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Morning - All
app.get("/api/attendence-morning-all", (req, res, next) => {
  db.query(
    "SELECT * FROM morning_attendence",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Attendence Overview Evening - All
app.get("/api/attendence-evening-all", (req, res, next) => {
  db.query(
    "SELECT * FROM evening_attendence",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
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
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

// Update morning shifts
app.put("/api/update-morning", (req, res, next) => {
  const name = req.body.name;
  const shift = "Morning";
  db.query(
    "UPDATE staffs_information SET shift = ? WHERE name = ?",
    [shift, name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Shifted to Morning");
      }
    }
  );
});

// Update evening shifts
app.put("/api/update-evening", (req, res, next) => {
  const name = req.body.name;
  const shift = "Evening";
  db.query(
    "UPDATE staffs_information SET shift = ? WHERE name = ?",
    [shift, name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Shifted to Evening");
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
  //   // res.write("already submitted");
  // }

  // if (attendanceData) {
  // db.query(
  //   "SELECT id FROM higitech_pnp.staff_attendence WHERE date=?",
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
  //       }
  //     }
  //   );
  // }
});

// Post daily attendence - morning
app.post("/api/attendance-morning", (req, res, next) => {
  let items = !req.body ? [] : req.body;
  let attendanceData = null;
  if (items && items.length && items.length > 0) {
    attendanceData = items[0].date;
    // res.write("Already submitted");
  }

  if (attendanceData) {
    db.query(
      "SELECT id FROM higitech_pnp.morning_attendence WHERE date=?",
      [attendanceData],
      (err, result) => {
        if (result && result.length == 0) {
          db.query(
            "INSERT INTO morning_attendence (id, name, designation, project, date, status, shift) VALUES ?",
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
                res.send("Success");
              }
            }
          );
        }
      }
    );
  }
});

// Post daily attendence - evening
app.post("/api/attendance-evening", (req, res) => {
  let items = !req.body ? [] : req.body;

  let attendanceData1 = null;
  if (items && items.length && items.length > 0) {
    attendanceData1 = items[0].date;
    // res.write("Already submitted");
  }

  if (attendanceData1) {
    db.query(
      "SELECT id FROM higitech_pnp.evening_attendence WHERE date=?",
      [attendanceData1],
      (err, result) => {
        if (result && result.length == 0) {
          db.query(
            "INSERT INTO evening_attendence (id, name, designation, project, date, status, shift) VALUES ?",
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
                res.send("Success");
              }
            }
          );
        }
      }
    );
  }
});

// Get daily attendence - Morning & Evening
app.get("/api/morning-attendence", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM morning_attendence WHERE DATE(time_stamp)= CURDATE()",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

app.get("/api/evening-attendence", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM evening_attendence WHERE DATE(time_stamp)= CURDATE()",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.status;
        });
        res.send(status);
      }
    }
  );
});

// Send email-morning
app.post("/api/mail-morning", cors(), async (req, res) => {
  let d = req.body;
  const state = d.map((data) => data.status);

  let present = state.filter(checkPresent);
  function checkPresent(v) {
    return v == "present";
  }

  let absent = state.filter(checkAbsent);
  function checkAbsent(v) {
    return v == "absent";
  }

  let sick = state.filter(checkSick);
  function checkSick(v) {
    return v == "sick";
  }

  let dayoff = state.filter(checkDayoff);
  function checkDayoff(v) {
    return v == "dayoff";
  }

  let leave = state.filter(checkLeave);
  function checkLeave(v) {
    return v == "leave";
  }

  let ph = state.filter(checkPh);
  function checkPh(v) {
    return v == "ph";
  }

  let po = state.filter(checkPo);
  function checkPo(v) {
    return v == "po";
  }
  const current = new Date();
  const yesterday = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    // to: "shahzad@higitech-me.com,farhan.nasir@higitech-me.com,operationsss@higitech-me.com,abdul.wahab@higitech-me.com,muhammed@higitech.me",
    to: "muhammed@higitech.me,abdul.wahab@higitech-me.com",
    subject: "Attendence Summary",
    html: `<div style="display: flex; align-items: center; justify-content: center">
    <div
      style="
        width: 1000px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
      "
    >
      <div>
        <h3 style="font-family: Verdana, Geneva, Tahoma, sans-serif">
          Attendence Summary as of ${yesterday} - Morning
        </h3>
      </div>
      <div style="width: 80%">
        <table
          style="
            border-collapse: collapse;
            width: 100%;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          <tr>
            <th
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Status
            </th>
            <th
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Count
            </th>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Present
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${present.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Absent
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${absent.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Sick
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${sick.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Dayoff
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${dayoff.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Leave
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${leave.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              PH
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${ph.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              PO
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${po.length}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>`,
  });
});

// Send email-evening
app.post("/api/mail-evening", cors(), async (req, res) => {
  let d = req.body;
  const state = d.map((data) => data.status);

  let present = state.filter(checkPresent);
  function checkPresent(v) {
    return v == "present";
  }

  let absent = state.filter(checkAbsent);
  function checkAbsent(v) {
    return v == "absent";
  }

  let sick = state.filter(checkSick);
  function checkSick(v) {
    return v == "sick";
  }

  let dayoff = state.filter(checkDayoff);
  function checkDayoff(v) {
    return v == "dayoff";
  }

  let leave = state.filter(checkLeave);
  function checkLeave(v) {
    return v == "leave";
  }

  let ph = state.filter(checkPh);
  function checkPh(v) {
    return v == "ph";
  }

  let po = state.filter(checkPo);
  function checkPo(v) {
    return v == "po";
  }
  const current = new Date();
  const yesterday = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    // to: "shahzad@higitech-me.com,farhan.nasir@higitech-me.com,operationsss@higitech-me.com,abdul.wahab@higitech-me.com,muhammed@higitech.me",
    to: "muhammed@higitech.me,abdul.wahab@higitech-me.com",
    subject: "Attendence Summary",
    html: `<div style="display: flex; align-items: center; justify-content: center">
    <div
      style="
        width: 1000px;
        height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
      "
    >
      <div>
        <h3 style="font-family: Verdana, Geneva, Tahoma, sans-serif">
          Attendence Summary as of ${yesterday} - Evening
        </h3>
      </div>
      <div style="width: 80%">
        <table
          style="
            border-collapse: collapse;
            width: 100%;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
          "
        >
          <tr>
            <th
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Status
            </th>
            <th
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Count
            </th>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Present
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${present.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Absent
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${absent.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Sick
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${sick.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Dayoff
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${dayoff.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              Leave
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${leave.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              PH
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${ph.length}
            </td>
          </tr>
          <tr>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              PO
            </td>
            <td
              style="
                border: 1px solid #aaaaaa;
                text-align: center;
                padding: 8px;
              "
            >
              ${po.length}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>`,
  });
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

// Get projectwise attendence details
app.get("/api/attendence-morning-projectwise", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM morning_attendence WHERE DATE(time_stamp)= CURDATE() AND status='present'",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.project;
        });
        res.send(status);
      }
    }
  );
});

app.get("/api/attendence-evening-projectwise", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM evening_attendence WHERE DATE(time_stamp)= CURDATE() AND status='present'",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.project;
        });
        res.send(status);
      }
    }
  );
});

// PROJECTWISE ATTENDENCE DETAILS -TEST
app.get("/api/attendence-all-projectwise", (req, res) => {
  const current = new Date();
  const today = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  db.query(
    "SELECT * FROM morning_attendence WHERE DATE(time_stamp)= CURDATE() AND status='present' UNION ALL SELECT * FROM evening_attendence WHERE DATE(time_stamp)= CURDATE() AND status='present'",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let status = result.map(function (i) {
          return i.project;
        });
        res.send(status);
      }
    }
  );
});

// User profile information
app.get("/api/user-profile/:id", async (req, res) => {
  const id = req.params.id;
  await db.query(
    "SELECT * FROM staffs_information WHERE id = ?",
    [id],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// User project details
app.get("/api/user-projects", (req, res) => {
  db.query(
    "SELECT * FROM staffs_information WHERE id ='NH0065'",
    // [today],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
