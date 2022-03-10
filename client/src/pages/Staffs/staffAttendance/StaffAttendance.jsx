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
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StaffAttendance() {
  // attendance entry
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");

  const [eve, setEve] = useState([]);

  const style = { marginTop: "20px" };

  // Current date
  const current = new Date();
  const month = current.toLocaleString("default", { month: "short" });
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  const day = current.getDate();
  const year = current.getFullYear();
  const fullDate = `${day}-${month}-${year}`;
  console.log(current.getDate() + 1);

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
            element.date = date;
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
    staffDetails(); // handleAddFields();
  }, []);

  function handleChange(e, index) {
    let localList = [...staffList];
    let { name, value } = e.target;
    debugger;
    if (localList[index] === -1) {
      localList[index][name] = value;
      setStaffList(localList);
    }
  }

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
            <div className='attendance-wrapper' style={style}>
              <div className='attendence-title'>
                <TextField
                  type='text'
                  size='small'
                  label='Search'
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <h2>{fullDate}</h2>

                <Link to='/staff-attendance-morning'>
                  <Button
                    sx={{
                      backgroundColor: "blue",
                      padding: "8px 20px",
                      width: "100%",
                    }}
                    variant='contained'
                    // onClick={morningShift}
                  >
                    Morning
                  </Button>
                </Link>

                <Link to='/staff-attendance-evening'>
                  <Button
                    sx={{
                      backgroundColor: "blue",
                      padding: "8px 20px",
                      width: "100%",
                    }}
                    variant='contained'
                    // onClick={eveningShift}
                  >
                    Evening
                  </Button>
                </Link>
                <ToastContainer
                  position='top-right'
                  autoClose={3000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
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
