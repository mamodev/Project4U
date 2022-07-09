import { Box } from "@mui/material";
import PageLoader from "components/layout/PageLoader";
import React from "react";
import { Outlet, Route, Routes, useMatch, useResolvedPath } from "react-router-dom";
import Navbar from "./components/templates/Navbar/Navbar";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";

const Profile = React.lazy(() => import("pages/Profile/Profile"));
const NewProject = React.lazy(() => import("pages/Projects/NewProject"));
const Dashboard = React.lazy(() => import("pages/Projects/ProjectId/Dashboard"));
const ProjectHome = React.lazy(() => import("pages/Projects/ProjectId/Home"));
const ProjectLayout = React.lazy(() => import("pages/Projects/ProjectId/ProjectLayout"));
const ProjectSettings = React.lazy(() => import("pages/Projects/ProjectId/ProjectSettings"));
const ProjectSchedule = React.lazy(() => import("pages/Projects/ProjectId/ProjectShedule"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="profile"
          element={
            <PageLoader>
              <Profile />
            </PageLoader>
          }
        />
        <Route path="projects/*">
          <Route path="empty" />
          <Route
            path="new"
            element={
              <PageLoader>
                <NewProject />
              </PageLoader>
            }
          />
          <Route
            path=":projectId/*"
            element={
              <PageLoader>
                <ProjectLayout />
              </PageLoader>
            }
          >
            <Route
              index
              element={
                <PageLoader>
                  <ProjectHome />
                </PageLoader>
              }
            />
            <Route
              path="calendar"
              element={
                <PageLoader>
                  <ProjectSchedule />
                </PageLoader>
              }
            />
            <Route
              path="settings"
              element={
                <PageLoader>
                  <ProjectSettings />
                </PageLoader>
              }
            />
            <Route
              path="showcases"
              element={
                <PageLoader>
                  <Dashboard />
                </PageLoader>
              }
            />
          </Route>
        </Route>
      </Route>
      ;
    </Routes>
  );
}

function Layout() {
  const loginResolved = useResolvedPath("/login");
  const registerResolved = useResolvedPath("/register");

  const matchLogin = useMatch({
    path: loginResolved.pathname,
    end: true,
  });

  const matchRegister = useMatch({
    path: registerResolved.pathname,
    end: true,
  });

  const renderNavbar = !matchLogin && !matchRegister;
  return (
    <Box mt={renderNavbar ? 8.1 : 0}>
      {renderNavbar && <Navbar />}
      <Outlet />
    </Box>
  );
}
