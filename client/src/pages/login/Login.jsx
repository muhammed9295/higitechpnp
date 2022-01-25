import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { TextField, Button, Paper } from "@mui/material";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useNavigate();

  const login = () => {
    Axios.post("http://185.243.76.148:3001/api/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          history("/staff-attendance");
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  // redirecting
  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      history("/staff-attendance");
    }
  }, []);

  return (
    <div className='main-container'>
      <Paper
        elevation={3}
        sx={{ width: "500px", height: "500px", borderRadius: "10px" }}
      >
        <div className='login-container'>
          <div className='login-wrapper'>
            <h1 className='login'>Login</h1>
            <div className='username'>
              <p>User email</p>
              <TextField
                sx={{ width: "100%", marginTop: "10px" }}
                id='standard-basic'
                label='Email'
                variant='outlined'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='password'>
              <p>Password</p>
              <TextField
                sx={{ width: "100%", marginTop: "10px" }}
                id='standard-basic'
                label='Password'
                variant='outlined'
                type='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button
              sx={{ backgroundColor: "red", margin: "30px", width: "20%" }}
              variant='contained'
              onClick={login}
            >
              Login
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Login;
