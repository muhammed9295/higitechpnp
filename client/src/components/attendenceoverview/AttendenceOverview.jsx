import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
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
  const [time, setTime] = useState("none");
  const [morn, setMorn] = useState([]);
  const [eve, setEve] = useState([]);
  const [yestMorn, setYestMorn] = useState([]);
  const [yestEve, setYestEve] = useState([]);
  const [curMorn, setCurMorn] = useState([]);
  const [curEve, setCurEve] = useState([]);
  const [lastMorn, setLastMorn] = useState([]);
  const [lastEve, setLastEve] = useState([]);
  const [allMorn, setAllMorn] = useState([]);
  const [allEve, setAllEve] = useState([]);

  // Fetch all attendence data

  const getToday = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:3001/api/attendence-overview-morning"
      );
      setMorn(data.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const d = await Axios.get(
        "http://localhost:3001/api/attendence-overview-evening"
      );

      setEve(d.data);
    } catch (e) {
      console.log(e);
    }

    let array = morn.concat(eve);
    const present = array.filter(checkPresent);
    const absent = array.filter(checkAbsent);
    const sick = array.filter(checkSick);
    const dayoff = array.filter(checkDayoff);
    const leave = array.filter(checkLeave);
    const ph = array.filter(checkPh);
    const po = array.filter(checkPo);

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
  };

  // Fetch yesterday attendence data

  const getYesterday = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:3001/api/attendence-morning-yesterday"
      );
      setYestMorn(data.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const d = await Axios.get(
        "http://localhost:3001/api/attendence-evening-yesterday"
      );

      setYestEve(d.data);
    } catch (e) {
      console.log(e);
    }

    let array = yestMorn.concat(yestEve);
    const present = array.filter(checkPresent);
    const absent = array.filter(checkAbsent);
    const sick = array.filter(checkSick);
    const dayoff = array.filter(checkDayoff);
    const leave = array.filter(checkLeave);
    const ph = array.filter(checkPh);
    const po = array.filter(checkPo);

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
  };

  // Fetch this month attendence data
  const getThismonth = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:3001/api/attendence-morning-thismonth"
      );
      setCurMorn(data.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const d = await Axios.get(
        "http://localhost:3001/api/attendence-evening-thismonth"
      );

      setCurEve(d.data);
    } catch (e) {
      console.log(e);
    }

    let array = curMorn.concat(curEve);
    const present = array.filter(checkPresent);
    const absent = array.filter(checkAbsent);
    const sick = array.filter(checkSick);
    const dayoff = array.filter(checkDayoff);
    const leave = array.filter(checkLeave);
    const ph = array.filter(checkPh);
    const po = array.filter(checkPo);

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
  };

  //Fetch last month attendence data
  const getLastmonth = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:3001/api/attendence-morning-lastmonth"
      );
      setLastMorn(data.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const d = await Axios.get(
        "http://localhost:3001/api/attendence-evening-lastmonth"
      );

      setLastEve(d.data);
    } catch (e) {
      console.log(e);
    }

    let array = lastMorn.concat(lastEve);
    const present = array.filter(checkPresent);
    const absent = array.filter(checkAbsent);
    const sick = array.filter(checkSick);
    const dayoff = array.filter(checkDayoff);
    const leave = array.filter(checkLeave);
    const ph = array.filter(checkPh);
    const po = array.filter(checkPo);

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
  };

  //   Fetch all attendence
  const getAllmonth = async () => {
    try {
      const data = await Axios.get(
        "http://localhost:3001/api/attendence-morning-all"
      );
      setAllMorn(data.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const d = await Axios.get(
        "http://localhost:3001/api/attendence-evening-all"
      );

      setAllEve(d.data);
    } catch (e) {
      console.log(e);
    }

    let array = allMorn.concat(allEve);
    const present = array.filter(checkPresent);
    const absent = array.filter(checkAbsent);
    const sick = array.filter(checkSick);
    const dayoff = array.filter(checkDayoff);
    const leave = array.filter(checkLeave);
    const ph = array.filter(checkPh);
    const po = array.filter(checkPo);

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
  };

  useEffect(() => {
    // getStatusMorn();
    // getStatusEve();
    getToday();
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
            label='Age'
          >
            <MenuItem value={"none"} disabled={true}>
              <em>Please select</em>
            </MenuItem>
            <MenuItem
              value={"Today"}
              sx={{ fontSize: "14px" }}
              onClick={getToday}
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
