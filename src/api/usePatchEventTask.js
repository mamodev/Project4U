import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation } from "react-query";

//FIXME only patch name and not checked
const patchEventTask = (api, { id, ...data }) =>
  api({ method: "patch", url: `/event/task/${id}/`, data: data }).then(
    (response) => response.data
  );

export default function usePatchEventTask(config) {
  const { api } = useContext(AuthContext);
  return useMutation((data) => patchEventTask(api, data), config);
}
