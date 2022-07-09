import { Fragment, useContext, useRef } from "react";
import AuthContext, { useAuth } from "context/AuthContext";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  Add,
  ChatRounded,
  LogoutOutlined,
  MapsHomeWorkRounded,
  NotificationsOutlined,
  PersonRounded,
  RocketLaunchRounded,
} from "@mui/icons-material";
import { useState } from "react";
import logo from "Assets/Icon/logo_social.png";
import { useNavigate } from "react-router-dom";
import ProjectContext, { useSelectedProject } from "context/ProjectContext";
import useProject from "api/useProject";

export default function Navbar(props) {
  const { isLogged } = useAuth();
  const { navigate: projectNavigate } = useSelectedProject();
  const navigate = useNavigate();
  return (
    <>
      <AppBar sx={{ boxShadow: "none", bgcolor: "transparent" }}>
        <Box sx={{ p: 1, pl: 2, pr: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack spacing={2} direction="row" alignItems="center">
              <img
                width="45px"
                height="45px"
                alt="logo"
                style={{ cursor: "pointer" }}
                src={logo}
                onClick={() => navigate("/")}
              />
              <Typography variant="h6" color="common.white">
                Project4U
              </Typography>
            </Stack>
            {isLogged ? (
              <Stack spacing={2} direction="row" alignItems="center">
                <Stack direction="row" spacing={3} mr={2}>
                  <IconButton color="info">
                    <MapsHomeWorkRounded sx={{ fontSize: 26 }} />
                  </IconButton>
                  <IconButton color="info" onClick={projectNavigate}>
                    <RocketLaunchRounded sx={{ fontSize: 26 }} />
                  </IconButton>
                  <IconButton color="info">
                    <ChatRounded sx={{ fontSize: 26 }} />
                  </IconButton>
                </Stack>
                <Divider orientation="vertical" color="white" sx={{ height: 25, width: "2px" }} />
                <IconButton color="info">
                  <Badge badgeContent={4} color="secondary2">
                    <NotificationsOutlined sx={{ fontSize: 25 }} />
                  </Badge>
                </IconButton>
                <ProfileMenu />
              </Stack>
            ) : (
              <Stack direction="row" spacing={2}>
                <Button color="secondary" variant="rounded" onClick={() => navigate("login")}>
                  Login
                </Button>
                <Button color="secondary2" variant="rounded" onClick={() => navigate("register")}>
                  Register
                </Button>
              </Stack>
            )}
          </Stack>
        </Box>
      </AppBar>
      <svg
        style={{ position: "fixed", top: -15 }}
        width="100%"
        height="100"
        viewBox="0 0 1152 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1096.5 -1H0V19.9674C0 19.9674 190 25.8284 567 78.8726C944 131.917 1096.5 78.8726 1096.5 78.8726V-1Z"
          fill="#F2055C"
        />
        <path
          d="M1152 1.44682H0V84.5098C0 84.5098 227.5 104.998 575 84.5098C922.5 64.0214 1152 84.5098 1152 84.5098V1.44682Z"
          fill="#3D405B"
        />
        <path
          d="M1152 1.44682H0V84.5098C0 84.5098 227.5 104.998 575 84.5098C922.5 64.0214 1152 84.5098 1152 84.5098V1.44682Z"
          fill="#3D405B"
        />
        <path d="M273 1.44531L955 1.44682H1152H0L273 1.44531Z" fill="#3D405B" />
      </svg>
    </>
  );
}

function ProfileMenu(props) {
  const [open, setOpen] = useState(false);
  const { project, projects, changeProject } = useSelectedProject();

  const navigate = useNavigate();
  //FIXME
  const login = useContext(AuthContext);

  const buttonRef = useRef();
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Box sx={{ position: "relative" }} onClick={() => setOpen(true)}>
        <Avatar src={login.data.image} ref={buttonRef} sx={{ height: 45, width: 45 }} />
        {project && (
          <Avatar
            src={project?.image}
            sx={{
              width: 25,
              height: 25,
              position: "absolute",
              right: -5,
              bottom: -5,
              border: 1,
              borderColor: "secondary2.main",
            }}
          />
        )}
      </Box>
      <Menu
        anchorEl={buttonRef.current}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/profile")}>
          <ListItemIcon>
            <PersonRounded fontSize="small" />
          </ListItemIcon>
          Profilo
        </MenuItem>
        <MenuItem onClick={() => login.logout()}>
          <ListItemIcon>
            <LogoutOutlined fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        <Divider textAlign="left">
          <Typography variant="caption">Progetti</Typography>
        </Divider>
        {projects?.map((project, i) => (
          <MenuItem key={i} onClick={() => changeProject(project)}>
            <ListItemIcon>
              <Avatar src={project.image} />
            </ListItemIcon>
            {project.name}
          </MenuItem>
        ))}
        <MenuItem onClick={() => navigate("/projects/new")}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          Nuovo
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
