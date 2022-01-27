import React, { useState, useEffect } from "react";
import "./attendance.css";
import Test from "../../../components/sidebar/Test";
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
  Box,
} from "@mui/material";
import Axios from "axios";

function StaffAttendance() {
  // attendance entry
  // const [id, setId] = useState();
  // const [name, setName] = useState();
  // const axiosInstance = Axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  // });

  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(true);

  // Current date
  const current = new Date();
  const month = current.toLocaleString("default", { month: "short" });
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  const day = current.getDate();
  const year = current.getFullYear();
  const fullDate = `${day}-${month}-${year}`;

  // All staff details shown in table

  const staffDetails = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-details"
      );
      if (data && data.data) {
        data.data.forEach((element) => {
          if (!element.status) {
            element.status = "present";
          }
          if (!element.date) {
            element.date = fullDate;
          }
          // if (!element.shift) {
          //   element.shift = "morning";
          // }
        });
      }
      setStaffList(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    staffDetails();

    // handleAddFields();
  }, []);

  // Adding Staff attendence
  const addAttendence = () => {
    Axios.post("http://185.243.76.148:3001/api/attendance", staffList)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
        if (response.data == "success") {
          setStatus(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function handleChange(e, index) {
    let localList = [...staffList];
    let { name, value } = e.target;
    debugger;
    if (localList[index]) {
      localList[index][name] = value;
      setStaffList(localList);
    }
  }

  // Fetched Morning shift
  const morningShift = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-morning"
      );
      if (data && data.data) {
        data.data.forEach((element) => {
          if (!element.date) {
            element.date = fullDate;
          }
          if (!element.status) {
            element.status = "present";
          }
        });
      }

      setStaffList(data.data);

      setStatus(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Fetched Evening shift
  const eveningShift = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-evening"
      );
      if (data && data.data) {
        data.data.forEach((element) => {
          if (!element.date) {
            element.date = fullDate;
          }
          if (!element.status) {
            element.status = "present";
          }
        });
      }
      setStaffList(data.data);
      setStatus(false);
    } catch (e) {
      console.log(e);
    }
  };

  // Table Data

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Test />
        <Box
          component='main'
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
          <div className='attendance-container container'>
            <div className='attendance-wrapper'>
              <div className='title'>
                <TextField
                  type='text'
                  size='small'
                  label='Search'
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <h2>{fullDate}</h2>
                <Button
                  sx={{ backgroundColor: "blue", margin: "30px", width: "10%" }}
                  variant='contained'
                  onClick={morningShift}
                >
                  Morning
                </Button>
                <Button
                  sx={{ backgroundColor: "blue", margin: "30px", width: "10%" }}
                  variant='contained'
                  onClick={eveningShift}
                >
                  Evening
                </Button>
                <Button
                  sx={{ backgroundColor: "red", margin: "30px", width: "10%" }}
                  variant='contained'
                  disabled={status}
                  onClick={addAttendence}
                >
                  Submit
                </Button>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Employee Id</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Designation</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Project</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Date</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Status</strong>
                      </TableCell>
                      <TableCell align='center'>
                        <strong>Shift</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {staffList
                      .filter((staff) => {
                        if (search == "") {
                          return staff;
                        } else if (
                          staff.name
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return staff;
                        } else if (
                          staff.project
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return staff;
                        }
                      })
                      .map((staff, i) => {
                        return (
                          <TableRow key={staff.id}>
                            <TableCell align='center'>{staff.id}</TableCell>
                            <TableCell align='center'>{staff.name}</TableCell>
                            <TableCell align='center'>
                              {staff.designation}
                            </TableCell>
                            <TableCell align='center'>
                              {staff.project}
                            </TableCell>
                            <TableCell align='center'>{staff.date}</TableCell>
                            <TableCell align='center'>
                              <Select
                                size='small'
                                onChange={(e) => handleChange(e, i)}
                                name='status'
                                value={staff.status}
                              >
                                <MenuItem value={"present"} selected>
                                  Present
                                </MenuItem>
                                <MenuItem value={"absent"}>Absent</MenuItem>
                                <MenuItem value={"sick"}>Sick</MenuItem>
                                <MenuItem value={"dayoff"}>Dayoff</MenuItem>
                                <MenuItem value={"leave"}>Leave</MenuItem>
                                <MenuItem value={"ph"}>PH</MenuItem>
                                <MenuItem value={"po"}>PO</MenuItem>
                              </Select>
                            </TableCell>
                            <TableCell align='center'>{staff.shift}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default StaffAttendance;
