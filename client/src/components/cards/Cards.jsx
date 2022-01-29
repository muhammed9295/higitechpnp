import React from "react";
import "./cards.css";
import { TextField, Button, Paper, Divider } from "@mui/material";

export default function Cards(props) {
  return (
    <div className='cards' style={{ backgroundColor: props.color }}>
      <Paper
        elevation={3}
        sx={{ width: "100%", height: "100%", borderRadius: "10px" }}
      >
        <div className='card-container1'>
          <img className='profile-image' src={props.image} alt='' />
          <div className='card-title'>
            <h4>
              <strong>{props.title}</strong>
            </h4>
          </div>
        </div>

        <div className='card-container2'>
          <div className='card-details'>
            <p>Daily projected revenue</p>
            <p className='counts'>
              <strong>{props.revenue}</strong>
            </p>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className='card-details'>
            <p>Total required manpower</p>
            <p className='counts'>
              <strong>{props.manpower}</strong>
            </p>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className='card-details'>
            <p>Staff present</p>
            <p className='counts'>
              <strong>{props.present}</strong>
            </p>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className='card-details'>
            <p>Total contract revenue</p>
            <p className='counts'>
              <strong>{props.cvalue}</strong>
            </p>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className='card-details'>
            <p>Actual revenue</p>
            <p className='counts'>
              <strong>{props.arevenue}</strong>
            </p>
          </div>
          <Divider sx={{ margin: 1 }} />
          <div className='card-details'>
            <p>Difference value</p>
            <p className='counts'>
              <strong>{props.difference}</strong>
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
}
