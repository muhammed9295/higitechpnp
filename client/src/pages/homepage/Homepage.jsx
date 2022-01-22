import React from "react";
import "./homepage.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AgentDashboard from "../agentDashboard/AgentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirdEyeView from "../birdEyeView/BirdEyeView";
import NewStaffEntry from "../Staffs/newStaffEntry/NewStaffEntry";
import UserAccess from "../userAccess/UserAccess";
import NewUser from "../userAccess/NewUser";
import StaffAttendance from "../Staffs/staffAttendance/StaffAttendance";
import AddProjects from "../projects/addNewProjects/AddProjects";
import MassMigration from "../projects/massMigration/MassMigration";
import Staffdb from "../Staffs/staffDatabase/Staffdb";
import Login from "../login/Login";

function Homepage() {
  return (
    <div className='container'>
      <Sidebar />
    </div>
  );
}

export default Homepage;
