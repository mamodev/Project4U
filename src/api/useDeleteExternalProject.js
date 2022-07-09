import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

const deleteExternalProject = (api, data) =>
  api({ method: "delete", url: `/user/external-projects/${data.id}/` }).then(
    (response) => response.data
  );

export default function useDeleteExternalProjects(config) {
  const { api } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation((data) => deleteExternalProject(api, data), {
    ...config,
    onSettled: (data, error, vars) => {
      queryClient.setQueryData(["EXTERNAL_PROJECTS"], (old) => {
        let newData = [...old];
        newData = newData.filter((e) => e.id !== vars.id);
        return newData;
      });
      config?.onSuccess?.();
    },
  });
}
