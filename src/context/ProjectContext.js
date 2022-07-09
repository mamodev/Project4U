import React, { useContext } from "react";

const ProjectContext = React.createContext({});

function useSelectedProject() {
  return useContext(ProjectContext);
}

export { useSelectedProject };
export default ProjectContext;
