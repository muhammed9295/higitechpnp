import React from "react";
import Test from "../../../components/sidebar/Test";
import { TextField, Button, Box } from "@mui/material";
import "./staffevaluation.css";

function Staffevaluation() {
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
          <div className='evaluation-wrapper'>
            <div className='text-field1'>
              <TextField
                sx={{ width: "30%", marginRight: "10px" }}
                id='standard-basic'
                label='Staff ID'
                variant='standard'
              />
              <TextField
                sx={{ width: "70%" }}
                id='standard-basic'
                label='Name'
                variant='standard'
              />
            </div>
            <div className='text-field2'>
              <TextField
                sx={{ width: "50%", marginRight: "10px" }}
                id='standard-basic'
                label='Designation'
                variant='standard'
              />
              <TextField
                sx={{ width: "50%" }}
                id='standard-basic'
                label='Department'
                variant='standard'
              />
            </div>
            <div className='text-field3'>
              <TextField
                sx={{ width: "30%", marginRight: "10px" }}
                id='standard-basic'
                label='Gender'
                variant='standard'
              />
              <TextField
                sx={{ width: "30%", marginRight: "10px" }}
                id='standard-basic'
                label='Nationality'
                variant='standard'
              />
              <TextField
                sx={{ width: "70%" }}
                id='standard-basic'
                label='Project'
                variant='standard'
              />
            </div>
            <div className='text-field4'>
              <TextField
                sx={{ width: "50%", marginRight: "10px" }}
                id='standard-basic'
                type='date'
                label='Date of joining'
                variant='standard'
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                sx={{ width: "50%" }}
                id='standard-basic'
                type='date'
                label='Date of birth'
                variant='standard'
                InputLabelProps={{ shrink: true }}
              />
              <Button
                sx={{ backgroundColor: "red", margin: "30px", width: "20%" }}
                variant='contained'
              >
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Staffevaluation;
