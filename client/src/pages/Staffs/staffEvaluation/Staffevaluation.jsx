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
            <img src='./images/underconstruction.png' alt='' />
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Staffevaluation;
