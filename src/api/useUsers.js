import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchUsers = (api, filters) =>
  api({ method: "GET", url: `users/` }).then((resp) => resp.data);

export default function useUsers(filters) {
  const { api } = useContext(AuthContext);
  return useQuery(["users", { filters }], () => fetchUsers(api, filters));
}
