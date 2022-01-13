import React from 'react';
import './app.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import AgentDashboard from './pages/agentDashboard/AgentDashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import BirdEyeView from './pages/birdEyeView/BirdEyeView';
import NewStaffEntry from './pages/Staffs/newStaffEntry/NewStaffEntry';
import UserAccess from './pages/userAccess/UserAccess';
import NewUser from './pages/userAccess/NewUser';
import StaffAttendance from './pages/Staffs/staffAttendance/StaffAttendance';
import AddProjects from './pages/projects/addNewProjects/AddProjects';
import MassMigration from './pages/projects/massMigration/MassMigration';
import Staffdb from './pages/Staffs/staffDatabase/Staffdb';


function App() {
  return (
    
    <Router>
      <Topbar />
      <div className='container'>
          
          <Sidebar /> 
            <Routes>
                <Route path="/project-overview"  element={<AgentDashboard />}/>
                <Route path="/" exact element={<BirdEyeView />}/>
                <Route path="/add-new-staff" element={<NewStaffEntry />}/>
                <Route path="/user-access" element={<UserAccess />}/>
                <Route path="/create-new-user" element={<NewUser />}/>
                <Route path="/staff-attendance" element={<StaffAttendance />}/>
                <Route path="/add-new-projects" element={<AddProjects />}/>
                <Route path="/mass-migration" element={<MassMigration />}/>
                <Route path="/staff-database" element={<Staffdb />}/>
            </Routes>      
      </div>
     
    </Router>
    
  );
}

export default App;
