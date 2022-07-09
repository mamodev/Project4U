import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation } from "react-query";

const postEduction = (api, data) =>
  api({ method: "post", url: "/user/educations/", data: data }).then(
    (response) => response.data
  );

export default function usePostEducation(config) {
  const { api } = useContext(AuthContext);
  return useMutation((data) => postEduction(api, data), config);
}
