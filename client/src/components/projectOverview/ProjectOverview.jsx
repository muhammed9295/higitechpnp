import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./projectov.css";
import Axios from "axios";

function ProjectOverview() {
  const [twentyfive, setTwentyfive] = useState();
  const [adanigroup, setAdanigroup] = useState();
  const [avani, setAvani] = useState();
  const [avaniIbn, setAvaniIbn] = useState();
  const [black, setBlack] = useState();
  const [boho, setBoho] = useState();
  const [first, setFirst] = useState();
  const [fair, setFair] = useState();
  const [grandMel, setGrandMel] = useState();
  const [grandTec, setGrandTec] = useState();
  const [hilton, setHilton] = useState();
  const [me, setMe] = useState();
  const [nikki, setNikki] = useState();
  const [nuran, setNuran] = useState();
  const [raffle, setRaffle] = useState();
  const [roda, setRoda] = useState();
  const [serv, setServ] = useState();
  const [sofitel, setSofitel] = useState();

  // Fetch projectwise attendence details
  const projattendence = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/attendence-projectwise"
      );
      const response = data.data;
      let proj1 = response.filter((v) => {
        return v == "SERVE-HUB";
      });
      setServ(proj1.length);

      let proj2 = response.filter(checkProj2);
      function checkProj2(v) {
        return v == "F1RST MOTORS";
      }
      setFirst(proj2.length);

      let proj3 = response.filter(checkProj3);
      function checkProj3(v) {
        return v == "AVANI HOTEL";
      }
      setAvani(proj3.length);

      let proj4 = response.filter(checkProj4);
      function checkProj4(v) {
        return v == "RODA AMWAJ JBR";
      }
      setRoda(proj4.length);

      let proj5 = response.filter(checkProj5);
      function checkProj5(v) {
        return v == "FAIRMONT HOTEL THE PALM";
      }
      setFair(proj5.length);

      let proj6 = response.filter(checkProj6);
      function checkProj6(v) {
        return v == "25HRS HOTEL WTC";
      }
      setTwentyfive(proj6.length);

      let proj7 = response.filter(checkProj7);
      function checkProj7(v) {
        return v == "ME DUBAI HOTEL BUSINESS BAY";
      }

      setMe(proj7.length);

      let proj8 = response.filter(checkProj8);
      function checkProj8(v) {
        return v == "GRAND MILLENIUM BUSINESS BAY";
      }

      setGrandMel(proj8);

      let proj9 = response.filter(checkProj9);
      function checkProj9(v) {
        return v == "GRAND MILLENIUM TECOM";
      }

      setGrandTec(proj9);

      let proj10 = response.filter(checkProj10);
      function checkProj10(v) {
        return v == "HILTON JBR";
      }

      setHilton(proj10);

      let proj11 = response.filter(checkProj11);
      function checkProj11(v) {
        return v == "NURAN DUBAI MARINA";
      }

      setNuran(proj11);

      let proj12 = response.filter(checkProj12);
      function checkProj12(v) {
        return v == "AVANI IBN BATUTTA";
      }

      setAvaniIbn(proj12);

      let proj13 = response.filter(checkProj13);
      function checkProj13(v) {
        return v == "BLACK PLATINUM SALOON FINANCIAL CENTER";
      }

      setBlack(proj13);

      let proj14 = response.filter(checkProj14);
      function checkProj14(v) {
        return v == "BOHO CAFÉ FINANCIAL CENTER";
      }
      setBoho(proj14);

      let proj15 = response.filter(checkProj15);
      function checkProj15(v) {
        return v == "SOFITEL WAFI MALL";
      }
      setSofitel(proj15);

      let proj16 = response.filter(checkProj16);
      function checkProj16(v) {
        return v == "ADANI GROUP";
      }
      setAdanigroup(proj16);

      let proj17 = response.filter(checkProj17);
      function checkProj17(v) {
        return v == "NIKKI BEACH";
      }

      let proj18 = response.filter(checkProj18);
      function checkProj18(v) {
        return v == "RAFFLE WAFI MALL";
      }

      console.log(proj1);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    projattendence();
  }, []);
  const data1 = [
    { name: "SERVE-HUB", value: serv },
    { name: "F1RST MOTORS", value: first },
    { name: "AVANI HOTEL", value: avani },
    { name: "RODA AMWAJ", value: roda },
    { name: "FAIRMONT HOTEL", value: fair },
    { name: "25HRS HOTEL", value: twentyfive },
    { name: "ME DUBAI", value: me },
    { name: "GRAND MILLENIUM BUSINESS BAY", value: grandMel },
    { name: "GRAND MILLENIUM TECOM ", value: grandTec },
    { name: "HILTON JBR", value: hilton },
    { name: "NURAN DUBAI MARINA", value: nuran },
    { name: "AVANI IBN BATUTTA", value: avaniIbn },
    { name: "BLACK PLATINUM", value: black },
    { name: "BOHO CAFE", value: boho },
    { name: "SOFITEL WAFI MALL", value: sofitel },
    { name: "ADANI GROUP", value: adanigroup },
  ];
  const data2 = [
    { name: "SERVE-HUB", value: 3 },
    { name: "F1RST MOTORS", value: 4 },
    { name: "AVANI HOTEL", value: 2 },
    { name: "RODA AMWAJ", value: 23 },
    { name: "FAIRMONT HOTEL", value: 5 },
    { name: "25HRS HOTEL", value: 18 },
    { name: "ME DUBAI", value: 7 },
    { name: "GRAND MILLENIUM BUSINESS BAY", value: 15 },
    { name: "GRAND MILLENIUM TECOM ", value: 15 },
    { name: "HILTON JBR", value: 4 },
    { name: "NURAN DUBAI MARINA", value: 6 },
    { name: "AVANI IBN BATUTTA", value: 5 },
    { name: "BLACK PLATINUM", value: 1 },
    { name: "BOHO CAFE", value: 1 },
    { name: "SOFITEL WAFI MALL", value: 2 },
    { name: "ADANI GROUP", value: 1 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='projectov'>
      <Paper
        sx={{
          width: "100%",
          height: "540px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5px",
        }}
      >
        <div className='title'>Project Overview</div>

        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={100} height={100}>
            <Pie
              data={data1}
              cx='75%'
              cy='50%'
              labelLine={true}
              label={renderCustomizedLabel}
              c
              outerRadius={140}
              fill='#8884d8'
              dataKey='value'
            >
              {data1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Pie
              data={data2}
              cx='25%'
              cy='50%'
              labelLine={true}
              label
              outerRadius={140}
              fill='#8884d8'
              dataKey='value'
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className='title1'>
          <div className='actual'>Manpower required</div>
          <div className='current'>Manpower present</div>
        </div>
      </Paper>
    </div>
  );
}

export default ProjectOverview;
