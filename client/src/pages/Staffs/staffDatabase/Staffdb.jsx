import React, { useState, useEffect } from "react";
import "./staffdb.css";
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
  Dialog,
  Box,
} from "@mui/material";
import Axios from "axios";
import UploadEntry from "../uploadStaffEntry/UploadEntry";
import Test from "../../../components/sidebar/Test";

function Staffdb() {
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // FETCHED ALL STAFF DETAILS

  const staffDetails = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-details"
      );
      console.log(data.data);
      setStaffList(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    staffDetails();
    console.log(staffDetails());
  }, []);

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
          <div className='staffdb-container'>
            <div className='searchbar'>
              <TextField
                label='Search'
                id='outlined-size-small'
                size='small'
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <div className='upload'>
                <Button
                  variant='contained'
                  component='span'
                  onClick={handleClickOpen}
                >
                  Upload
                </Button>

                <Dialog
                  sx={{ width: "100%", height: "100%" }}
                  open={open}
                  onClose={handleClose}
                >
                  <UploadEntry />
                </Dialog>
              </div>
            </div>
            <div className='staffdb-wrapper'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Employee Id</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Designation</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Department</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Gender</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Nationality</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Project</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Date of joining</strong>
                      </TableCell>
                      <TableCell align='left'>
                        <strong>Date of birth</strong>
                      </TableCell>
                      <TableCell align='left'>
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
                      .map((staff) => {
                        return (
                          <TableRow>
                            <TableCell component='th' scope='row'>
                              {staff.id}
                            </TableCell>
                            <TableCell align='left'>{staff.name}</TableCell>
                            <TableCell align='left'>
                              {staff.designation}
                            </TableCell>
                            <TableCell align='left'>
                              {staff.department}
                            </TableCell>
                            <TableCell align='left'>{staff.gender}</TableCell>
                            <TableCell align='left'>
                              {staff.nationality}
                            </TableCell>
                            <TableCell align='left'>{staff.project}</TableCell>
                            <TableCell align='left'>{staff.doj}</TableCell>
                            <TableCell align='left'>{staff.dob}</TableCell>
                            <TableCell align='left'>{staff.shift}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {/* {staffList.map(staff=>{
                return (
                    <div>
                    <p>{staff.name}</p>
                    
                    <p>{staff.gender}</p>
                    </div>
                )
            })}
            
            <button>click</button> */}
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Staffdb;
