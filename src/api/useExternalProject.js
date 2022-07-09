import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchUserExternalProjects = (api) =>
  api({ method: "GET", url: `user/external-projects/` }).then((resp) => resp.data);

export default function useExternalProjects() {
  const { api } = useContext(AuthContext);
  return useQuery(["EXTERNAL_PROJECTS"], () => fetchUserExternalProjects(api));
}
