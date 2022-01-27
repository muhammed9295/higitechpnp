import React, { useEffect, useState } from "react";
import Test from "../../../components/sidebar/Test";
import {
  Button,
  Box,
  Select,
  MenuItem,
  Paper,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
  TextField,
} from "@mui/material";
import "./shiftchanger.css";
import {
  ArrowCircleRight,
  ArrowCircleLeft,
  NightsStay,
  LightMode,
} from "@mui/icons-material";

import Axios from "axios";

function Staffevaluation() {
  const [staffList1, setStaffList1] = useState([]);
  const [staffList2, setStaffList2] = useState([]);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [checked, setChecked] = useState([]);

  // Fetched Morning shift
  const morningShift = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-morning"
      );

      setStaffList1(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Fetched Evening shift

  const eveningShift = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/staff-evening"
      );

      setStaffList2(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    morningShift();
    eveningShift();
  }, []);

  // Update Morning shift
  const updateMorning = () => {
    Axios.put("http://185.243.76.148:3001/api/update-morning", {
      name: checked,
    }).then((response) => {
      alert(response.data);
      window.location.reload();
    });
  };

  // Update Evening shift
  const updateEvening = () => {
    Axios.put("http://185.243.76.148:3001/api/update-evening", {
      name: checked,
    }).then((response) => {
      alert(response.data);
      window.location.reload();
    });
  };

  const handleCheckbox = (staff) => () => {
    const currentIndex = checked.indexOf(staff);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(staff);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(newChecked);
  };

  return (
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
          <div className='card1'>
            <Paper sx={{ paddingTop: "5px" }}>
              <div className='title'>
                <LightMode sx={{ color: "#FCE570", marginRight: "5px" }} />
                <h2>MORNING</h2>
              </div>
              <Divider />
              <div className='searchbar'>
                <TextField
                  type='text'
                  size='small'
                  label='Search'
                  sx={{ width: "70%" }}
                  onChange={(e) => {
                    setSearch1(e.target.value);
                  }}
                />
              </div>

              <List
                sx={{
                  width: 400,
                  height: 500,
                  overflow: "auto",
                }}
              >
                {staffList1
                  .filter((staff) => {
                    if (search1 == "") {
                      return staff;
                    } else if (
                      staff.name.toLowerCase().includes(search1.toLowerCase())
                    ) {
                      return staff;
                    }
                  })
                  .map((staff) => (
                    <ListItem onClick={handleCheckbox(staff.name)}>
                      <Checkbox checked={checked.indexOf(staff.name) !== -1} />
                      <span>
                        <ListItemText id={staff.id} primary={staff.name} />
                      </span>
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </div>
          <div className='shift-button'>
            <Button variant='contained' onClick={updateMorning}>
              <ArrowCircleLeft sx={{ marginRight: "5px" }} />
              Shift Morning
            </Button>
            <Button variant='contained' onClick={updateEvening}>
              Shift Evening
              <ArrowCircleRight sx={{ marginLeft: "5px" }} />
            </Button>
          </div>
          <div className='card2'>
            <Paper sx={{ paddingTop: "5px" }}>
              <div className='title'>
                <NightsStay sx={{ color: "#3686A0", marginRight: "5px" }} />
                <h2>EVENING</h2>
              </div>
              <Divider />
              <div className='searchbar'>
                <TextField
                  type='text'
                  size='small'
                  label='Search'
                  sx={{ width: "70%" }}
                  onChange={(e) => {
                    setSearch2(e.target.value);
                  }}
                />
              </div>
              <List
                sx={{
                  width: 400,
                  height: 500,
                  overflow: "auto",
                }}
              >
                {staffList2
                  .filter((staff) => {
                    if (search2 == "") {
                      return staff;
                    } else if (
                      staff.name.toLowerCase().includes(search2.toLowerCase())
                    ) {
                      return staff;
                    }
                  })
                  .map((staff) => (
                    <ListItem onClick={handleCheckbox(staff.name)}>
                      <Checkbox checked={checked.indexOf(staff.name) !== -1} />
                      <span>
                        <ListItemText id={staff.id} primary={staff.name} />
                      </span>
                    </ListItem>
                  ))}
              </List>
            </Paper>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Staffevaluation;
