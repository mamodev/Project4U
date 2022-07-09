import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useMutation } from "react-query";

//FIXME FormData not working with images
const postProject = (api, data) => {
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
    url: "/projects/",
  }).then((response) => response.data);
};

export default function usePostProject(config) {
  const { api } = useContext(AuthContext);
  return useMutation((data) => postProject(api, data), config);
}
