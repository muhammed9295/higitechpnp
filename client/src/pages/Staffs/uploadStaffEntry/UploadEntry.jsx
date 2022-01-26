import React, { useState, useEffect } from "react";
import "./upload.css";
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
} from "@mui/material";
import Axios from "axios";
import * as XLSX from "xlsx";

function UploadEntry() {
  const [staffData, setStaffData] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      // console.log(d);
      setStaffData(d);
    });
  };

  // adding mass staff list to db
  const uploadStaff = () => {
    debugger;
    Axios.post("http://185.243.76.148:3001/api/staffs-upload", staffData)
      .then(() => {
        alert("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function handleStaffChange(e, index) {
    let localList = [...staffData];
    let { name, value } = e.target;
    debugger;
    if (localList[index]) {
      localList[index][name] = value;
      setStaffData(localList);
    }
  }

  return (
    <div className='upload-container'>
      <div className='upload-wrapper'>
        <div className='upload-contents'>
          <TextField
            id='outlined-size-small'
            type='file'
            size='small'
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
          <Button variant='contained' component='span' onClick={uploadStaff}>
            Upload
          </Button>
        </div>
        <div className='table-container'>
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
                    <strong>Department</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Gender</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Nationality</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Project</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Date of joining</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Date of birth</strong>
                  </TableCell>
                  <TableCell align='center'>
                    <strong>Shift</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffData.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell component='th' scope='row'>
                      {d.employeeid}
                    </TableCell>
                    <TableCell align='center'>{d.name}</TableCell>
                    <TableCell align='center'>{d.designation}</TableCell>
                    <TableCell align='center'>{d.department}</TableCell>
                    <TableCell align='center'>{d.gender}</TableCell>
                    <TableCell align='center'>{d.nationality}</TableCell>
                    <TableCell align='center'>{d.projects}</TableCell>
                    <TableCell align='center'>{d.doj}</TableCell>
                    <TableCell align='center'>{d.dob}</TableCell>
                    <TableCell align='center'>{d.shift}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default UploadEntry;
