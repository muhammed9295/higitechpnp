import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Paper } from "@mui/material";
import Test from "../../components/sidebar/Test";
import Cards from "../../components/cards/Cards";
import "./projectdash.css";
import Axios from "axios";
import AttendenceOverview from "../../components/attendenceoverview/AttendenceOverview";
import ProjectOverview from "../../components/projectOverview/ProjectOverview";

export default function ProjectDash() {
  const [projects, setProjects] = useState([]);
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

  // Number of days in a month
  let dt = new Date();
  let month = dt.getMonth();
  let year = dt.getFullYear();
  let daysInMonth = new Date(year, month, 0).getDate();

  // console.log(daysInMonth);

  // Fetch project details
  const getProjects = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/get-projects"
      );
      setProjects(data.data);
    } catch (e) {
      console.log(e);
    }
  };

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

      setGrandMel(proj8.length);

      let proj9 = response.filter(checkProj9);
      function checkProj9(v) {
        return v == "GRAND MILLENIUM TECOM";
      }

      setGrandTec(proj9.length);

      let proj10 = response.filter(checkProj10);
      function checkProj10(v) {
        return v == "HILTON JBR";
      }

      setHilton(proj10.length);

      let proj11 = response.filter(checkProj11);
      function checkProj11(v) {
        return v == "NURAN DUBAI MARINA";
      }

      setNuran(proj11.length);

      let proj12 = response.filter(checkProj12);
      function checkProj12(v) {
        return v == "AVANI IBN BATUTTA";
      }

      setAvaniIbn(proj12.length);

      let proj13 = response.filter(checkProj13);
      function checkProj13(v) {
        return v == "BLACK PLATINUM SALOON FINANCIAL CENTER";
      }

      setBlack(proj13.length);

      let proj14 = response.filter(checkProj14);
      function checkProj14(v) {
        return v == "BOHO CAFÉ FINANCIAL CENTER";
      }
      setBoho(proj14.length);

      let proj15 = response.filter(checkProj15);
      function checkProj15(v) {
        return v == "SOFITEL WAFI MALL";
      }
      setSofitel(proj15.length);

      let proj16 = response.filter(checkProj16);
      function checkProj16(v) {
        return v == "ADANI GROUP";
      }
      setAdanigroup(proj16.length);

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
    getProjects();
    projattendence();
  }, []);

  // Actual revenue Servhub
  let price1 = Math.round(5828 / daysInMonth);
  let servRev = serv * price1;

  // Actual revenue Firstmotors
  let price2 = Math.round(14070 / daysInMonth);
  let firstRev = first * price2;

  // Actual revenue Avani hotels
  let price3 = Math.round(14070 / daysInMonth);
  let avaniRev = avani * price3;

  // Actual revenue Roda hotels
  let price4 = Math.round(56524 / daysInMonth);
  let rodaRev = roda * price4;

  // Actual revenue Fairmount hotels
  let price5 = Math.round(18228 / daysInMonth);
  let fairRev = fair * price5;

  // Actual revenue 25Hrs hotel
  let price6 = Math.round(65100 / daysInMonth);
  let twentyfiveRev = twentyfive * price6;

  // Actual revenue Me dubai
  let price7 = Math.round(21000 / daysInMonth);
  let meRev = me * price7;

  // Actual revenue Grand mellinium business bay
  let price8 = Math.round(40950 / daysInMonth);
  let grandmelRev = grandMel * price8;

  // Actual revenue Grand mellinium tecom
  let price9 = Math.round(40950 / daysInMonth);
  let grandTecRev = grandTec * price9;

  // Actual revenue Hilton
  let price10 = Math.round(40950 / daysInMonth);
  let hiltonRev = hilton * price10;

  // Actual revenue Nuran
  let price11 = Math.round(19751 / daysInMonth);
  let nuranRev = nuran * price11;

  // Actual revenue Avani Ibn Batuta
  let price12 = Math.round(13000 / daysInMonth);
  let avaniIbnRev = avaniIbn * price12;

  // Actual revenue Black platinum
  let price13 = Math.round(3000 / daysInMonth);
  let blackRev = black * price13;

  // Actual revenue Boho cafe
  let price14 = Math.round(2900 / daysInMonth);
  let bohoRev = boho * price14;

  // Actual revenue Sofitel
  let price15 = Math.round(6800 / daysInMonth);
  let sofitelRev = sofitel * price15;

  // Actual revenue Adani
  let price16 = Math.round(2800 / daysInMonth);
  let AdaniRev = adanigroup * price16;

  // Actual revenu Nikki beach
  let price17 = Math.round(2800 / daysInMonth);
  let nikkiRev = nikki * price17;

  // Actual revenue Raffle wafi mall
  let price18 = Math.round(2800 / daysInMonth);
  let raffleRev = raffle * price18;

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
            height: "100%",
          }}
        >
          <div className='birdEyeView-container'>
            <div className='overview'>
              <AttendenceOverview />
              <ProjectOverview />
            </div>
            <div className='all-projects'>
              <div className='project-container'>
                <Cards
                  image='../images/higi-icon.png'
                  title='SERVE-HUB'
                  revenue={Math.round(5828 / daysInMonth)}
                  manpower='3'
                  present={serv}
                  cvalue='5828'
                  arevenue={servRev}
                  difference={price1 - servRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='F1RST MOTORS'
                  revenue={Math.round(14070 / daysInMonth)}
                  manpower='4'
                  present={first}
                  cvalue='14070'
                  arevenue={firstRev}
                  difference={price2 - firstRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='AVANI HOTEL'
                  revenue={Math.round(7000 / daysInMonth)}
                  manpower='2'
                  present={avani}
                  cvalue='7000'
                  arevenue={avaniRev}
                  difference={price3 - avaniRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='RODA AMWAJ JBR '
                  revenue={Math.round(56524 / daysInMonth)}
                  manpower='23'
                  present={roda}
                  cvalue='56524'
                  arevenue={rodaRev}
                  difference={price4 - rodaRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='FAIRMONT HOTEL THE PALM '
                  revenue={Math.round(18228 / daysInMonth)}
                  manpower='5'
                  present={fair}
                  cvalue='18228'
                  arevenue={fairRev}
                  difference={price5 - fairRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='25HRS HOTEL WTC'
                  revenue={Math.round(65100 / daysInMonth)}
                  manpower='18'
                  present={twentyfive}
                  cvalue='65100'
                  arevenue={twentyfiveRev}
                  difference={price6 - twentyfiveRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='ME DUBAI HOTEL BUSINESS BAY'
                  revenue={Math.round(21000 / daysInMonth)}
                  manpower='7'
                  present={me}
                  cvalue='21000'
                  arevenue={meRev}
                  difference={price7 - meRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='GRAND MILLENIUM BUSINESS BAY'
                  revenue={Math.round(40950 / daysInMonth)}
                  manpower='15'
                  present={grandMel}
                  cvalue='40950'
                  arevenue={grandmelRev}
                  difference={price8 - grandmelRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='GRAND MILLENIUM TECOM '
                  revenue={Math.round(40950 / daysInMonth)}
                  manpower='15'
                  present={grandTec}
                  cvalue='40950'
                  arevenue={grandTecRev}
                  difference={price9 - grandTecRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='HILTON JBR'
                  revenue={Math.round(13860 / daysInMonth)}
                  manpower='4'
                  present={hilton}
                  cvalue='13860'
                  arevenue={hiltonRev}
                  difference={price10 - hiltonRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='NURAN DUBAI MARINA'
                  revenue={Math.round(19751 / daysInMonth)}
                  manpower='6'
                  present={nuran}
                  cvalue='19751'
                  arevenue={nuranRev}
                  difference={price11 - nuranRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='AVANI IBN BATUTTA'
                  revenue={Math.round(13000 / daysInMonth)}
                  manpower='5'
                  present={avaniIbn}
                  cvalue='13000'
                  arevenue={avaniIbnRev}
                  difference={price12 - avaniIbnRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='BLACK PLATINUM SALOON'
                  revenue={Math.round(3000 / daysInMonth)}
                  manpower='1'
                  present={black}
                  cvalue='3000'
                  arevenue={blackRev}
                  difference={price13 - blackRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='BOHO CAFE FINANCIAL CENTER'
                  revenue={Math.round(2900 / daysInMonth)}
                  manpower='1'
                  present={boho}
                  cvalue='2900'
                  arevenue={bohoRev}
                  difference={price14 - bohoRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='SOFITEL WAFI MALL'
                  revenue={Math.round(6800 / daysInMonth)}
                  manpower='2'
                  present={sofitel}
                  cvalue='6800'
                  arevenue={sofitelRev}
                  difference={price15 - sofitelRev}
                />
                <Cards
                  image='../images/higi-icon.png'
                  title='ADANI GROUP'
                  revenue={Math.round(2800 / daysInMonth)}
                  manpower='1'
                  present={adanigroup}
                  cvalue='2800'
                  arevenue={AdaniRev}
                  difference={price16 - AdaniRev}
                />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
