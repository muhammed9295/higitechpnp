import React, { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import "./agentDashboard.css";
import Axios from "axios";

function AgentDashboard() {
  const [projects, setProjects] = useState([]);

  const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // Fetch project details
  const getProjects = async () => {
    try {
      const data = await axiosInstance.get("/get-projects");
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
  );
}

export default AgentDashboard;
