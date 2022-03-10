import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import "./test.css";
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
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
// import  from "@mui/material/Toolbar";
// import  from "@mui/material/List";
// import  from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import  from "@mui/material/Divider";
// import  from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import  from "@mui/material/ListItem";
// import  from "@mui/material/ListItemIcon";
// import  from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

function Test() {
  const drawerWidth = 240;
  const style = { textDecoration: "none" };

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position='fixed' open={open} sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                color: "gray",
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <span className='logo'>
              <img src='./images/higi-logo.png' alt='logo' />
            </span>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {/* Bird Eye View */}
          <List>
            <Link to='/bird-eye-view' style={style}>
              <ListItem>
                <ListItemIcon>
                  <Visibility />
                </ListItemIcon>
                <ListItemText>Bird Eye View</ListItemText>
              </ListItem>
            </Link>

            <Link to='/project-overview' style={style}>
              <ListItem>
                <ListItemIcon>
                  <SupportAgent />
                </ListItemIcon>
                <ListItemText>Project Overview </ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />

          {/* Staff Section */}
          <List>
            <Link to='/add-new-staff' style={style}>
              <ListItem>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText>New Staff Entry</ListItemText>
              </ListItem>
            </Link>

            <Link to='/staff-attendance' style={style}>
              <ListItem>
                <ListItemIcon>
                  <MenuBook />
                </ListItemIcon>
                <ListItemText>Staff Attendance</ListItemText>
              </ListItem>
            </Link>

            <Link to='/staff-database' style={style}>
              <ListItem>
                <ListItemIcon>
                  <Inventory />
                </ListItemIcon>
                <ListItemText>Staff Database</ListItemText>
              </ListItem>
            </Link>

            <Link to='/shift-changer' style={style}>
              <ListItem>
                <ListItemIcon>
                  <AssignmentTurnedIn />
                </ListItemIcon>
                <ListItemText>Shift Changer</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />

          {/* Project Section */}
          <List>
            <Link to='/add-new-projects' style={style}>
              <ListItem>
                <ListItemIcon>
                  <BusinessCenter />
                </ListItemIcon>
                <ListItemText>Add Projects</ListItemText>
              </ListItem>
            </Link>

            <Link to='/shift-changer' style={style}>
              <ListItem>
                <ListItemIcon>
                  <CompareArrows />
                </ListItemIcon>
                <ListItemText>Mass Migration</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />

          {/* Complaints Section */}
          {/* <List>
            <ListItem>
              <ListItemIcon>
                <AddCircleOutline />
              </ListItemIcon>
              <ListItemText>Add Complaints</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Error />
              </ListItemIcon>
              <ListItemText>All Complaints</ListItemText>
            </ListItem>
          </List>
          <Divider /> */}

          {/* HR Section */}
          <List>
            <Link to='/profile'>
              <ListItem>
                <ListItemIcon>
                  <CoPresent />
                </ListItemIcon>
                <ListItemText>Screening</ListItemText>
              </ListItem>
            </Link>

            {/* <ListItem>
              <ListItemIcon>
                <EventAvailable />
              </ListItemIcon>
              <ListItemText>Scheduled Interviews</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ImportExport />
              </ListItemIcon>
              <ListItemText>Visa Status</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Leaderboard />
              </ListItemIcon>
              <ListItemText>Performances</ListItemText>
            </ListItem> */}
          </List>
          <Divider />

          {/* Finance Section */}
          {/* <List>
            <ListItem>
              <ListItemIcon>
                <RequestQuote />
              </ListItemIcon>
              <ListItemText>Pending Payments</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ReceiptLong className='sidebar-icon' />
              </ListItemIcon>
              <ListItemText>Payroll</ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Leaderboard />
              </ListItemIcon>
              <ListItemText>Project-wise P&L</ListItemText>
            </ListItem>
          </List>
          <Divider /> */}

          {/* User access */}
          <List>
            <Link to='/user-access' style={style}>
              <ListItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText>User Access</ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Box>
    </div>
  );
}

export default Test;
