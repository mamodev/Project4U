import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchEvents = (api, projectId) =>
  api({ method: "GET", url: `projects/${projectId}/events/` }).then(
    (resp) => resp.data
  );

export default function useProjectEvents(projectId) {
  const { api } = useContext(AuthContext);
  return useQuery(["projects", projectId, "events"], () =>
    fetchEvents(api, projectId)
  );
}
