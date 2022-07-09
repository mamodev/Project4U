import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchUsers = (api, projectId) =>
  api({ method: "GET", url: `projects/${projectId}/users/` }).then(
    (resp) => resp.data
  );

export default function useProjectUsers(projectId) {
  const { api } = useContext(AuthContext);
  return useQuery(["projects", projectId, "users"], () =>
    fetchUsers(api, projectId)
  );
}
