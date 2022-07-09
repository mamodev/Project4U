import { Outlet, useParams } from "react-router-dom";
import React, { useContext } from "react";
import ProjectContext from "context/ProjectContext";
import { Box, Stack } from "@mui/material";
import ProjectMenu from "./ProjectMenu";

export default function ProjectLayout() {
  const { projectId } = useParams();
  const { getProject } = useContext(ProjectContext);

  return (
    <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
      <Stack direction="row" px={4} py={2} spacing={6} sx={{ widht: "20%" }}>
        <ProjectMenu project={getProject(projectId)} />
        <Outlet />
      </Stack>
    </Box>
  );
}
