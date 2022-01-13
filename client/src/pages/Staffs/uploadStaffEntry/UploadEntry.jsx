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

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

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
      console.log(d);
      setStaffData(d);
    });
  };

  // adding mass staff list to db
  const uploadStaff = () => {
    debugger;
    axiosInstance
      .post("/staffs-upload", staffData)
      .then(() => {
        console.log("success");
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
                  <TableCell align='right'>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Designation</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Department</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Gender</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Nationality</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Project</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Date of joining</strong>
                  </TableCell>
                  <TableCell align='right'>
                    <strong>Date of birth</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffData.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell component='th' scope='row'>
                      {d.employeeid}
                    </TableCell>
                    <TableCell align='right'>{d.name}</TableCell>
                    <TableCell align='right'>{d.designation}</TableCell>
                    <TableCell align='right'>{d.department}</TableCell>
                    <TableCell align='right'>{d.gender}</TableCell>
                    <TableCell align='right'>{d.nationality}</TableCell>
                    <TableCell align='right'>{d.projects}</TableCell>
                    <TableCell align='right'>{d.doj}</TableCell>
                    <TableCell align='right'>{d.dob}</TableCell>
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
