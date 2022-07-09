import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchProject = (api, projectId) =>
  api({ method: "GET", url: `projects/${projectId}/` }).then(
    (resp) => resp.data
  );

export default function useProject(projectId) {
  const { api } = useContext(AuthContext);
  return useQuery(["projects", projectId], () => fetchProject(api, projectId));
}
