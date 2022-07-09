import AuthContext from "context/AuthContext";
import { useContext } from "react";
import { useQuery } from "react-query";

const fetchShowcase = (api, showcaseId) =>
  api({ method: "GET", url: `showcase/${showcaseId}/` }).then(
    (resp) => resp.data
  );

export default function useShowcase(showcaseId) {
  const { api } = useContext(AuthContext);
  return useQuery(["showcase", showcaseId], () =>
    fetchShowcase(api, showcaseId)
  );
}
