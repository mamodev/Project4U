import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchShowcases = (api, projectId) =>
  api({ method: "GET", url: `projects/${projectId}/showcases/` }).then(
    (resp) => resp.data
  );

export default function useShowcases(projectId) {
  const { api } = useContext(AuthContext);
  return useQuery(["projects", projectId, "showcases"], () =>
    fetchShowcases(api, projectId)
  );
}
