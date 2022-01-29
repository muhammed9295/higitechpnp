import React from "react";
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import AgentDashboard from "./pages/agentDashboard/AgentDashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewStaffEntry from "./pages/Staffs/newStaffEntry/NewStaffEntry";
import UserAccess from "./pages/userAccess/UserAccess";
import NewUser from "./pages/userAccess/NewUser";
import StaffAttendance from "./pages/Staffs/staffAttendance/StaffAttendance";
import AddProjects from "./pages/projects/addNewProjects/AddProjects";
import MassMigration from "./pages/projects/massMigration/MassMigration";
import Staffdb from "./pages/Staffs/staffDatabase/Staffdb";
import Login from "./pages/login/Login";
import Protected from "./pages/protectedRoute/Protected";
import ShiftChanger from "./pages/Staffs/shiftChanger/ShiftChanger";
import ProjectDash from "./pages/projectdashboard/ProjectDash";

function App() {
  return (
    <div>
      <Topbar />
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route
            path='/bird-eye-view'
            element={<Protected Comp={AgentDashboard} />}
          />
          <Route
            path='/project-overview'
            element={<Protected Comp={ProjectDash} />}
          />
          <Route
            path='/add-new-staff'
            element={<Protected Comp={NewStaffEntry} />}
          />
          <Route
            path='/user-access'
            element={<Protected Comp={UserAccess} />}
          />
          <Route
            path='/create-new-user'
            element={<Protected Comp={NewUser} />}
          />
          <Route
            path='/staff-attendance'
            element={<Protected Comp={StaffAttendance} />}
          />
          <Route
            path='/add-new-projects'
            element={<Protected Comp={AddProjects} />}
          />
          <Route
            path='/mass-migration'
            element={<Protected Comp={MassMigration} />}
          />
          <Route
            path='/staff-database'
            element={<Protected Comp={Staffdb} />}
          />
          <Route
            path='/shift-changer'
            element={<Protected Comp={ShiftChanger} />}
          />

          {/* <Route path='/dashboard' element={<Protected Comp={Homepage} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
