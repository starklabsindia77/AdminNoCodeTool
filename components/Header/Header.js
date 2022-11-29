import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DiamondIcon from "@mui/icons-material/Diamond";
import Drawer from "@mui/material/Drawer";
import { Collapse, Fade } from "@mui/material";
import ListItems from "../../theme/List/ListItems";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Navbar } from "../Navbar";
import InputField from "../../theme/Input";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/features/counter/counterSlice";

const drawerWidth = 240;

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
    width: `calc(${theme.spacing(8)} + 1px)`,
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

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: "200%",
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [MenuDashboard, setMenuDashboard] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenChat, setOpenChat] = useState(false);
  const [OpenBrowse, setOpenBrowse] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(open ? false : true);
  };

  useEffect(() => {
    if (MenuDashboard) {
      setOpenSearch(false);
      setOpenChat(false);
      setOpenBrowse(false);
    }
  }, [MenuDashboard]);

  useEffect(() => {
    if (OpenSearch) {
      setMenuDashboard(false);
      setOpenChat(false);
      setOpenBrowse(false);
    }
  }, [OpenSearch]);

  useEffect(() => {
    if (OpenChat) {
      setOpenSearch(false);
      setMenuDashboard(false);
      setOpenBrowse(false);
    }
  }, [OpenChat]);

  useEffect(() => {
    if (OpenBrowse) {
      setOpenSearch(false);
      setOpenChat(false);
      setMenuDashboard(false);
    }
  }, [OpenBrowse]);

  const dispatch = useDispatch();

  return (
    <Box className="flex">
      <Box className=" w-16 h-screen bg-[#2b4feb] ">
        <Box className="flex justify-center align-middle pt-5">
          <IconButton onClick={handleDrawerClose}>
            <DiamondIcon
              style={{ color: "white" }}
              className="animate-bounce"
            />
          </IconButton>
        </Box>
        <Box className="flex flex-col justify-center align-middle h-[90vh]">
          <List className="flex flex-1 justify-center align-middle flex-col  ">
            <ListItems
              icon={DashboardIcon}
              color="white"
              active={MenuDashboard}
              OpentoClick={setMenuDashboard}
              OpenValue={MenuDashboard}
            />
            <ListItems
              icon={PublicIcon}
              color="white"
              active={OpenBrowse}
              OpentoClick={setOpenBrowse}
              OpenValue={OpenBrowse}
            />
            <ListItems
              icon={TelegramIcon}
              color="white"
              active={OpenChat}
              OpentoClick={setOpenChat}
              OpenValue={OpenChat}
            />
            <ListItems
              icon={SearchIcon}
              color="white"
              active={OpenSearch}
              OpentoClick={setOpenSearch}
              OpenValue={OpenSearch}
            />
          </List>
        </Box>
      </Box>
      <Collapse orientation="horizontal" in={MenuDashboard} timeout={10}>
        <Box className="h-screen w-64 bg-slate-200 rounded-tr-2xl rounded-br-rounded-tr-2xl">
          <Navbar />
        </Box>
      </Collapse>
      <Collapse orientation="horizontal" in={OpenSearch} timeout={10}>
        <Box className="h-screen w-64 bg-slate-200 rounded-tr-2xl rounded-br-rounded-tr-2xl">
          <Box className="flex justify-center align-middle">
            <InputField label="Search" variant="standard" />
          </Box>
          <Box className="flex justify-center align-middle pt-10">
            <Button
              variant="outlined"
              className="mx-10"
              onClick={() => dispatch(increment())}
            >
              Increment
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

{
  /* <List className="flex flex-1 justify-center align-middle flex-col bg-[#2b4feb] ">
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? (
                      <InboxIcon style={{ color: "white" }} />
                    ) : (
                      <MailIcon style={{ color: "white" }} />
                    )}
                  </ListItemIcon>
                  {/* <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                /> 
                </ListItemButton>
              </ListItem>
            ))}
          </List> */
}