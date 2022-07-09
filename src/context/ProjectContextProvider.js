import useProjects from "api/useProjects";
import AppLoader from "components/templates/AppLoader";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectContext from "./ProjectContext";

export default function ProjectContextProvider({ children }) {
  const navigator = useNavigate();

  //Fecthing projects
  const { data: projects, isSuccess } = useProjects();

  const [selected, setSelected] = useState(null);

  //Get default project (Looking into local storage) => default selected project
  const getData = useCallback(() => {
    const storageProject = window.localStorage.getItem("project");

    const memoSelect =
      storageProject && storageProject !== "undefined"
        ? projects.find((e) => e.name === storageProject)
        : undefined;
    const defaultSelect = projects.length > 0 ? projects[0] : undefined;
    const selected = memoSelect ? memoSelect : defaultSelect;

    if (selected) window.localStorage.setItem("project", selected?.name);
    else window.localStorage.removeItem("project");

    return selected;
  }, [projects]);

  useEffect(() => {
    if (isSuccess) {
      setSelected(getData());
    }
  }, [isSuccess, setSelected, getData]);

  const getProjectId = (name) => {
    return projects?.find((p) => p.name === name)?.id;
  };

  const getProject = (name) => {
    return projects?.find((p) => p.name === name);
  };

  const navigate = (project) => {
    navigator(`/projects/${project.name}`);
  };

  const changeProject = (project) => {
    setSelected(() => {
      window.localStorage.setItem("project", project.name);
      return project;
    });
  };

  const changeProjectById = (id) => {
    const project = projects.find((e) => e.id === id);
    if (project)
      setSelected(() => {
        window.localStorage.setItem("project", project.name);
        return project;
      });
    else throw new Error("Invalid project id provided to changeProjectById");
  };

  return (
    <ProjectContext.Provider
      value={{
        project: selected,
        projects: projects,
        changeProject,
        changeProjectById,
        navigate,
        getProjectId,
        getProject,
      }}
    >
      {isSuccess ? children : <AppLoader open={true} />}
    </ProjectContext.Provider>
  );
}
