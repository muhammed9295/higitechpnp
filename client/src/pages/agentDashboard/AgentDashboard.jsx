import React, { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import { TextField, Button, Box } from "@mui/material";
import Test from "../../components/sidebar/Test";
import "./agentDashboard.css";
import Axios from "axios";

function AgentDashboard() {
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
            height: "100vh",
          }}
        >
          <div className='agentDashboard'>
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
        </Box>
      </Box>
    </div>
  );
}

export default AgentDashboard;
