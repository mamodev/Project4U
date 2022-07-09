import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchProjects = (api, projectId) =>
  api({ method: "GET", url: `projects/` }).then((resp) => resp.data);

export default function useProjects() {
  const { api } = useContext(AuthContext);
  return useQuery(["PROJECTS"], () => fetchProjects(api));
}
