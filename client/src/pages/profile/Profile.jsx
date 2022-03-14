import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Button, Box, Paper, Input } from "@mui/material";
import Test from "../../components/sidebar/Test";

import "./profile.css";

import Axios from "axios";

function Profile() {
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [doj, setDoj] = useState();
  const [pic, setPic] = useState();

  //   Fetch user information
  useEffect(async () => {
    try {
      const data = await Axios.get(
        `http://185.243.76.148:3001/api/user-profile/${id}`
      );
      setUsername(data.data[0].name);
      setDepartment(data.data[0].department);
      setDesignation(data.data[0].designation);
      setGender(data.data[0].gender);
      setDob(data.data[0].dob);
      setDoj(data.data[0].doj);
      setPic(data.data[0].image);
    } catch (e) {
      console.log(e);
    }
  });

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
          <Paper>
            <div className='profile-wrapper'>
              <div className='container-fluid'>
                <div className='row py-4'>
                  <div className='col-lg-6 d-flex flex-column align-items-center'>
                    <img
                      src='../images/user.png'
                      alt=''
                      className='profile-pic'
                    />
                    <label htmlFor='contained-button-file'>
                      <Input
                        accept='image/*'
                        id='contained-button-file'
                        multiple
                        type='file'
                        hidden
                      />
                      <Button variant='contained' component='span'>
                        Change Profile Image
                      </Button>
                    </label>
                  </div>
                  <div className='col-lg-6 d-flex flex-column profile-info justify-content-center'>
                    <div className='d-flex justify-content-start'>
                      <p className='profile-title'>Name : </p>
                      <p className='profile-description'>{username}</p>
                    </div>
                    <div className='d-flex'>
                      <p className='profile-title'>Department : </p>
                      <p className='profile-description'>{department}</p>
                    </div>
                    <div className='d-flex'>
                      <p className='profile-title'>Designation : </p>
                      <p className='profile-description'>{designation}</p>
                    </div>

                    <div className='d-flex'>
                      <p className='profile-title'>Gender : </p>
                      <p className='profile-description'>{gender}</p>
                    </div>
                    <div className='d-flex'>
                      <p className='profile-title'>Date of Birth : </p>
                      <p className='profile-description'>{dob}</p>
                    </div>
                    <div className='d-flex'>
                      <p className='profile-title'>Date of Joining : </p>
                      <p className='profile-description'>{doj}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='container '>
                <nav>
                  <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                    <button
                      className='nav-link active'
                      id='nav-project-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-project'
                      type='button'
                      role='tab'
                      aria-controls='nav-project'
                      aria-selected='true'
                    >
                      Projects
                    </button>
                    <button
                      className='nav-link'
                      id='nav-performance-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-performance'
                      type='button'
                      role='tab'
                      aria-controls='nav-performance'
                      aria-selected='false'
                    >
                      Performance
                    </button>
                    <button
                      className='nav-link'
                      id='nav-attendence-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-attendence'
                      type='button'
                      role='tab'
                      aria-controls='nav-attendence'
                      aria-selected='false'
                    >
                      Attendence summary
                    </button>
                    <button
                      className='nav-link'
                      id='nav-visa-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-visa'
                      type='button'
                      role='tab'
                      aria-controls='nav-visa'
                      aria-selected='false'
                    >
                      Visa Status
                    </button>
                    <button
                      className='nav-link'
                      id='nav-document-tab'
                      data-bs-toggle='tab'
                      data-bs-target='#nav-document'
                      type='button'
                      role='tab'
                      aria-controls='nav-document'
                      aria-selected='false'
                    >
                      Documents
                    </button>
                  </div>
                </nav>
                <div className='tab-content my-3' id='nav-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='nav-project'
                    role='tabpanel'
                    aria-labelledby='nav-project-tab'
                  >
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope='col'>Project #</th>
                          <th scope='col'>Project Name</th>
                          <th scope='col'>Start Date</th>
                          <th scope='col'>End Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>1</th>
                          <td>Project 1</td>
                          <td>14/06/2021</td>
                          <td>14/07/2021</td>
                        </tr>
                        <tr>
                          <th scope='row'>2</th>
                          <td>Project 2</td>
                          <td>16/07/2021</td>
                          <td>16/08/2021</td>
                        </tr>
                        <tr>
                          <th scope='row'>3</th>
                          <td>Project 3</td>
                          <td>18/08/2021</td>
                          <td>In progress..</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-performance'
                    role='tabpanel'
                    aria-labelledby='nav-performance-tab'
                  >
                    This is Performance
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-attendence'
                    role='tabpanel'
                    aria-labelledby='nav-attendence-tab'
                  >
                    This is Attendence summary
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-visa'
                    role='tabpanel'
                    aria-labelledby='nav-visa-tab'
                  >
                    This is Visa Status
                  </div>
                  <div
                    className='tab-pane fade'
                    id='nav-document'
                    role='tabpanel'
                    aria-labelledby='nav-document-tab'
                  >
                    This is Documents
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default Profile;
