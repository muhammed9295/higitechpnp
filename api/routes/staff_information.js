const express = require('express');
const router = express.Router();
const mysql = require('mysql');


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'hybrid2'
  })

  
router.post('/', (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const designation = req.body.designation;
    const department = req.body.department;
    const gender = req.body.gender;
    const nationality = req.body.nationality;
    const project = req.body.project;
    const doj = req.body.doj;
    const dob = req.body.dob;

    db.query('INSERT INTO staff_information (id, name, designation, department, gender, nationality, project, doj, dob) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, name, designation, department, gender, nationality, project, doj, dob], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    })
})