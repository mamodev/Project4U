import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

const patchUser = (api, data) =>
  api({ method: "patch", url: `/user/`, data }).then((response) => response.data);

export default function usePatchUser(config) {
  const { api } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation((data) => patchUser(api, data), {
    ...config,
    onSuccess: (data) => {
      queryClient.setQueryData(["USER"], (old) => ({ ...old, ...data }));
      config?.onSuccess?.();
    },
  });
}
