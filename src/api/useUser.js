import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchUser = (api) => api({ method: "GET", url: `user/` }).then((resp) => resp.data);

export default function useUser() {
  const { api } = useContext(AuthContext);
  return useQuery(["USER"], () => fetchUser(api));
}
