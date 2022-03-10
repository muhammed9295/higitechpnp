import React, { useState, useEffect } from "react";
import "./migration.css";
import Axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

function MassMigration() {
  // dropdown useStates
  const [status, setStatus] = useState("");
  const [inputFields, setInputFields] = useState([{ items: "" }]);
  const [projects, setProjects] = useState([]);

  // getting staff details useStates
  const [staffList, setStaffList] = useState([]);

  // dropdown call functions
  // const handleAddFields = (newFeild) => {
  //     setInputFields(...inputFields,{items:''})
  // }

  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };

  // Getting all staff details
  const staffDetails = async () => {
    try {
      const data = await Axios.get("http://localhost:3001/api/staff-details");
      setStaffList(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Getting all project details
  const getProjects = async () => {
    try {
      const data = await Axios.get("http://localhost:3001/api/get-projects");
      console.log(data.data);
      setProjects(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    staffDetails();
    getProjects();
  }, []);

  return (
    <div className='container'>
      <div className='mass-container'>
        <div className='mass-wrapper'>
          <div className='mass-title'>
            <h2>Project Mass Migration</h2>
            <div className='mass-button'>
              <Button
                sx={{ backgroundColor: "red", width: "20%", marginTop: "30px" }}
                variant='contained'
              >
                Submit
              </Button>
              <p className='mass-caution'>
                <em>
                  Caution: Once submitted cannot be changed, for more contact
                  your administrator
                </em>
              </p>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Employee Id</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Project</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Migrate to</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffList.map((staff, index) => {
                  return (
                    <TableRow>
                      <TableCell component='th' scope='row'>
                        {staff.id}
                      </TableCell>
                      <TableCell align='right'>{staff.name}</TableCell>
                      <TableCell align='right'>{staff.project}</TableCell>

                      <TableCell align='right'>
                        <Select
                          size='small'
                          onChange={handleChange}
                          value={projects.status}
                          sx={{ width: "100%" }}
                          // inputProps={{ 'aria-label': 'Without label' }}
                        >
                          {projects.map((project) => {
                            return (
                              <MenuItem value={project.projectname}>
                                {project.projectname}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default MassMigration;
