import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Paper, Select, MenuItem } from "@mui/material";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import "./attendenceOv.css";
import Axios from "axios";

function AttendenceOverview() {
  const [presentCount, setPresentCount] = useState();
  const [absentCount, setAbsentCount] = useState();
  const [sickCount, setSickCount] = useState();
  const [dayoffCount, setDayoffCount] = useState();
  const [leaveCount, setLeaveCount] = useState();
  const [phCount, setPhCount] = useState();
  const [poCount, setPoCount] = useState();
  const [time, setTime] = useState("Today");

  // Fetch all status
  const getStatus = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-overview"
      );
      let result = data.data;

      const present = result.filter(checkPresent);
      const absent = result.filter(checkAbsent);
      const sick = result.filter(checkSick);
      const dayoff = result.filter(checkDayoff);
      const leave = result.filter(checkLeave);
      const ph = result.filter(checkPh);
      const po = result.filter(checkPo);

      function checkPresent(d) {
        return d == "present";
      }

      setPresentCount(present.length);

      function checkAbsent(d) {
        return d == "absent";
      }

      setAbsentCount(absent.length);

      function checkSick(d) {
        return d == "sick";
      }

      setSickCount(sick.length);

      function checkDayoff(d) {
        return d == "dayoff";
      }

      setDayoffCount(dayoff.length);

      function checkLeave(d) {
        return d == "leave";
      }

      setLeaveCount(leave.length);

      function checkPh(d) {
        return d == "ph";
      }

      setPhCount(ph.length);

      function checkPo(d) {
        return d == "po";
      }

      setPoCount(po.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const color = [
    "#ce7136",
    "#59944d",
    "#d79839",
    "#0a73b4",
    "#4599b9",
    "#3b4245",
    "#848a8d",
  ];

  let data = [
    {
      name: "Absent",
      count: absentCount,
    },
    {
      name: "Present",
      count: presentCount,
    },
    {
      name: "Sick",
      count: sickCount,
    },
    {
      name: "Dayoff",
      count: dayoffCount,
    },
    {
      name: "Leave",
      count: leaveCount,
    },
    {
      name: "PH",
      count: phCount,
    },
    {
      name: "PO",
      count: poCount,
    },
  ];

  //   Dropdown section

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  // Fetch yesterday attendence
  const getYesterday = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-yesterday"
      );
      let result = data.data;

      const present = result.filter(checkPresent);
      const absent = result.filter(checkAbsent);
      const sick = result.filter(checkSick);
      const dayoff = result.filter(checkDayoff);
      const leave = result.filter(checkLeave);
      const ph = result.filter(checkPh);
      const po = result.filter(checkPo);

      function checkPresent(d) {
        return d == "present";
      }

      setPresentCount(present.length);

      function checkAbsent(d) {
        return d == "absent";
      }

      setAbsentCount(absent.length);

      function checkSick(d) {
        return d == "sick";
      }

      setSickCount(sick.length);

      function checkDayoff(d) {
        return d == "dayoff";
      }

      setDayoffCount(dayoff.length);

      function checkLeave(d) {
        return d == "leave";
      }

      setLeaveCount(leave.length);

      function checkPh(d) {
        return d == "ph";
      }

      setPhCount(ph.length);

      function checkPo(d) {
        return d == "po";
      }

      setPoCount(po.length);
    } catch (e) {
      console.log(e);
    }
  };

  // Fetch this month attendence
  const getThismonth = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-thismonth"
      );
      let result = data.data;

      const present = result.filter(checkPresent);
      const absent = result.filter(checkAbsent);
      const sick = result.filter(checkSick);
      const dayoff = result.filter(checkDayoff);
      const leave = result.filter(checkLeave);
      const ph = result.filter(checkPh);
      const po = result.filter(checkPo);

      function checkPresent(d) {
        return d == "present";
      }

      setPresentCount(present.length);

      function checkAbsent(d) {
        return d == "absent";
      }

      setAbsentCount(absent.length);

      function checkSick(d) {
        return d == "sick";
      }

      setSickCount(sick.length);

      function checkDayoff(d) {
        return d == "dayoff";
      }

      setDayoffCount(dayoff.length);

      function checkLeave(d) {
        return d == "leave";
      }

      setLeaveCount(leave.length);

      function checkPh(d) {
        return d == "ph";
      }

      setPhCount(ph.length);

      function checkPo(d) {
        return d == "po";
      }

      setPoCount(po.length);
    } catch (e) {
      console.log(e);
    }
  };

  //   Fetch last month attendence
  const getLastmonth = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-lastmonth"
      );
      let result = data.data;

      const present = result.filter(checkPresent);
      const absent = result.filter(checkAbsent);
      const sick = result.filter(checkSick);
      const dayoff = result.filter(checkDayoff);
      const leave = result.filter(checkLeave);
      const ph = result.filter(checkPh);
      const po = result.filter(checkPo);

      function checkPresent(d) {
        return d == "present";
      }

      setPresentCount(present.length);

      function checkAbsent(d) {
        return d == "absent";
      }

      setAbsentCount(absent.length);

      function checkSick(d) {
        return d == "sick";
      }

      setSickCount(sick.length);

      function checkDayoff(d) {
        return d == "dayoff";
      }

      setDayoffCount(dayoff.length);

      function checkLeave(d) {
        return d == "leave";
      }

      setLeaveCount(leave.length);

      function checkPh(d) {
        return d == "ph";
      }

      setPhCount(ph.length);

      function checkPo(d) {
        return d == "po";
      }

      setPoCount(po.length);
    } catch (e) {
      console.log(e);
    }
  };

  //   Fetch all attendence
  const getAllmonth = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-all"
      );
      let result = data.data;

      const present = result.filter(checkPresent);
      const absent = result.filter(checkAbsent);
      const sick = result.filter(checkSick);
      const dayoff = result.filter(checkDayoff);
      const leave = result.filter(checkLeave);
      const ph = result.filter(checkPh);
      const po = result.filter(checkPo);

      function checkPresent(d) {
        return d == "present";
      }

      setPresentCount(present.length);

      function checkAbsent(d) {
        return d == "absent";
      }

      setAbsentCount(absent.length);

      function checkSick(d) {
        return d == "sick";
      }

      setSickCount(sick.length);

      function checkDayoff(d) {
        return d == "dayoff";
      }

      setDayoffCount(dayoff.length);

      function checkLeave(d) {
        return d == "leave";
      }

      setLeaveCount(leave.length);

      function checkPh(d) {
        return d == "ph";
      }

      setPhCount(ph.length);

      function checkPo(d) {
        return d == "po";
      }

      setPoCount(po.length);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='attendenceov'>
      <Paper
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className='attendence-title'>
          <div></div>
          Attendence Overview
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={time}
            size='small'
            sx={{ fontSize: "14px" }}
            onChange={handleChange}
          >
            <MenuItem
              value={"Today"}
              sx={{ fontSize: "14px" }}
              onClick={getStatus}
            >
              Today
            </MenuItem>
            <MenuItem
              value={"Yesterday"}
              sx={{ fontSize: "14px" }}
              onClick={getYesterday}
            >
              Yesterday
            </MenuItem>
            <MenuItem
              value={"This month"}
              sx={{ fontSize: "14px" }}
              onClick={getThismonth}
            >
              This month
            </MenuItem>
            <MenuItem
              value={"Last month"}
              sx={{ fontSize: "14px" }}
              onClick={getLastmonth}
            >
              Last month
            </MenuItem>
            <MenuItem
              value={"All"}
              sx={{ fontSize: "14px" }}
              onClick={getAllmonth}
            >
              All
            </MenuItem>
          </Select>
        </div>
        <ResponsiveContainer width='100%' aspect={1.5}>
          <BarChart width={100} height={40} data={data}>
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='count' fill='#8884d8' barSize={50}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={color[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </div>
  );
}

export default AttendenceOverview;
