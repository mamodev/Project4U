import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

const postExternalProject = (api, data) => {
  const formData = new FormData();
  for (let key in data)
    if (data[key] !== undefined && data[key] !== "") {
      if (!Array.isArray(data[key])) {
        formData.append(key, data[key]);
      } else
        data[key].forEach((element) => {
          formData.append(key, element);
        });
    }

  return api({
    method: "post",
    data: formData,
    url: "/user/external-projects/",
  }).then((response) => response.data);
};

export default function usePostExternalProject(config) {
  const { api } = useContext(AuthContext);
  const queryClient = useQueryClient();

  return useMutation((data) => postExternalProject(api, data), {
    ...config,
    onSuccess: (data) => {
      console.log("response", data);
      queryClient.setQueryData(["EXTERNAL_PROJECTS"], (old) => [
        ...old,
        ...(Array.isArray(data) ? data : [data]),
      ]);
      config?.onSuccess?.();
    },
  });
}
