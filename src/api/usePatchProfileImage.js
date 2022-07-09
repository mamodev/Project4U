import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

const patchUserImage = (api, data) =>
  api({ method: "patch", url: `/user/`, data }).then((response) => response.data);

export default function usePatchProfileImage(config) {
  const { api } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation((data) => patchUserImage(api, data), {
    ...config,
    onSuccess: (data) => {
      queryClient.setQueryData(["USER"], (old) => ({ ...old, image: data.image }));
      config?.onSuccess?.();
    },
  });
}
