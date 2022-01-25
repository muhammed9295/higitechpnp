import React, { useState } from "react";
import "./newUser.css";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import Axios from "axios";
import Test from "../../components/sidebar/Test";
import { Link } from "react-router-dom";

function NewUser() {
  const style = { textDecoration: "none", color: "white" };

  // Dropdown state change
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  //   register new user
  const register = () => {
    Axios.post("http://185.243.76.148:3001/api/register", {
      name: name,
      position: position,
      email: email,
      password: password,
      role: role,
    })
      .then(() => {
        alert("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
          <div className='newUser-wrap'>
            <div className='text-fields'>
              <TextField
                sx={{ width: "30%" }}
                id='standard-basic'
                label='Name'
                variant='outlined'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                sx={{ width: "30%" }}
                id='standard-basic'
                label='Position'
                variant='outlined'
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
              <TextField
                sx={{ width: "30%" }}
                id='standard-basic'
                label='E-mail'
                variant='outlined'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                sx={{ width: "30%" }}
                id='standard-basic'
                label='Password'
                variant='outlined'
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <FormControl sx={{ m: 1, width: "30%" }}>
                <InputLabel id='demo-simple-select-helper-label'>
                  Role
                </InputLabel>
                <Select
                  labelId='demo-simple-select-helper-label'
                  id='demo-simple-select-helper'
                  value={role}
                  label='Role'
                  onChange={handleChange}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                  <MenuItem value={"editor"}>Editor</MenuItem>
                  <MenuItem value={"viewer"}>Viewer</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className='buttons-fields'>
              <Link to='/user-access' style={style}>
                <Button variant='contained'>Close</Button>
              </Link>
              <Button variant='contained' type='submit' onClick={register}>
                Register
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default NewUser;
