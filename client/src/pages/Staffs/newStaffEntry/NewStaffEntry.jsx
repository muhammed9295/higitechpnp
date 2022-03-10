import React, { useState } from "react";
import "./newStaffEntry.css";
import { TextField, Button, Box } from "@mui/material";
import Axios from "axios";
import Test from "../../../components/sidebar/Test";

function NewStaffEntry() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [project, setProject] = useState("");
  const [doj, setDoj] = useState("");
  const [dob, setDob] = useState("");
  const [shift, setShift] = useState("Morning");

  const addStaff = () => {
    Axios.post("http://185.243.76.148:3001/api/staffs", {
      id: id,
      name: name,
      designation: designation,
      department: department,
      gender: gender,
      nationality: nationality,
      project: project,
      doj: doj,
      dob: dob,
      shift: shift,
    })
      .then((response) => {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Test />
        <Box
          component='main'
          className='main1'
          sx={{
            flexGrow: 1,
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(230, 230, 230)",
            height: "100vh",
          }}
        >
          <div className='newStaff-wrapper container-fluid'>
            <div className='row ' style={{ width: "100%" }}>
              <div className='col-lg-4 col-sm-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  label='Staff ID'
                  variant='outlined'
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
              </div>
              <div className='col-lg-8 col-sm-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  label='Name'
                  variant='outlined'
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row ' style={{ width: "100%" }}>
              <div className='col-lg-6 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  label='Designation'
                  variant='outlined'
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
              </div>
              <div className='col-lg-6 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  label='Department'
                  variant='outlined'
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row ' style={{ width: "100%" }}>
              <div className='col-lg-2 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%", marginRight: "10px" }}
                  id='standard-basic'
                  label='Gender'
                  variant='outlined'
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </div>
              <div className='col-lg-2 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%", marginRight: "10px" }}
                  id='standard-basic'
                  label='Nationality'
                  variant='outlined'
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                />
              </div>
              <div className='col-lg-6 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%", marginRight: "10px" }}
                  id='standard-basic'
                  label='Project'
                  variant='outlined'
                  onChange={(e) => {
                    setProject(e.target.value);
                  }}
                />
              </div>
              <div className='col-lg-2 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  label='Shift'
                  variant='outlined'
                  onChange={(e) => {
                    setShift(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  variant='outlined'
                  type='file'
                  size='small'
                  label='Passport'
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className='col-lg-4 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  variant='outlined'
                  type='file'
                  size='small'
                  label='Resume'
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className='col-lg-4 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  variant='outlined'
                  type='file'
                  size='small'
                  label='Visa Copy'
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className='row '>
              <div className='col-lg-4 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  type='date'
                  label='Date of joining'
                  variant='outlined'
                  size='small'
                  onChange={(e) => {
                    setDoj(e.target.value);
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className='col-lg-4 col-sm-6 col-xs-6 my-1'>
                <TextField
                  sx={{ width: "100%" }}
                  id='standard-basic'
                  type='date'
                  label='Date of birth'
                  variant='outlined'
                  size='small'
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className='col-lg-4 my-1 d-flex align-items-center'>
                <Button
                  sx={{ backgroundColor: "red", width: "50%" }}
                  variant='contained'
                  onClick={addStaff}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default NewStaffEntry;
