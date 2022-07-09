import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation } from "react-query";

const postShowcase = (api, projectId, data) =>
  api({
    method: "post",
    url: `/projects/${projectId}/showcases/`,
    data: data,
  }).then((response) => response.data);

export default function usePostShowcase(projectId, config) {
  const { api } = useContext(AuthContext);
  return useMutation((data) => postShowcase(api, projectId, data), config);
}
