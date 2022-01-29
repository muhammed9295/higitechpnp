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

  // Fetch project details
  const getProjects = async () => {
    try {
      const data = await Axios.get(
        "http://185.243.76.148:3001/api/get-projects"
      );
      console.log(data.data);
      setProjects(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
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
                {projects.map((project) => {
                  return (
                    <Cards
                      image='../images/higi-icon.png'
                      title={project.projectname}
                      //   revenue={revenue}
                      manpower={project.staffsrequired}
                      //   present={present}
                      cvalue={project.contractvalue}
                      //   arevenue={arevenue}
                      //   difference={difference}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
