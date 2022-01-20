import React, { useState, useEffect } from "react";
import "./attendance.css";
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
  const [status, setStatus] = useState("");
  const [inputFields, setInputFields] = useState([{ items: "" }]);

  const handleAddFields = (newFeild) => {
    // setInputFields(...inputFields, { items: "" });
  };

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
      const data = await Axios.get("http://localhost:3001/api/staff-details");
      if (data && data.data) {
        data.data.forEach((element) => {
          if (!element.status) {
            element.status = "present";
          }
          if (!element.date) {
            element.date = fullDate;
          }
          if (!element.shift) {
            element.shift = "morning";
          }
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
    Axios.post("http://localhost:3001/api/attendance", staffList)
      .then(() => {
        console.log("success");
        setStatus("Attendance submitted");
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

  // Table Data

  return (
    <div className='attendance-container'>
      <div className='attendance-wrapper'>
        <h3>{status}</h3>
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
            sx={{ backgroundColor: "red", margin: "30px", width: "20%" }}
            variant='contained'
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
                <TableCell align='centre'>
                  <strong>Name</strong>
                </TableCell>
                <TableCell align='centre'>
                  <strong>Designation</strong>
                </TableCell>
                <TableCell align='centre'>
                  <strong>Project</strong>
                </TableCell>
                <TableCell align='centre'>
                  <strong>Date</strong>
                </TableCell>
                <TableCell align='centre'>
                  <strong>Status</strong>
                </TableCell>
                <TableCell align='centre'>
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
                    staff.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return staff;
                  } else if (
                    staff.project.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return staff;
                  }
                })
                .map((staff, i) => {
                  return (
                    <TableRow key={staff.id}>
                      <TableCell align='centre'>
                        {/* <TextField
                          id='standard-basic'
                          name='id'
                          label='Id'
                          onChange={(e) => handleChange(e, i)}
                          variant='standard'
                          value={staff.id}
                        /> */}
                        {staff.id}
                      </TableCell>
                      <TableCell align='centre'>
                        {/* <TextField
                          id='standard-basic'
                          name='name'
                          label='Name'
                          onChange={(e) => handleChange(e, i)}
                          variant='standard'
                          value={staff.name}
                        /> */}
                        {staff.name}
                      </TableCell>
                      <TableCell align='centre'>
                        {staff.designation}
                        {/* <TextField
                          id='standard-basic'
                          name='designation'
                          label='Designation'
                          onChange={(e) => handleChange(e, i)}
                          variant='standard'
                          value={staff.designation}
                        /> */}
                      </TableCell>
                      <TableCell align='centre'>
                        {/* <TextField
                          id='standard-basic'
                          name='project'
                          label='Project'
                          onChange={(e) => handleChange(e, i)}
                          variant='standard'
                          value={staff.project}
                        /> */}
                        {staff.project}
                      </TableCell>
                      <TableCell align='centre'>
                        {/* <TextField
                          id='standard-basic'
                          name='date'
                          label='Date'
                          onChange={(e) => handleChange(e, i)}
                          variant='standard'
                          value={staff.date || new Date()}
                        /> */}
                        {staff.date}
                      </TableCell>
                      <TableCell align='centre'>
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
                      <TableCell align='centre'>
                        <Select
                          size='small'
                          onChange={(e) => handleChange(e, i)}
                          name='shift'
                          value={staff.shift}
                        >
                          <MenuItem value={"morning"} selected>
                            Morning
                          </MenuItem>
                          <MenuItem value={"evening"}>Evening</MenuItem>
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
  );
}

export default StaffAttendance;
