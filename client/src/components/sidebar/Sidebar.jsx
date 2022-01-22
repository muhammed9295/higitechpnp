import React from "react";
import "./sidebar.css";
import {
  PersonAdd,
  MenuBook,
  Inventory,
  AssignmentTurnedIn,
  SupportAgent,
  Visibility,
  BusinessCenter,
  CompareArrows,
  Error,
  EventAvailable,
  ImportExport,
  Leaderboard,
  ReceiptLong,
  RequestQuote,
  AccountCircle,
  DateRange,
  AddCircleOutline,
  CoPresent,
} from "@mui/icons-material";
import { Divider, Collapse } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const style = { textDecoration: "none", color: "white" };

  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        {/* ANALYTICS-SECTION */}

        {/* <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Analytics</h3>

          <ul className='sidebarList'>
            <Link to='/' style={style}>
              <li className='sidebarListItems'>
                <Visibility className='sidebar-icon' />
                Bird Eye View
              </li>
            </Link>

            <Link to='/project-overview' style={style}>
              <li className='sidebarListItems active'>
                <SupportAgent className='sidebar-icon' />
                Project Overview
              </li>
            </Link>
          </ul>
        </div>
        <Divider /> */}

        {/* STAFF-SECTION */}

        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Staffs</h3>

          <ul className='sidebarList'>
            {/* <Link to='/' style={style}>
                            <li className='sidebarListItems'>
                                <DateRange className='sidebar-icon'/>
                                Schedule Board
                            </li>
                            </Link> */}

            <Link to='/add-new-staff' style={style}>
              <li className='sidebarListItems'>
                <PersonAdd className='sidebar-icon' />
                New Staff Entry
              </li>
            </Link>

            <Link to='/staff-attendance' style={style}>
              <li className='sidebarListItems'>
                <MenuBook className='sidebar-icon' />
                Staff Attendance
              </li>
            </Link>

            <Link to='/staff-database' style={style}>
              <li className='sidebarListItems'>
                <Inventory className='sidebar-icon' />
                Staff Database
              </li>
            </Link>

            <Link to='/project-overview' style={style}>
              <li className='sidebarListItems'>
                <AssignmentTurnedIn className='sidebar-icon' />
                Staff Evaluation
              </li>
            </Link>
          </ul>
        </div>
        <Divider />

        {/* PROJECTS - SECTION */}

        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Projects</h3>

          <ul className='sidebarList'>
            <Link to='/add-new-projects' style={style}>
              <li className='sidebarListItems'>
                <BusinessCenter className='sidebar-icon' />
                Add Projects
              </li>
            </Link>

            <Link to='/mass-migration' style={style}>
              <li className='sidebarListItems'>
                <CompareArrows className='sidebar-icon' />
                Mass Migration
              </li>
            </Link>
          </ul>
        </div>
        <Divider />

        {/* COMPLAINTS-SECTION */}

        {/* <div className="sidebar-menu">
                    <h3 className="sidebar-title">Complaints</h3>
                        
                        <ul className='sidebarList'>
                            
                            <Link to='/' style={style}>
                            <li className='sidebarListItems'>
                                <AddCircleOutline className='sidebar-icon'/>
                                Add Complaints
                            </li>
                            </Link>

                            <Link to='/project-overview' style={style}>
                            <li className='sidebarListItems'>
                                <Error className='sidebar-icon'/>
                                All Complaints
                            </li>
                            </Link>
        
                        </ul>                        
                    </div>
                <Divider /> */}

        {/* HR-SECTION */}

        {/* <div className="sidebar-menu">
                    <h3 className="sidebar-title">Human Resource (HR)</h3>
                        
                        <ul className='sidebarList'>
                            
                        <Link to='/' style={style}>
                            <li className='sidebarListItems'>
                                <CoPresent className='sidebar-icon'/>
                                Screening
                            </li>
                            </Link>
                            
                            <Link to='/' style={style}>
                            <li className='sidebarListItems'>
                                <EventAvailable className='sidebar-icon'/>
                                Scheduled Interviews
                            </li>
                            </Link>

                            <Link to='/project-overview' style={style}>
                            <li className='sidebarListItems'>
                                <ImportExport className='sidebar-icon'/>
                                Visa Status
                            </li>
                            </Link>

                            <Link to='/project-overview' style={style}>
                            <li className='sidebarListItems'>
                                <Leaderboard className='sidebar-icon'/>
                                Performances
                            </li>
                            </Link>
        
                        </ul>                        
                    </div>
                <Divider /> */}

        {/* FINANCE-SECTION */}

        {/* <div className="sidebar-menu">
                    <h3 className="sidebar-title">Finance</h3>
                        
                        <ul className='sidebarList'>
                            
                            <Link to='/' style={style}>
                            <li className='sidebarListItems'>
                                <RequestQuote className='sidebar-icon'/>
                                Pending Payments
                            </li>
                            </Link>

                            <Link to='/project-overview' style={style}>
                            <li className='sidebarListItems'>
                                <ReceiptLong className='sidebar-icon'/>
                                Payroll
                            </li>
                            </Link>

                            <Link to='/project-overview' style={style}>
                            <li className='sidebarListItems'>
                                <Leaderboard className='sidebar-icon'/>
                                Project-wise P&L
                            </li>
                            </Link>
        
                        </ul>                        
                    </div>
                <Divider /> */}

        {/* USER-ACCESS */}

        <div className='sidebar-menu'>
          {/* <h3 className="sidebar-title">Finance</h3> */}

          <ul className='sidebarList'>
            <Link to='/user-access' style={style}>
              <li className='sidebarListItems'>
                <AccountCircle className='sidebar-icon' />
                User Access
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
